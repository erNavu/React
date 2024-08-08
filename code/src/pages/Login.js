import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "../styles/login.css"

const Login = () => {

    const validations = (values) => {
        const errors = {};
        if (!values.phoneNo) {
            errors.phoneNo = "Required";
        } else if (values.phoneNo.toString().length !== 10) {
            errors.phoneNo = "Invalid phone number";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }
        if (!values.password) {
            errors.password = "Required";
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters"
        }
        return errors;
    }

    const handleSubmit = (values, setSubmitting) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }

    return (
        <div className="login_container">
            <h1>Login</h1>
            <Formik
                initialValues={{ phoneNo: "", email: "", password: "" }}
                validate={(values) => validations(values)}
                onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            type="number"
                            name="phoneNo"
                            placeholder="Enter your phone number"
                        />
                        <ErrorMessage name="phoneNo" className='error-message' component="div" />

                        <Field
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                        />
                        <ErrorMessage name="email" className='error-message' component="div" />

                        <Field type="password" name="password" placeholder="Enter password" />
                        <ErrorMessage name="password" className='error-message' component="div" />

                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login