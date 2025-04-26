import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import React from 'react'
import * as Yup from 'yup'

const Contactpage = () => {
    const handleSubmit = () => {
        alert("Form submitted")
    }
    return (
        <Formik initialValues={{ name: "", email: "", message: "" }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(20, 'Must be less than 20 letters')
                    .min(3, 'Must be greater than 3 letters')
                    .matches(/^[a-zA-Z]+$/, 'must be in alphabets only')
                    .required('Name is mandatory'),

                email: Yup.string()
                    .matches(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])/, 'Invalid email format')
                    .required('Email is mandatory'),

            })}
        >

            <div className="contact-container">
                <form action="control " className='contact-left'>
                    <div className='contact-left-title'>
                        <h2>Get In Touch</h2>
                        <hr />
                    </div>
                    <input type="text" name="name" placeholder="Enter Your Name" className="contact-inputs" required />
                    <input type="text" name="email" placeholder="Enter Your Email" className="contact-inputs" required />
                    <textarea name="message" placeholder="Enter Your Message" className="contact-inputs" required />
                    <button type="submit" className="contact-btn" onClick={handleSubmit}>Submit</button>
                </form>
                <div className='contact-right'>
                    <img src="images/contact.png" alt="img" />
                </div>

            </div>
        </Formik>
    )
}

export default Contactpage
