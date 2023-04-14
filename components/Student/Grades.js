import {Link} from "react-router-dom";
import Sidebar from './Sidebar';

function Grades(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                        <div className="card">
                            <h5 className="card-header">Grades</h5>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Course Code</th>
                                            <th>Course Name</th>
                                            <th>Year</th>
                                            <th>Semester</th>
                                            <th>Credits</th>
                                            <th>Grade</th>
                                            <th>Remark</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>CS100</td>
                                            <td>Computer Applications (Foundation course)</td>
                                            <td>2018/2019</td>
                                            <td>SI</td>
                                            <td>2</td>
                                            <td>A</td>
                                            <td></td>
                                        </tr>
                    
                                        <tr>
                                            <td>CS101</td>
                                            <td>Introduction to Computer Science</td>
                                            <td>2018/2019</td>
                                            <td>SI</td>
                                            <td>2</td>
                                            <td>A-</td>
                                            <td></td>
                                        </tr> 

                                        <tr>
                                            <td>CS102</td>
                                            <td>Programming Techniques</td>
                                            <td>2018/2019</td>
                                            <td>SI</td>
                                            <td>3</td>
                                            <td>A-</td>
                                            <td></td>
                                        </tr> 

                                        <tr>
                                            <td>CS104</td>
                                            <td>Structured oriented Programming Practical</td>
                                            <td>2018/2019</td>
                                            <td>SI</td>
                                            <td>3</td>
                                            <td>B</td>
                                            <td></td>
                                        </tr> 

                                        <tr>
                                            <td>CS105</td>
                                            <td>Object Oriented Programming Practical</td>
                                            <td>2018/2019</td>
                                            <td>SI</td>
                                            <td>1</td>
                                            <td>A-</td>
                                            <td></td>
                                        </tr> 

                                        <tr>
                                            <td>ST102</td>
                                            <td>Introduction to Probability Theory</td>
                                            <td>2018/2019</td>
                                            <td>SI</td>
                                            <td>3</td>
                                            <td>A</td>
                                            <td></td>
                                        </tr> 
                                        
                                        <tr>
                                            <td>MT104</td>
                                            <td>Abstract Algebra I</td>
                                            <td>2018/2019</td>
                                            <td>SI</td>
                                            <td>1</td>
                                            <td>A-</td>
                                            <td></td>
                                        </tr> 

                                        <tr>
                                            <td>MT105</td>
                                            <td>Real Analysis I</td>
                                            <td>2018/2019</td>
                                            <td>SII</td>
                                            <td>3</td>
                                            <td>A</td>
                                            <td></td>
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

export default Grades;
    
