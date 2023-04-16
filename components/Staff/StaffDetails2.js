import {Link} from "react-router-dom";
function StaffDetails2(){
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/Images/staff7.jpg" className="img-thumbnail" alt="..."/>
                </div>
                <div className="col-8">
                    <h3>Dr. Kalpani Silva</h3>
                    <p className="fw-bold">Profile:
                    <p className="fw-normal text-justify">Senior Lecturer (Higher Grade) at the Department of Computer Science and Software Engineering, Sri Lanka Institute of Information Technology
                        Graduate Teaching Assistant at the Department of Information and Communication Technologies, Pompeu Fabra University, Spain
                        Lecturer at the Department of Information Technology, Sri Lanka Institute of Information Technology
                        Assistant Lecturer at the Department of Information Technology, Sri Lanka Institute of Information Technology.</p></p>
                    <p className="fw-bold">Academic Qualification: <p className="fw-normal fst-italic text-justify">PhD in Information and Communication Technologies, Pompeu Fabra University, Barcelona, Spain (2017)
                            Master of Computer Science, University of Colombo, Sri Lanka (2011)  <br/>
                            BSc in Information Technology, Curtin University of Technology, Australia (2007)</p>
                    </p>
                    <p className="fw-bold">Contact:
                    <p className="fw-normal">+94 11 2572232<br/><a href='#'>kalpani.s@wisdom.lk</a><br/></p>
                    </p>

                </div>
            </div>
            </div>
    );

}

export default StaffDetails2;