import React from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 

const AddEmployeeForm = ({
    errors,
    touched,
    handleSubmit,  
}) => (
    <div className="formPage">
    <div className="addEmployeeDiv">
        <h3>Add a new employee to your company</h3>
    <Form onSubmit={handleSubmit}>
        <div className="stack">
        <label>
           Give manager permissions?
            <Field type="checkbox" name="managerPerm" />
        </label>
        </div>
        <div className="stack">
        <label>
             Select Department
            <Field component="select" name="addDepartment">
                <option value="dprHr">Human Resources</option>
                <option value="drpAc">Accouting</option>
                <option value="dprEn">Engineering</option>
                <option value="dprRe">Recruitment</option>
                <option value="dprMa">Marketing</option>
            </Field> 
        </label>
        </div>
        <div className="stack">
        <label>
           Who is thier manager
            <Field type="text" name="managerWho" placeholder="Manager Name"/>

        </label>
        </div>
        <div className="stack">
        <label>
            Employee Name
            <Field type="text" name="name" placeholder="Juan Wick"/>

        </label>
        </div>
        <div className="stack">
        <label>
            Job Title
            <Field type="text" name="job" placeholder="Software Engineer"/>

        </label>
        </div>
        <div>
            <button className="aBtn" type="submit">Add Employee</button>
        </div>
        <div>
            <NavLink to='/dashboard'>Return To Dashboard</NavLink>
        </div>
        </Form>
        </div>
        
    </div>  
)
const FormikEmployeeForm = withFormik({
    mapPropsToValues({ managerPerm, addDepartment, name, job }) {
        return{
            managerPerm: managerPerm || '',
            addDepartment:  addDepartment || '',
            name: name || '',
            job: job || '',
          }
    },
        validationSchema: Yup.object().shape({
            // managerPerm: Yup.required(),
            // addDepartment: Yup.required(),
            // managerWho: Yup.required().string(),
            // name: Yup.required().string(),
            // job: Yup.required().string(),
    }),
})(AddEmployeeForm)



render(<Router><FormikEmployeeForm /></Router>, document.getElementById('root') )
export default FormikEmployeeForm;