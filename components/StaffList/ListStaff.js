import React, {useState, useEffect} from 'react'
import StaffService from '../Services/StaffService'
import StaffHeader from './StaffHeader'
//import StudentFooter from './StudentFooter'
import { Link } from 'react-router-dom'

function ListStaff() {

    const [staffs, setStaffs] = useState([])

    useEffect(() => {
        getStaffs()
    }, [])

    const getStaffs = () =>{
        StaffService.getStaffs().then((response) =>{
            setStaffs(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    };

    const deleteStaff = (staff_id) =>{
       
        StaffService.deleteStaff(staff_id).then((response) =>{
            getStaffs();
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <StaffHeader />

            <h1 className='text-center'>Staff List</h1>
            <Link to="/addstaff" className='btn btn-success mb-2'>Add Staff</Link>

            <table className='table table-striped'>

                <thead>
                    <tr>
                        <th>Staff Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        staffs.map(
                            staff =>
                            <tr key={staff.staff_id}>
                                <td> {staff.staff_id} </td>
                                <td> {staff.firstName} </td>
                                <td> {staff.lastName} </td>
                                <td> {staff.salary} </td>
                                <td> {staff.email} </td>
                                <td>
                                <Link className="btn btn-info" to={`/editstaff/${staff.staff_id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteStaff(staff.staff_id)}
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

export default ListStaff;
