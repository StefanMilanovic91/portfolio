import React, { useState, useContext, useRef, useEffect } from 'react';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import Modal from '../../layout/Modal/Modal';

const Contact = () => {

    const container = useRef();
    const { getContainerHeight } = useContext(GlobalContext);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', msg: '' });
    const [responseMsg, setResponseMsg] = useState([])

    useEffect(() => getContainerHeight(container.current.clientHeight), []);

    const submit = async (e) => {
        e.preventDefault();

        setLoading(true);

        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        let res = await fetch('/form', options).then(res => res.json());

        if (res.errors) {
            let msgs = res.errors.map(err => err.msg);
            setResponseMsg(msgs);
        } else {
            setFormData({name: '', email: '', msg: ''});
            setResponseMsg([res.msg]);
        }
        
        setTimeout(() => {
            setLoading(false);
            setResponseMsg([]);
        }, 3000);
        
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div ref={container} className="Contact">
            { loading ? <Modal msg={responseMsg} /> : null }
            <div className="container mx-auto">
                <div className="Contact__title-holder">
                    <h1 className="Contact__title">Contact</h1>
                    <span className="contact-page-icon"></span>
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <div className="form-title mb-6">
                    <h3>Let's Talk</h3>
                </div>
                <form onSubmit={submit} className="Form mx-auto">
                    <div className="row form-group-holder">
                        <div className="form-group">
                            <input required onChange={onChange} name="name" value={formData.name} className="form-control" type="text" />
                            <label  className={formData.name.trim() !== '' ? 'label visited' : 'label'} htmlFor="name">Name *</label>                        
                        </div>
                        <div className="form-group">
                            <input required onChange={onChange} value={formData.email} name="email" className="form-control" type="email" />
                            <label className={formData.email.trim() !== '' ? 'label visited' : 'label'} htmlFor="email">Email *</label>
                        </div>
                    </div>
                    <div className="row text-area mt-5">
                        <textarea onChange={onChange} value={formData.msg} name="msg" className="form-control" cols="30" rows="10"></textarea>
                        <label className={formData.msg.trim() !== '' ? 'label visited' : 'label'} htmlFor="msg">How can I help You? *</label>
                    </div>
                    <button className="btn btn-contact" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
