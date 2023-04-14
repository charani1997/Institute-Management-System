import {Link} from 'react-router-dom';

function AllStaff(){
    return(
        <div className="container mt-3">
        <h3 className="pb-1 mb-4 mt-5 bg-dark text-light fw-bold">Our Academic Staff</h3>
            <div className="row mb-4">
                <div className="col-md-2">
                    <div className="card">
                        <Link to="staff1/1"><img src="Images/staff14.jpg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="staff1/1"><br/>Prof. Jayawardena</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff-details2/1"><img src="Images/staff7.jpg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff-details2/1"><br/>Dr. Kalpani Silva</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff3/1"><img src="Images/staff13.jpg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/staff3/1"><br/>Dr. Sumudu</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <Link to="/staff4/1"><img src="Images/staff10.jpeg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff4/1"><br/>Dr. P Dissanayake</Link></h5>
                        </div>
                    </div>
                </div>


                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff5/1"><img src="Images/staff12.jpeg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/staff5/1"><br/>Dr. Nawarathna</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <Link to="/staff6/1"><img src="Images/staff5.jpeg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff6/1"><br/>Dr.Isuri Perera</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <Link to="/staff7/1"><img src="/Images/staff4.jpeg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff7/1"><br/>Prof. Aloka</Link></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff8/1"><img src="Images/staff3.jpeg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff8/1">Prof. Arun</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff9/1"><img src="Images/staff2.jpeg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/staff9/1">Dr. Piyumi Shenali</a></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff10/1"><img src="Images/staff8.jpg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff10/1"><br/>Prof. Arunodhika</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff11/1"><img src="Images/staff6.jpg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/staff11/1"><br/>Dr. Ruwani Warsha</a></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff12/1"><img src="Images/staff11.jpeg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/staff12/1"><br/>Dr. Raveen Kulathunga</a></h5>
                        </div>
                    </div>
                </div>



            </div>
            </div>




        )
}

export default AllStaff;