import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function Engineering(){
    useEffect(()=>{
        document.title='WISDOM | Faculties'
    });
    return(
        <div>
            <h1 className="pb-1 mb-4">Faculty Of Engineering</h1>
 
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="Images/engineering1.jpeg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="Images/engineering3.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="Images/engineering4.jpg" class="d-block w-100" alt="..."/>
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
                <h1 className='bg-light text-dark fw-bold'><strong>WELCOME TO FACULTY OF ENGINEERING</strong></h1>
                <p className='bg-dark text-white'>The Faculty comprises of TWO departments; Department of Civil Engineering AND department of Mechanical. The Faculty of Engineering of Sri Lanka Institute of Information technology is the epicenter of engineering education, research, knowledge creation and distribution in Sri Lanka. Comprised of prominent lecturers, researchers and a helpful academic staff, the students are guaranteed to receive quality education and knowledge.

                <br/><br/>The students will be well guided so that they study their courses and learn that they are working for knowledge and career, not just to pass examinations. Our academic programs are dedicated to create innovative leaders in a world of modern technology.</p>
            </div>

        </div>
    )
}

export default Engineering;