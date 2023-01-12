import {Link} from 'react-router-dom';

function AllStaff(){
    return(
        <div className="container mt-3">
        <h3 className="pb-1 mb-4 mt-5">Staff</h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/staff-detail/1"><img src="chandimal-jayawardena.jpg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff-detail/1">Prof. C Jayawardena</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/staff-details2/1"><img src="kalpanim-mt.jpg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff-detail2/1"><br/><br/>Dr. Kalpani Manathunga</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/staff-details2/1"><img src="Images/staff3.jpeg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff-details2/1">Dr. Sumudu</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/staff-details2/1"><img src="p1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff-details2/1">Dr. P Dissanayake</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default AllStaff;