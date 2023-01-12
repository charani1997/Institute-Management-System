import {Link} from "react-router-dom";
function StaffDetails2(){
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/kalpanim-mt.jpg" className="img-thumbnail" alt="..."/>
                </div>
                <div className="col-8">
                    <h3>Dr. Kalpani Manathunga</h3>
                    <p className="fw-bold">Profile:
                    <p className="fw-normal">Senior Lecturer (Higher Grade) at the Department of Computer Science and Software Engineering, Sri Lanka Institute of Information Technology
                        Graduate Teaching Assistant at the Department of Information and Communication Technologies, Pompeu Fabra University, Spain
                        Lecturer at the Department of Information Technology, Sri Lanka Institute of Information Technology
                        Assistant Lecturer at the Department of Information Technology, Sri Lanka Institute of Information Technology.</p></p>
                    <p className="fw-bold">Academic Qualification: <p className="fw-normal fst-italic">PhD in Information and Communication Technologies, Pompeu Fabra University, Barcelona, Spain (2017)
                            Master of Computer Science, University of Colombo, Sri Lanka (2011)  <br/>
                            BSc in Information Technology, Curtin University of Technology, Australia (2007)</p>
                    </p>
                    <p className="fw-bold">Contact:
                    <p className="fw-normal"><a href='#'>kalpani.m@sliit.lk</a><br/></p>
                    </p>

                </div>
            </div>
            </div>
    );

}

export default StaffDetails2;