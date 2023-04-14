import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function Computing(){
    useEffect(()=>{
        document.title='WISDOM | Faculties'
    });
    return(
        <div>
            <h1 className="pb-1 mb-4">Faculty Of Computing</h1>
            
            
                    
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="Images/e4.jpg" class="d-block w-100 h-5" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                                        <h4 className='text-white'><b>WISDOM</b></h4>
                                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="Images/e3.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                                        <h4 className='text-white'><b>WISDOM</b></h4>
                                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="Images/science3.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                                        <h4 className='text-white'><b>WISDOM</b></h4>
                                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                    <div>
                <h1 className='bg-light text-dark fw-bold'><strong>WELCOME TO FACULTY OF COMPUTING</strong></h1>
                <p className='bg-dark text-white'> The WISDOM, Faculty of Computing is equipped with a range of courses specialising in various arms of 
                    the IT sector. Students are able to choose a path that is most in line with their requirements, 
                    allowing them to pursue substantial careers in their selected field. CINEC is committed to your success. 
                    We provide critical resources to assist
                     and guide you as you make progress in your academic program and as you prepare to enter the workforce.
                </p>

                <h1 className='bg-light text-dark fw-bold'><strong>Department Of Information & Tech.</strong></h1>
                        <p className='bg-dark text-white'><h6 className='ms-4 me-4 pt-3 py-3'>
                        The information systems discipline focuses on the use and the application of information and communications 
                        technologies (ICT) in the government, business and the society. Knowledge about information systems 
                        is now regarded as a core literacy requirement in the modern business environment. In addition, a 
                        very good understanding of the capabilities, issues and the risks associated with information systems
                         is demanded as an essential skill for almost all managerial positions in the modern workplace. 
                         
                          Succeeding as an innovative manager the understanding of how and where to use information systems, 
                          communications technology and knowledge management strategies are essential. These skills are not 
                          negotiable for modern businesses.

                        The Department of Information Technology is committed to prepare students with the applied technology, 
                        core business and 
                        communication skills needed to compete in a technology-driven corporate world.<br/></h6></p>

            </div>
           
        </div>
    )
}

export default Computing;