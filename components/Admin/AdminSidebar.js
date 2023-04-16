import {Link} from "react-router-dom";

function AdminSidebar(){
    return(
        <div className="card mt-5">   
            <div className="list-group list-group-flush">
                <div className=""><Link to="/staff-dashboard" className="list-group list-group-item-action fs-1">Admin Dashboard</Link></div>


                <Link to="/liststudent" className="list-group list-group-item-action text-primary list-group-item-dark fs-2">View Student List</Link>
                <Link to="/staff-mycourses" className="list-group list-group-item-action list-group-item-primary fs-2">Add Courses</Link>
                <Link to="/staff-addcourses" className="list-group list-group-item-action list-group-item-info fs-2">Add Studnts</Link>
                {/*<Link to="/classroom" className="list-group list-group-item-action list-group-item-warning fs-2">ClassRoom</Link>*/}
                <Link to="/liststaff" className="list-group list-group-item-action list-group-item-primary fs-2">View Staff Members</Link>
                <Link to="/staff-addcourses" className="list-group list-group-item-action list-group-item-info fs-2">Add Users</Link>
                <Link to="/staff-profile" className="list-group list-group-item-action list-group-item-primary fs-2">Profile</Link>
                <Link to="/staff-login" className="list-group list-group-item-action text-danger list-group-item-danger fs-2">Logout</Link>
            </div>
        </div>
    )

}

export default AdminSidebar;