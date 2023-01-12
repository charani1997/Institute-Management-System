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
                        <img src="Images/computing1.jpg" class="d-block w-100 h-5" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="Images/computing2.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="Images/computing3.jpg" class="d-block w-100" alt="..."/>
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
            </div>
           
        </div>
    )
}

export default Computing;