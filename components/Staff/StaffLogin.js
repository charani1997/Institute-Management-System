import {Link} from "react-router-dom";
//import "./StaffLogin.css";
import {Component, useEffect} from "react";
function StaffLogin(){
    useEffect(()=>{
        document.title='WISDOM | Staff-Login'
    });
    return(
        //<div className="container1 mt-4 mb-2 bg-secondary text-white">
        <div className="container mt-4">
            
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header bg-secondary text-white">Staff Login</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Username</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" className="btn btn-secondary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //</div>
    )
}

export default StaffLogin;