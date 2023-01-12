import {Link} from "react-router-dom";
function StaffDetails(){
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/chandimal-jayawardena.jpg" className="img-thumbnail" alt="..."/>
                </div>
                <div className="col-8">
                    <h3>Prof. Chandimal Jayawardena</h3>
                    <p className="fw-bold">Profile:
                    <p className="fw-normal">Professor Chandimal Jayawardena is an Electronic and Telecommunication Engineering graduate from the University of Moratuwa and holds a PhD from the Saga Unversity, Japan. His research areas include Robotics, Intelligent Systems, and Internet of Things. 
                        He started his career as an engineer and has worked for Sri Lankan Airlines and Sri Lanka Telecom and later moved to the academia. As an academic and a researcher he has worked for Unitec Institute of Technology and University of Auckland, New Zealand. Currently, he is the Dean of the Faculty of Computing at SLIIT.

                        Prof. Chandimal is a Chartered Engineer, a Member of Institution of Engineers Sri Lanka, a Member of Institute of Engineering and Technology, a Senior member of Institute of Electrical and Electronic Engineers, a Chartered Information Technology Professional and a Fellow of the British Computer Society</p></p>
                    <p className="fw-bold">Academic Qualification: <p className="fw-normal fst-italic">B.Sc. Eng (Hons.) in Electronic and Telecommunication Engineering, University of Moratuwa, Sri Lanka.<br/>
                        M.Eng. in Electronic and Telecommunication Engineering, University of Moratuwa, Sri Lanka.<br/>
                        Ph.D. in Robotics and Intelligent Systems, Saga University, Japan.<br/>
                        Chartered Engineer (C.Eng.).<br/>
                        Chartered Information Technology Professional (CITP)<br/>
                        Fellow of the British Computer Society (FBCS).<br/>
                        Senior Member of the Institute of Electrical and Electronic Engineers (SMIEEE).<br/>
                        Member of the Institute of Engineering and Technology (MIET).<br/>
                        Member of the Institution of Engineers Sri Lanka (MIESL).</p>
                    </p>
                    <p className="fw-bold">Contact:
                    <p className="fw-normal">+94 11 7544132<br/> <a href='#'>chandimal.j@sliit.lk</a><br/><a href='#'>Chandimal.j@sliit.lk</a></p>
                    </p>

                </div>
            </div>
            </div>
    );

}

export default StaffDetails;