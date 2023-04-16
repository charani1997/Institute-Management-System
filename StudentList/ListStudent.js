import React, {useState, useEffect} from 'react'
import StudentService from '../components/Services/StudentService'
import StudentHeader from './StudentHeader'
import StudentFooter from './StudentFooter'
import { Link } from 'react-router-dom'

function ListStudent() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = () =>{
        StudentService.getStudents().then((response) =>{
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    const deleteStudent = (stu_id) =>{
        //console.log(stu_id);
        StudentService.deleteStudent(stu_id).then((response) =>{
            getStudents();
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <StudentHeader />

            <h1 className='text-center'>Students List</h1>
            <Link to="/addstudent" className='btn btn-success mb-2'>Add Student</Link>

            <table className='table table-striped'>

                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        students.map(
                            student =>
                            <tr key={student.stu_id}>
                                <td> {student.stu_id} </td>
                                <td> {student.firstName} </td>
                                <td> {student.lastName} </td>
                                <td> {student.email} </td>
                                <td>
                                <Link className="btn btn-info" to={`/editstudent/${student.stu_id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteStudent(student.stu_id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
            <StudentFooter />
            
        </div>
    )
}

export default ListStudent;
