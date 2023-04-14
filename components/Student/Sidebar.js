import {Link} from "react-router-dom";

function Sidebar(){
    return(
        <div className="card">   
            <div className="list-group list-group-flush">
                <Link to="/user-dashboard" className="list-group list-group-item-action text-center fs-1">Dashboard</Link>
                <Link to="/user-mycourses" className="list-group list-group-item-action list-group-item-primary fs-2">My Courses</Link>
                <Link to="/user-grades" className="list-group list-group-item-action list-group-item-info fs-2">Grades</Link>
                <Link to="/course-register" className="list-group list-group-item-action list-group-item-warning fs-2">Course Registration</Link>
                <Link to="/user-profile" className="list-group list-group-item-action list-group-item-light fs-2">Profile</Link>
                <Link to="/ChangePassword" className="list-group list-group-item-action list-group-item-dark fs-2">Change Password</Link>
                <Link to="/user-login" className="list-group list-group-item-action text-danger list-group-item-danger fs-2">Logout</Link>
            </div>
        </div>
    )

}

export default Sidebar;