import {  useState } from "react";

import axios from 'axios';
import { clear } from "@testing-library/user-event/dist/clear";

function StaffRegister() {
    const [id, setStaff_id] = useState('');
    const [fname, setfirstName] = useState("");
    const [lname, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [uname, setUsername] = useState("");
    const [pwd, setPassword] = useState("");
    const [mobile, setMobileNumber] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/academicStaff/save", {
            firstName: fname,
            lastName: lname,
            email: email,
            salary : salary,
            mobileNumber : mobile,
            username : uname,
            password : pwd,
          });
          alert("Staff Registation Successfully");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
        <div className="container mt-4" >
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header bg-secondary text-white">Staff Register</h5>
                        <div className="card-body">
    
    			            <form>
                                <div className="form-group mb-3">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" id="fname" placeholder="Enter First Name"
                                    onChange={(event) =>
                                    {
                                        setfirstName(event.target.value);      
                                    }}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" id="lname" placeholder="Enter Last Name"
                                    value={lname}
                                    onChange={(event) =>
                                    {
                                        setlastName(event.target.value);      
                                    }}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter Email Address"
                                    value={email}
                                    onChange={(event) =>
                                    {
                                        setEmail(event.target.value);      
                                    }}
                                    />
                                </div>


                                <div className="form-group mb-3">
                                    <label>Salary</label>
                                    <input type="text" className="form-control" placeholder="Enter Salary" 
                                    value={salary}
                                    onChange={(event) =>
                                    {
                                        setSalary(event.target.value);      
                                    }}
                                    />
                                </div>


                                <div className="form-group mb-3">
                                    <label>Mobile</label>
                                    <input type="text" className="form-control" id="mobile" placeholder="Enter Mobile"
                                    value={mobile}
                                    onChange={(event) =>
                                    {
                                        setMobileNumber(event.target.value);      
                                    }}
                                />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="Enter username" 
                                    value={uname}
                                    onChange={(event) =>
                                    {
                                        setUsername(event.target.value);      
                                    }}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Password" 
                                    value={pwd}
                                    onChange={(event) =>
                                    {
                                        setPassword(event.target.value);      
                                    }}
                                    />
                                </div>

        			            <button type="submit" className="btn btn-primary mt-4" onClick={save} >Register</button>
                                <p className="float-end mb-1">
                                    <a href="/student-register"><button className="btn btn-primary mt-4">Clear</button></a>
                                </p>
      			            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
  }
  
  export default StaffRegister;