import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Signuppage = () => {
    const handleSubmit = () => {
        alert("Form submitted")
    }
    return (
        <Formik initialValues={{ fname: "", lname: "", email: "", pwd: "" }}
            validationSchema={Yup.object({
                fname: Yup.string()
                    .max(20, 'Must be less than 20 letters')
                    .min(3, 'Must be greater than 3 letters')
                    .matches(/^[a-zA-Z]+$/, 'must be in alphabets only')
                    .required('First Name is mandatory'),

                lname: Yup.string()
                    .max(20, 'Must be less than 20 letters')
                    .min(3, 'Must be greater than 3 letters')
                    .matches(/^[a-zA-Z]+$/, 'must be in alphabets only')
                    .required('Last Name is mandatory'),

                email: Yup.string()
                    .matches(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])/, 'Invalid email format')
                    .required('Email is mandatory'),
                pwd: Yup.string()
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/, 'Weak Password')
                    .required('Password is mandatory'),





            })}
        >

            <div className="container my-5 bg bg-warning-subtle">
                <div className="d-flex justify-content-evenly">
                    <div className="col-md-5">
                        <Form action="" className="p-3 border-shadow-rounded-4" onSubmit={handleSubmit}>
                            <h3 className="text-center bg text-success bg-secondary-subtle rounded">Register for Free</h3>
                            <hr />

                            <div className="row row-cols-2">
                                <div className="form-floating mb-3">
                                    <Field type="text" placeholder="" className="form-control" id='fname' name="fname" />
                                    <label className="mx-3" htmlFor="fname">First Name</label>
                                    <ErrorMessage name='fname'>
                                        {msg => <span className='text-danger'>{msg}</span>}
                                    </ErrorMessage>
                                </div>

                                <div className="form-floating mb-3">
                                    <Field type="text" placeholder="" className="form-control " id='lname' name="lname" />
                                    <label className="mx-3" htmlFor="lname" >Last Name</label>
                                    <ErrorMessage name='lname'>
                                        {msg => <span className='text-danger'>{msg}</span>}
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <Field type="email" placeholder="" className="form-control" id='email' name="email" />
                                <label htmlFor="email" >Email Adress</label>
                                <ErrorMessage name='email'>
                                    {msg => <span className='text-danger'>{msg}</span>}
                                </ErrorMessage>
                            </div>

                            <div className="form-floating">
                                <Field type="password" placeholder="" className="form-control" id='pwd' name="pwd" />
                                <label htmlFor="pwd" >Password</label>
                                <ErrorMessage name='pwd'>
                                    {msg => <span className='text-danger'>{msg}</span>}
                                </ErrorMessage>
                            </div>
                            <hr />
                            <div className="mb-3 w-100 m-auto">
                                <input className="btn btn-primary rounded-pill w-100" type="submit" value="Register" />
                            </div>
                            <hr />
                            <small>Already Have An Account?<a href="#"> Login Here</a></small>
                        </Form>
                    </div>

                    <div className="col-md-4">
                        <img src="Images/signup img.webp" alt="" width="100%" height="100%" />
                    </div>
                </div>
            </div>


        </Formik>
    )
}

export default Signuppage
