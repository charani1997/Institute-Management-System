import {Link} from "react-router-dom";
import {useEffect} from "react";

function Register(){
    useEffect(()=>{
        document.title='WISDOM | Student-Registration'
    });
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header bg-secondary text-white">User Register</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Username</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Interests</label>
                                    <textarea className="form-control"></textarea>
                                    <div id="emailHelp" class="form-text">Python, Java, C++, Mathematics, Botney, Geology, Statistics</div>
                                </div>
                                <button type="submit" className="btn btn-secondary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;