import { Link } from "react-router-dom";

function SignIn(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3 mt-4 mb-4">
                    <div className="card mt-4 mb-4">
                        <h5 className="card-header bg-secondary text-white text-center mb-4">SIGN IN</h5>
                        <div className="card-body mb-4">
                            <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
                                <button className="btn btn-primary btn-lg" type="button"><a class="btn btn-primary btn-lg" href="/studentsignin" role="button">Login As Student</a></button>
                                <button className="btn btn-primary btn-lg" type="button"><a class="btn btn-primary btn-lg" href="/staffsignin" role="button">Login As Teacher</a></button>
                                <button className="btn btn-primary btn-lg" type="button"><a class="btn btn-primary btn-lg" href="/adminsignin" role="button">Login As Admin</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SignIn;