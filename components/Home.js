import {Link} from 'react-router-dom';
import AllCourses from './Courses/AllCourses';
import {useEffect} from "react";

function Home() {
    useEffect(()=>{
        document.title='WISDOM | Home'
    });
    return (
        <div className="container mt-4 mb-2 bg-secondary text-white">
            <div><h1><strong>WISDOM EDUCATIONAL CENTER</strong></h1></div>
            {/*Latest Courses*/}
            <h3 className="pb-1 mb-4 bg-dark">Latest Courses <Link to="/all-courses" className="float-end">See All</Link></h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="card">
                        <Link to="detail2/1"><img src="mt.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail2/1">Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/3"><img src="st.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Statistics</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/3"><img src="chem.jpg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Chemistry</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Latest Courses*/}

            
           {/*Staff*/}
           <h3 className="pb-1 mb-4 mt-5 bg-dark">Staff <Link to="/all-staff" className="float-end">See All</Link></h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/staff-detail/1"><img src="chandimal-jayawardena.jpg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff-detail/1">Prof. C Jayawardena</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="/staff-details2/1"><img src="kalpanim-mt.jpg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff-detail2/1"><br/><br/>Dr. Kalpani Manathunga</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="Images/staff3.jpeg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Dr. Sumudu</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/staff-details2/1"><img src="Images/staff2.jpeg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link href="/staff-details2/1"><br/><br/>Dr. P Dissanayake</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Staff*/} 

            {/*Popular Courses
            <h3 className="pb-1 mb-4 mt-5">Popular Courses <a href="#" className="float-end">See All</a></h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            End Popular Courses*/}
            
            {/*Student Testimonial*/}
            <h3 className="pb-1 mb-4 mt-5"></h3>
            <div id="carouselExampleIndicators" className="carousel slide bg-danger text-white py-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>An investment in knowledge pays the best interest.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                            Benjamin Franklin <cite title="Source Title"></cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>“Education is the most powerful weapon which you can use to change the world.”</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                            Nelson Mandela <cite title="Source Title"></cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>"Success is not final; failure is not fatal: It is the courage to continue that counts."</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                            Winston S. Churchill <cite title="Source Title"></cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>                                    
        </div>
    );
  }
  
  export default Home;
  