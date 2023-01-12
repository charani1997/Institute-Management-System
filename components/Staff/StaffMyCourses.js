import {Link} from "react-router-dom";
import StaffSidebar from './StaffSidebar';

function StaffMyCourses(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <StaffSidebar />
                </aside>
                <section className="col-md-9">
                        <div className="card">
                            <h5 className="card-header">My Courses</h5>
                            <div className="card-body">
                                <table className="table table-bordered border-primary">
                                    <thead>
                                        <tr>
                                            <th>Course Code</th>
                                            <th>Course Name</th>
                                            <th>Year</th>
                                            <th>Semester</th>
                                            <th>Credits</th>
                                            <th>Remark</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>CS303</td>
                                            <td>Operating Systems Concepts</td>
                                            <td>2020/2021</td>
                                            <td>SI</td>
                                            <td>3</td>
                                            <td>P</td>
                                        </tr>

                                        <tr>
                                            <td>CS304</td>
                                            <td>Project in Computing I</td>
                                            <td>2020/2021</td>
                                            <td>SI</td>
                                            <td>3</td>
                                            <td>P</td>
                                        </tr>
                                        <tr>
                                            <td>CS310</td>
                                            <td>Sever side Web Programming</td>
                                            <td>2020/2021</td>
                                            <td>SI</td>
                                            <td>3</td>
                                            <td>P</td>
                                        </tr>

                                        <tr>
                                            <td>CS311</td>
                                            <td>Software Engineering</td>
                                            <td>2020/2021</td>
                                            <td>SI</td>
                                            <td>2</td>
                                            <td>P</td>
                                        </tr>

                                        <tr>
                                            <td>CS315</td>
                                            <td>Design and Analysis of Algorithms</td>
                                            <td>2020/2021</td>
                                            <td>SI</td>
                                            <td>2</td>
                                            <td>P</td>
                                        </tr>

                                        <tr>
                                            <td>CS313</td>
                                            <td>Image Processing</td>
                                            <td>2020/2021</td>
                                            <td>SI</td>
                                            <td>2</td>
                                            <td>P</td>
                                        </tr>

                                        <tr>
                                            <td>CS314</td>
                                            <td>Image Processing Practical</td>
                                            <td>2020/2021</td>
                                            <td>SI</td>
                                            <td>1</td>
                                            <td>P</td>
                                        </tr>

                                        <tr>
                                            <td>GL327</td>
                                            <td>Remote Sensing, GIS and GPS</td>
                                            <td>2020/2021</td>
                                            <td>SI</td>
                                            <td>3</td>
                                            <td>P</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}

export default StaffMyCourses;
    
