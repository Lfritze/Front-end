import React from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 

const SignupForm = ({
    errors,
    touched,
    handleSubmit,
}) => (
    <div className="formPage">
        <div className="formDiv">
            <h2 className="landingTitle">Sign up for Streemly</h2>
            <small>Enter your deisred email and password to unlock the greatest HR tool man has ever made!</small>
            <Form onSubmit={handleSubmit}> 
            <div>
            <label>
                Enter an email.
                <Field type="email" name="email" placeholder="Email" />
                { touched.email && errors.email && <small>{errors.email}</small> }
            </label>
            </div>
            <div>
            <label>
                Enter an password.
                <Field type="password" name="password" placeholder="Password" />
                { touched.password && errors.password && <small>{errors.password}</small>}
            </label>
            </div>
            <div>
            <button class="aBtn">Sign Up</button>
            </div>
            </Form>

            <Router><NavLink to='/'>Return to home.</NavLink></Router>
        </div>
        <small>Copyright (c) 2019 Build-Week-Org-Chart</small>
    </div>
)

const FormikSignupForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    };
  },
      validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(5, 'Password must be 5 characters or longer').max(30, 'Password must be less than 30 characters').required(),
    }),

//   handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    
    
//   }
})(SignupForm);

export default FormikSignupForm;

render(<FormikSignupForm />, document.getElementById('root') )
