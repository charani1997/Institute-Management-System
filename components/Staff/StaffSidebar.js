import {Link} from "react-router-dom";

function StaffSidebar(){
    return(
        <div className="card mt-5">   
            <div className="list-group list-group-flush">
                <div className=""><Link to="/staff-dashboard" className="list-group list-group-item-action fs-1">Dashboard</Link></div>
                
                <Link to="/staff-mycourses" className="list-group list-group-item-action list-group-item-primary fs-2">My Courses</Link>
                <Link to="/staff-addcourses" className="list-group list-group-item-action list-group-item-info fs-2">Add Courses</Link>
                <Link to="/my-users" className="list-group list-group-item-action list-group-item-warning fs-2">My Users</Link>
                <Link to="/staff-profile" className="list-group list-group-item-action list-group-item-light fs-2">Profile</Link>
                <Link to="/staff-ChangePassword" className="list-group list-group-item-action list-group-item-dark fs-2">Change Password</Link>
                <Link to="/staff-login" className="list-group list-group-item-action text-danger list-group-item-danger fs-2">Logout</Link>
            </div>
        </div>
    )

}

export default StaffSidebar;