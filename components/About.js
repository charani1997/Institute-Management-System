import {useEffect} from "react";

function About(){
    useEffect(()=>{
        document.title='WISDOM | About us'
    });
    return(
        <div className="bg-secondary text-white">
            <h2 className='text-center'>About US</h2>
            <p className='text-center'><i>WISDOM EDUCATIONAL CENTER</i></p>
            <div class="bg-light text-dark mt-4">
                <h3 className='text-center'>YOUR JOURNEY BEGINS AT <strong>WISDOM</strong></h3>
                <div className="ms-4 me-4 mt-4 my-4"><p><div className="ms-4 me-4 mt-4 text-justify">WISDOM was established in 2012. We are a leading higher educational institute approved by the 
                    University Grant Commision(UGC). There are 3 faculties and 8 departments. Faculties are Faculty of Science, Faculty
                    of Engineering, Faculty of Computing. Departments are Department Of Statistics & Computer Science, Department Of Mathematics,
                    Department Of Chemistry, Department Of Physics, Department Of Civil Engineering, Department Of Mechanical Engineering,
                    Department Of Computer Engineering, Department Of Information & Technology.
                    WISDOM Campus provides in demand Education 
                    and Learning to suit young passionate minds that would inspire graduates to make an impact 
                    within work place, industry and society at large with creativity, 
                    entrepreneurship, self-discipline and competence.<br/>WISDOM Educational Center is a leading private Institute in Sri Lanka. 
                    We are proud to be approved by the Ministry of Higher Education, University Grants
                     Commission. This journey is partnered and guided by a highly
                    qualified, well experienced panel of academics, experts and practitioners.</div></p></div>
            </div>
                <div class="bg-primary text-white">
	                <div class="about">
		
                    

                            
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="2000">
                                    <img src="Images/img4.jpg" class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4 className='text-white'><b>WISDOM</b></h4>
                                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="Images/img7.jpg" class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                    <h4 className='text-white'><b>WISDOM</b></h4>
                                    <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                                </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="Images/img6.jpg" class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                    <h4 className='text-white'><b>WISDOM</b></h4>
                                    <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                                </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                                                    


                        <div class="container bg-success text-white">
	                        <div class="about">
		
                                <div class="about">
                                    <img class="about" src="Images/phone.png" alt="" title=""/>		
                                </div>   		
                  
		
		                        <div class="about">

			
                                    <div class="container">
                                        <h2 class="container" itemprop="headline">Phone</h2>
                                    </div>
                                    <div class=" container">
                                        <p class="about-"><a href="+94 41 561 27 78" class="link-light">+94 41 561 27 78</a><br/><a href="+94 11 544 34 54" class="link-light">+94 11 544 34 54</a></p>
                                    </div>
			
			
		                        </div>
	                        </div>
                        </div>
                        


                        <div class="container bg-secondary text-white">
                            <div class="about">
                
                                <div class="about">
                                    <img class="about" src="Images/mail.png" alt="" title=""/>		
                                </div>
                
                
                                <div class="about">

                    
                                    <div class="container">
                                        <h2 class="container" itemprop="headline">|Email</h2>
                                    </div>
                                    <div class=" container">
                                        <p class="about-"><a href="INFO@WISDOM" class="link-light">INFO@WISDOM</a><br/><a href="wisdomedu@gmail.com" class="link-light">wisdomedu085@gmail.com</a></p>
                                    </div>
                    
                    
                                </div>
                            </div>
                        </div>

            
                        <div class="container bg-info text-white">
                            <div class="about">
                
                                <div class="about">
                                    <img class="about" src="Images/location.png" alt="" title=""/>		
                                </div>
                
                
                                <div class="about">

                    
                                    <div class="container">
                                        <h2 class="container">Address</h2>
                                    </div>
                                    <div class=" container">
                                        <p class="about-">21 Wasala Road, <br/>Colombo 04, <br/> Sri Lanka.</p>
                                    </div>
                    
                    
                                </div>
                                
                            </div>
                        </div>

                        <div class="container bg-danger text-white">
                            <div class="about">
                    
                                <div class="about">
                                    <img class="about" src="Images/fax.png" alt="" title=""/>		
                                </div>
                    
                                <div class="about">

                        
                                        <div class="container">
                                            <h2 class="container" itemprop="headline">Fax</h2>
                                        </div>
                                        <div class=" container">
                                            <p class="about-"><a href="+94 11 561 27 70" class="link-light">+94 11 561 27 70</a><br/><a href="+94 11 544 34 54" class="link-light">+94 11 544 34 54</a></p>
                                        </div>
                        
                        
                                </div>
                            </div>
                        </div>
                    

                    </div>
                    <br/>
                </div>
        </div>
    )
}

export default About;