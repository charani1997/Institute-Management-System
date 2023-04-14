/* import axios from 'axios';
import {useEffect, useState } from "react";

function StudentList()
{
  const [stu_id, setStu_id] = useState('');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setUsers] = useState([]);

useEffect(() => {
  (async () => await Load())();
  }, []);


  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8080/api/v1/student/getAllStudent");
         setUsers(result.data);
         console.log(result.data);
  }
 
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/api/v1/student/save",
        {
          firstname: firstName,
          lastname: lastName,
          dateOfBirth: dateOfBirth,
          admissionDate: admissionDate,
          email: email,
          address: address,
          username: userName,
          firstname: firstName,
          password: password,
          mobile: mobile
        });
          alert("Student Registation Successfully");
          setStu_id("");
          setFirstName("");
          setLastName("");
          setDob("");
          setAdmissionDate("");
          setEmail("");
          setAddress("");
          setUserName("");
          setPassword("");
          setMobile("");
          Load();
        }
    catch(err)
        {
          alert("Student Registation Failed");
        }
   }

   async function editStudent(students)
   {
    setFirstName(students.firstname);
    setLastName(students.lastname);
    setDob(students.dateOfBirth);
    setAdmissionDate(students.admissionDate);
    setEmail(students.email);
    setAddress(students.address);
    setUserName(students.username);
    setPassword(students.password);
    setMobile(students.mobile); 
    setStu_id(students.stu_id);
   }

   async function DeleteStudent(stu_id)
   {
        await axios.delete("http://localhost:8080/api/v1/student/deleteStudent/" + stu_id); 
        alert("Student deleted Successfully");
        Load();
   }

   async function update(event)
   {
    event.preventDefault();

   try
       {
        await axios.put("http://localhost:8080/api/v1/student/updateStudent/",
       {
        stu_id: stu_id,
        firstname: firstName,
        lastname: lastName,
        dateOfBirth: dateOfBirth,
        admissionDate: admissionDate,
        email: email,
        address: address,
        username: userName,
        firstname: firstName,
        password: password,
        mobile: mobile
       
       });
         alert("Registation Updated");
         setStu_id("");
         setFirstName("");
         setLastName("");
         setDob("");
         setAdmissionDate("");
         setEmail("");
         setAddress("");
         setUserName("");
         setPassword("");
         setMobile("");
         Load();
       }
   catch(err)
       {
         alert("Student Registation Failed");
       }
  }
  return (
    <div>
       <h1>Student Details</h1>
       <div class="container mt-4" >
          <form>
              <div class="form-group">
               <input  type="text" class="form-control" id="stu_id" hidden
               value={stu_id}
               onChange={(event) =>
                {
                  setStu_id(event.target.value);      
                }} 
               />
                <label>Student First Name</label>
                <input  type="text" class="form-control" id="firstname"
                value={firstName}
                onChange={(event) =>
                  {
                    setFirstName(event.target.value);      
                  }}
                />
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input  type="text" class="form-control" id="lastname" 
                 value={lastName}
                  onChange={(event) =>
                    {
                      setLastName(event.target.value);      
                    }}
                />
              </div>
              <div class="form-group">
                <label>dob</label>
                <input  type="date" class="form-control" id="dob" 
                 value={dateOfBirth}
                  onChange={(event) =>
                    {
                      setDob(event.target.value);      
                    }}
                />
              </div>
              <div class="form-group">
                <label>Admission Date</label>
                <input  type="date" class="form-control" id="admission" 
                 value={admissionDate}
                  onChange={(event) =>
                    {
                      setAdmissionDate(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Email</label>
                <input  type="email" class="form-control" id="email" 
                 value={email}
                  onChange={(event) =>
                    {
                      setEmail(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Address</label>
                <input  type="text" class="form-control" id="address" 
                 value={address}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Username</label>
                <input  type="text" class="form-control" id="username" 
                 value={userName}
                  onChange={(event) =>
                    {
                      setUserName(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input  type="password" class="form-control" id="pwd" 
                 value={password}
                  onChange={(event) =>
                    {
                      setPassword(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control" id="mobile" 
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />
              </div>
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>

<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Dob</th>
      <th scope="col">Admission Date</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">UserName</th>
      <th scope="col">Mobile Number</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {students.map(function fn(student)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{student.stu_id} </th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.admissionDate}</td>
                <td>{student.email}</td>
                <td>{student.userName}</td>
                <td>{student.address}</td>
                <td>{student.mobile}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editStudent(student)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteStudent(student.stu_id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
 
export default StudentList()
; */