import {Link} from 'react-router-dom';
//import AllCourses from './Courses/AllCourses';
import {useEffect} from "react";

function Departments() {
    useEffect(()=>{
        document.title='WISDOM | LMS'
    });
    return (
        <div className="container mt-4 mb-2 text-dark">
            {/*Latest Courses*/}
            <h3 className="pb-1 mb-4 bg-dark text-white fw-bold">Departments</h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card bg-primary">
                        <img src="Images/science3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Department Of Statistics & Computer Science</h5>
                            <h3 className='bg-dark link-danger'><Link to='/science'>More Info...</Link></h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-info">
                        <img src="Images/img5.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Department Of Mathematics</h5>
                            <h3 className='bg-dark link-danger'><Link to='/science'>More Info...</Link></h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success">
                        <img src="Images/science1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Department Of Chemistry</h5>
                            <h3 className='bg-dark link-danger'><Link to='/science'>More Info...</Link></h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-info">
                        <img src="Images/img7.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Department Of <br/>Physics</h5>
                            <h3 className='bg-dark link-danger'><Link to='/science'>More Info...</Link></h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-info">
                        <img src="Images/engineering2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Department Of Civil Engineering</h5>
                            <h3 className='bg-dark link-danger'><Link to='/engineering'>More Info...</Link></h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success">
                        <img src="Images/engineering1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Department Of Mechanical Engineering</h5>
                            <h3 className='bg-dark link-danger'><Link to='/engineering'>More Info...</Link></h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-info">
                        <img src="Images/engineering4.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Department Of Computer Engineering</h5>
                            <h3 className='bg-dark link-danger'><Link to='/engineering'>More Info...</Link></h3>
                        </div>
                    </div>
                </div>



                <div className="col-md-3">
                    <div className="card bg-primary">
                        <img src="Images/engineering1.jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Department Of Information & Tech.</h5>
                            <h3 className='bg-dark link-danger'><Link to='/computing'>More Info...</Link></h3>
                        </div>
                    </div>
                </div>


                


                
            </div>
            {/*End Latest Courses*/}

            
           
            
            </div>
           
    );
  }
  
  export default Departments;
  