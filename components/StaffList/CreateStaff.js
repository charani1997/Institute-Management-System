import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import StaffService from '../Services/StaffService';

const CreateStaff = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [salary, setSalary] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateStaff = (e) => {
        e.preventDefault();

        const staff = {firstName, lastName, salary, email}
        





         if(id){
            StaffService.updateStaff(id, staff).then((response) => {
                navigate("/liststaff");
            }).catch(error => {
                console.log(error)
            })

        }else{
        StaffService.createStaff(staff).then((response) =>{
            console.log(response.data)
            navigate("/liststaff");
        }).catch(error =>{
            console.log(error)
        })
        }
        
    }

    useEffect(() => {

        StaffService.getStaffById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setSalary(response.data.salary)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Staff</h2>
        }else{
            return <h2 className = "text-center">Add Staff</h2>
        }
    } 

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Salary :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter Salary"
                                        name = "salary"
                                        className = "form-control"
                                        value = {salary}
                                        onChange = {(e) => setSalary(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email:</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateStaff(e)} >Submit </button>
                                <Link to="/liststaff" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default CreateStaff