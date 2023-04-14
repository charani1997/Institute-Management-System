import { Link } from "react-router-dom";

function Registration(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3 mt-4 mb-4">
                    <div className="card mt-4 mb-4">
                        <h5 className="card-header bg-secondary text-white text-center mb-4">REGISTRATION</h5>
                        <div className="card-body mb-4">
                            <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
                                <button className="btn btn-primary btn-lg" type="button"><a class="btn btn-primary btn-lg" href="/student-register" role="button">REGISTER As Student</a></button>
                                <button className="btn btn-primary btn-lg" type="button"><a class="btn btn-primary btn-lg" href="/staff-register" role="button">REGISTER As Teacher</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Registration;