import {Link} from "react-router-dom";
import StaffSidebar from "./StaffSidebar";
import { useEffect } from "react";

function StaffDashboard(){
    useEffect(()=>{
        document.title='WISDOM | Staff-Dashboard'
    });
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <StaffSidebar />
                </aside>
                <section className="col-md-9">
                    Staff Dashboard
                </section>
            </div>
        </div>
    )
}

export default StaffDashboard;