import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function CourseDetail(){
    let {course_id}=useParams();
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-8">
                    <h3>Course Title: CS400</h3>
                    <p className="fw-bold">Course Description: Computer Networking</p>
                    <p className="fw-bold">Course By: <Link to="/staff-detail/1">Prof. Chandimal Jayawardena</Link></p>
                    <p className="fw-bold">Credits: 3</p>
                    <p className="fw-bold">Duration: 30 hour</p>
                    <p className="fw-bold">Total Enrolled: 400 students</p>

                </div>
        
                {/*Course videos*/}

                <div className="card mt-4">
                    <div className="card-header">
                        Videos
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Introduction 1 
                            <span className="float-end">
                                <span className="me-5">1 Hour 30 Minutes</span>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal1"><i className="bi-youtube"></i></button>
                            </span>
                            {/*Modal*/}
                            <div class="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">CS400-Introduction 1</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Modal*/}
                        </li>
                        <li className="list-group-item">Introduction 2 
                            <span className="float-end">
                                <span className="me-5">1 Hour</span>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal2"><i className="bi-youtube"></i></button>
                            </span>
                            {/*Modal*/}
                            <div class="modal fade" id="videoModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">CS400-Introduction 2</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Modal*/}
                        </li>
                        <li className="list-group-item">Introduction 3 
                            <span className="float-end">
                                <span className="me-5">1 Hour</span>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal3"><i className="bi-youtube"></i></button>
                            </span>
                            {/*Modal*/}
                            <div class="modal fade" id="videoModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">CS400-Introduction 3</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Modal*/}
                        </li>
                        <li className="list-group-item">Introduction 4 
                            <span className="float-end">
                                <span className="me-5">1 Hour</span>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal4"><i className="bi-youtube"></i></button>
                            </span>
                            {/*Modal*/}
                            <div class="modal fade" id="videoModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">CS400-Introduction 4</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Modal*/}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;