import {Link} from 'react-router-dom';
import AllCourses from './Courses/AllCourses';
import {useEffect} from "react";

function Home() {
    useEffect(()=>{
        document.title='WISDOM | Home'
    });
    return (
        <div className="ms-1 me-1 bg-transparent text-white mt-2">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                    <img src="Images/h1.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h4 className='text-white'><b>WISDOM</b></h4>
                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src="Images/h2.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h4 className='text-white'><b>WISDOM</b></h4>
                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="Images/h4.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h4 className='text-white'><b>WISDOM</b></h4>
                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row">
                <div className="col-sm-3">
                    <div className="card  bg-secondary  my-2 ms-2 my-2">
                    <div className="card-body">
                    <div>
                <img src="Images/logo2.jpg" className="img-thumbnail" alt="..."/>
                <div classNameName='text-center'><h4><strong>WELCOME TO WISDOM EDUCATIONAL CENTER</strong></h4></div>
            </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="card  bg-secondary my-2 me-2">
                    <div className="card-body">
                        <h5 className="card-title text-center bg-dark text-justify"><strong>YOUR JOURNEY BEGINS AT WISDOM</strong></h5>
                        <p className="card-text text-justify">WISDOM Educational Center is a leading private Institute in Sri Lanka. We are proud to be approved by the Ministry of Higher Education, University Grants Commission

                            Every year, more than 1200 students get enrolled in the academic programmes.
                            <br/><br/>


                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="card">
                                    <div class="card-body bg-dark">
                                        <h5 class="card-title bg-dark text-center text-justify"><strong>Our Mission</strong></h5>
                                        <p className='bg-dark text-justify'>To provide students with life changing opportunities through intellectual transformation, 
                                            and use knowledge, skills and attitudes they develop to best serve the world upholding the
                                            values they cherished.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                    <div class="card-body bg-dark">
                                        <h5 class="card-title text-center text-justify"><strong>Our Vision</strong></h5>
                                        <p className='bg-dark text-justify'> To be the leading international higher education provider in the country and in
                                            the region inspiring excellence and innovation.<br/><br/></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                               
                            </p>
                        <a href="/about" class="btn btn-primary btn-lg">More Info...</a>
                    </div>
                    </div>
                </div>
            </div>





            
            {/*Latest Courses*/}
            <h3 className="pb-1 mb-4 bg-dark">Latest Courses <Link to="/all-courses" className="float-end">See All</Link></h3>
            <div className="row mb-4">
                <div className="col-md-2">
                    <div className="card">
                        <Link to="/detail/1"><img src="cs1.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"><br></br>Computer Science</Link></h5>
                        </div>
                    </div>
                </div>


                <div className="col-md-2">
                    <div className="card">
                        <Link to="detail2/1"><img src="mt.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail2/1">Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <Link to="/detail/3"><img src="st.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Statistics</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <Link to="/detail/3"><img src="chem.jpg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Chemistry</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <Link to="detail2/1"><img src="Images/e8.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail2/1">Mechanical</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <Link to="/detail/3"><img src="Images/e7.jpg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Civil</a></h5>
                        </div>
                    </div>
                </div>
                
            </div>
            {/*End Latest Courses*/}

            
           {/*Staff*/}
           <h3 className="pb-1 mb-4 mt-5 bg-dark fw-bold">Our Academic Staff <Link to="/all-staff" className="float-end">See All</Link></h3>
            <div className="row mb-4">
                <div className="col-md-2">
                    <div className="card">
                        <Link to="staff1/1"><img src="Images/staff14.jpg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="staff1/1"><br/>Prof. Jayawardena</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff-details2/1"><img src="Images/staff7.jpg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff-details2/1"><br/>Dr. Kalpani Silva</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff3/1"><img src="Images/staff13.jpg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/staff3/1"><br/>Dr. Sumudu</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <Link to="/staff4/1"><img src="Images/staff10.jpeg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff4/1"><br/>Dr. P Dissanayake</Link></h5>
                        </div>
                    </div>
                </div>


                <div className="col-md-2">
                    <div className="card">
                        <a href="/staff5/1"><img src="Images/staff12.jpeg" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/staff5/1"><br/>Dr. Nawarathna</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <Link to="/staff6/1"><img src="Images/staff5.jpeg" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/staff6/1"><br/>Dr.Isuri Perera</Link></h5>
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
            {/* <div className='ms-4 my-4'><img src="Images/img8.png" class="rounded-circle" alt="Cinque Terre"/></div> */}
            

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



            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 bg-danger">
                        <div class="about">
                            <img class="about" src="Images/phone.png" alt="" title=""/>	
                            <h2>Phone</h2>	
                        </div>
                
                        <p class="about-"><a href="+94 41 561 27 78" class="link-light">+94 41 561 27 78</a><br/><a href="+94 11 544 34 54" class="link-light">+94 11 544 34 54</a></p>
                        </div>
                    <div class="col-sm-3 bg-dark">
                        <div class="about">
                            <img class="about" src="Images/mail.png" alt="" title=""/>	
                            <h2>Email</h2>	
                        </div>
                        
                        <p class="about-"><a href="INFO@WISDOM" class="link-light">INFO@WISDOM</a><br/><a href="wisdomedu@gmail.com" class="link-light">wisdomedu085@gmail.com</a></p>
                        </div>
                    <div class="col-sm-3 bg-success">
                        <div class="about">
                            <img class="about" src="Images/location.png" alt="" title=""/>	
                            <h2>Address</h2>	
                        </div>
                            
                        <p class="about-">21 Wasala Road, <br/>Colombo 04, <br/> Sri Lanka.</p>
                        </div>
                    <div class="col-sm-3 bg-info">
                        <div class="about">
                            <img class="about" src="Images/fax.png" alt="" title=""/>
                            <h2>Fax</h2>		
                        </div>
                        
                    <p class="about-"><a href="+94 11 561 27 70" class="link-light">+94 11 561 27 70</a><br/><a href="+94 11 544 34 54" class="link-light">+94 11 544 34 54</a></p>
                    </div>
            </div>
            </div>

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


            <div className=" mt-4 bg-dark">
                <div className="row">
                    <div className="col">
                        <div className='ms-4'><img src="Images/building.png" class="rounded-circle" alt="Cinque Terre"/></div>
                        <h5>8 Departments</h5>
                    </div>
                    <div className="col order-1s">
                    <div className='ms-4'><img src="Images/hat.png" class="rounded-circle" alt="Cinque Terre"/></div>
                    <h5>8 Degree Programs</h5>
                    </div>
                    
                    <div className="col order-1">
                    <div className='ms-4'><img src="Images/person.png" class="rounded-circle" alt="Cinque Terre"/></div>
                    <h5>100+ Academic Staff</h5>
                    </div>
                    <div className="col order-1">
                    <div className='ms-4'><img src="Images/card.png" class="rounded-circle" alt="Cinque Terre"/></div>
                    <h5>1000+ Students</h5>
                    </div>
                </div>
                </div>
                                        
           
                    <div class="bg-dark">
                        <div class="row">
                            <div class="col">
                            <div className='ms-4 my-4'><img src="Images/whatsapp.png" class="rounded-circle" alt="Cinque Terre"/></div>
                            </div>
                            <div class="col order-5">
                            <div className='ms-4 my-4'><img src="Images/fb.png" class="rounded-circle" alt="Cinque Terre"/></div>
                            </div>
                            <div class="col order-1">
                            <div className='ms-4 my-4'><img src="Images/insta.png" class="rounded-circle" alt="Cinque Terre"/></div>
                            </div>
                            <div class="col order-1">
                            <div className='ms-4 my-4'><img src="Images/teli.png" class="rounded-circle" alt="Cinque Terre"/></div>
                            </div>
                        </div>
                        </div>                                   
        </div>
    );
  }
  
  export default Home;
  