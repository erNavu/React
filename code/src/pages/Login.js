import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "../styles/login.css"
import { UserContext } from '../utils/UserContext';

const Login = () => {
    const { setUserData } = useContext(UserContext)
    const navigate = useNavigate();

    const validations = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Required";
        } else if (values.name.length < 3) {
            errors.name = "Name must be at least 3 characters"
        }
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
        setUserData(values)
        setSubmitting(false);
        navigate('/profile')
    }

    return (
        <div className="login_container">
            <h1>Login Page</h1>
            <Formik
                initialValues={{ phoneNo: "", email: "", password: "", name: "" }}
                validate={(values) => validations(values)}
                onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="name" placeholder="Enter your Name" />
                        <ErrorMessage name="name" className='error-message' component="div" />
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