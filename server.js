const express = require('express');
const sgMail = require('@sendgrid/mail');
const { check, validationResult } = require('express-validator');
const path = require('path');
const expressStaticGzip = require("express-static-gzip");
require("dotenv").config();


const app = express();
app.use(express.json({ extended: false })); 


if (process.env.NODE_ENV === 'production') {

    app.use(expressStaticGzip(path.join(__dirname, 'client/build')));

    //set static folder
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

// routes
app.post('/form', [
    check('name', 'Name is required!').trim().isLength({min: 2}),
    check('email', 'Enter a valid email address').isEmail(),
    check('msg', 'Message is required!').trim().isLength({ min: 1 })
], (req, res) => {
        
        // check errors
        let err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({ errors: err.array() });
        }

        try {
            
            //set api key
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            // send email
            const msg = {
                to: 'stefmil91@protonmail.com',
                from: process.env.SENDGRID_VERIFIED_USER,
                subject: 'Contact from Portfolio',
                html:   `<body>
                            <h2>e-mail: ${req.body.email}</h2>
                            <h2>name: ${req.body.name}</h2>

                            <h5>Poruka:</h5>
                            <p>${req.body.msg}</p>
                        </body>`
            }
            sgMail.send(msg).then(() => {
                return res.status(200).json({ errors: [{ msg: 'Mail send successfully.' }] });
            }).catch((err) => {
                return res.status(503).json({ errors: [{ msg: 'Something went wrong, please be patient.' }] });
            })


        } catch (error) {
            res.json({ errors: [{msg: 'Something went wrong.'} ] }); 
        }
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
})