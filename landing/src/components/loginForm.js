import React from 'react'
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup';


const LoginForm = ({
    values,
    errors,
    touched,
    handleSubmit,
}) => (
    <Form onSubmit={handleSubmit}>
        <div>
            <label> 
            Login with an Email
            <Field type='email' name='email' placeholder='Email' value={values.email} onChange={handleChange}/>
            </label>
            { touched.email && errors.email && <small>{errors.email}</small>}
        </div>
        <div>
        <label> 
            Enter your password
            <Field type='password' name='password' placeholder='Password'/>
            </label>
            { touched.password && errors.password && <small>{errors.password}</small>}
        </div>
        <div>
            <button type='submit'>Login</button>
        </div>
    </Form>
)  

const LoginFormick = withFormick({
    mapPropsToValues({email, password }) {
        return {
            email: email || '',
            password: password || '',

        }
    },
    validationSchema: Yup.object.shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(5, 'Password must be 9 charachters or longer').max(30, 'Password must ').required(),
    }),
    handleSubmit(values) {
        
        console.log(values)
    }
})(LoginForm)

render(<LoginFormick />, document.getElementById('root') )
export default LoginForm;