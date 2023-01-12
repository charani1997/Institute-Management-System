import {useEffect} from "react";

function About(){
    useEffect(()=>{
        document.title='WISDOM | About us'
    });
    return(
        <div className="bg-secondary text-white">
            <h2>About US</h2>
            <p><i>WISDOM EDUCATIONAL CENTER</i></p>
            <div class="bg-light text-dark">
                <h3>YOUR JOURNEY BEGINS AT <strong>WISDOM</strong></h3>
                <p>WISDOM was established in 2012. We are a leading higher educational institute approved by the 
                    University Grant Commision(UGC). There are 3 faculties and 7 departments. 
                    WISDOM Campus provides in demand Education 
                    and Learning to suit young passionate minds that would inspire graduates to make an impact 
                    within work place, industry and society at large with creativity, 
                    entrepreneurship, self-discipline and competence.<br/>This journey is partnered and guided by a highly
                    qualified, well experienced panel of academics, experts and practitioners.</p>
            </div>
                <div class="bg-primary text-white">
	                <div class="about">
		
                    

                            
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="2000">
                                    <img src="Images/img4.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="Images/img5.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="Images/img6.jpg" class="d-block w-100" alt="..."/>
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
                                        <p class="about-"><a href="INFO@WISDOM" class="link-light">INFO@WISDOM</a><br/><a href="wisdomedu@gmail.com" class="link-light">wisdomedu@gmail.com</a></p>
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
                                        <p class="about-">21 Wasala Road, <br/>Colombo 04.</p>
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