import {Link} from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import {useEffect} from "react";

function AdminDashboard(){
    useEffect(()=>{
        document.title='WISDOM | Admin-Dashboard'
    });
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <AdminSidebar />
                </aside>
                <section className="col-md-9">
                    Admin Dashboard
                </section>
            </div>
        </div>
    )
}

export default AdminDashboard;