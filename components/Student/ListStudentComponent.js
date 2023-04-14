import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import StudentService from '../Services/StudentService'

const ListStudentComponent = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {

        getAllStudents();
    }, [])

    const getAllStudents = () => {
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteStudent = (stu_id) => {
       StudentService.deleteStudent(stu_id).then((response) =>{
        getAllStudents();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Students </h2>
            <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Student </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Student Id </th>
                    <th> Student First Name </th>
                    <th> Student Last Name </th>
                    <th> Student Email Id </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        students.map(
                            student =>
                            <tr key = {student.stu_id}> 
                                <td> {student.stu_id} </td>
                                <td> {student.firstName} </td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-student/${student.stu_id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteStudent(student.stu_id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentComponent