import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function AllCourses2(){
    useEffect(()=>{
        document.title='WISDOM | Courses'
    });
    return(
        <div className="container mt-4 mb-2 bg-secondary text-white">
        {/*Latest Courses*/}
            <h3 className="pb-1 mb-4">Courses</h3>
            <div className="row mb-4">
                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>


                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="detail2/1"><img src= "mt.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail2/1">Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/3"><img src="st.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Statistics</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/3"><img src="chem.jpg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Chemistry</a></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>
                
            </div>
            {/*End Latest Courses*/}
            {/*Pegination start here */}
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center pagination-lg">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><Link className="page-link" to="/all-courses">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/all-courses2">2</Link></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/*End*/}
        </div>
    )
}

export default AllCourses2;