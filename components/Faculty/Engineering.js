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
                <img src="Images/engineering4.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                                        <h4 className='text-white'><b>WISDOM</b></h4>
                                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                                    </div>
                </div>
                <div class="carousel-item">
                <img src="Images/engineering2.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                                        <h4 className='text-white'><b>WISDOM</b></h4>
                                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                                    </div>
                </div>
                <div class="carousel-item">
                <img src="Images/engineering1.jpeg" class="d-block w-100" alt="..."/>
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
                <h1 className='bg-light text-dark fw-bold'><strong>WELCOME TO FACULTY OF ENGINEERING</strong></h1>
                <p className='bg-dark text-white'>The Faculty comprises of TWO departments; Department of Civil Engineering AND department of Mechanical. The Faculty of Engineering of Sri Lanka Institute of Information technology is the epicenter of engineering education, research, knowledge creation and distribution in Sri Lanka. Comprised of prominent lecturers, researchers and a helpful academic staff, the students are guaranteed to receive quality education and knowledge.

                <br/><br/>The students will be well guided so that they study their courses and learn that they are working for knowledge and career, not just to pass examinations. Our academic programs are dedicated to create innovative leaders in a world of modern technology.</p>
                
                <h1 className='bg-light text-dark fw-bold'><strong>DEPARTMENT OF CIVIL ENGINEERING</strong></h1>
                    <p className='bg-dark text-white text-justify'><h6 className='ms-4 me-4 pt-3 py-3 text-justify'>IN THE PRESENT ERA WHEN GOOD LIVING AND EXCELLENT SERVICES TAKES PRECEDENCE OVER EVERY OTHER ASPECT OF LIFE, CIVIL ENGINEERING LEAPS AHEAD GIVING US AMENITIES TO A FIRM GRIP IN LIVING STYLE AND COMFORT .
                    THE RAPID TECHNOLOGICAL AND INDUSTRIAL CHANGES THAT ARE TAKING PLACE IN THE COUNTRY TODAY DEMANDS TRAINING PROGRAMMES TO BE FLEXIBLE TO ENABLE APPRENTICES TO DIVERSIFY THEIR KNOWLEDGE AND TRAINING TO SATISFY THE REQUIREMENTS OF THE EMPLOYER AND SAFEGUARD THE INTERESTS OF THE APPRENTICE.
                    HENCE, CIVIL ENGINEERING COURSES FOR SPECIAL APPRENTICES IS DESIGNED TO CATER FOR THE MAIN STREAMS OF CIVIL ENGINEERING APPLICABLE TO THE INCREASING DEMAND TODAY. THEY ARE,<br/><br/>
                    <li>CIVIL BUILDING & STRUCTURAL ENGINEERING (CB)</li>
                    <li>HIGHWAY & RAILWAY ENGINEERING (CH)</li>
                    <li>WATER & ENVIRONMENTAL ENGINEERING (CW)</li><br/>
                    THIS MIXED BAG OF DIVERSIFICATION OF GOOD AND DOUBTFUL ACHIEVEMENTS HAS BEEN PROVED RIGHT WITH THE SUCCESS OF PAST STUDENTS GAINING EMPLOYMENT. 
                    THERE ARE FIVE LABORATORIES UNDER CIVIL ENGINEERING DEPARTMENT FOR STUDENT’S PRACTICAL WORKS.<br/><br/>
                                    <li>SURVEY LABORATORY</li>
                                    <li>HYDRAULIC LABORATORY</li>
                                    <li>SOIL LABORATORY</li>
                                    <li>MATERIAL LABORATORY</li>
                                    <li>AUTOCAD LABORATORY</li><br/>
                    IN ADDITION TO ABOVE A WOOD WORKSHOP IS ATTACHED TO THIS DEPARTMENT. STUDENTS COMPLETE THEIR TRAINING IN CIVIL ENGINEERING CONSTRUCTION SITES.<br/></h6></p>
                

                    <h1 className='bg-light text-dark fw-bold text-justify'><strong>DEPARTMENT OF MECHANICAL ENGINEERING</strong></h1>
                    <p className='bg-dark text-white text-justify'><h6 className='ms-4 me-4 pt-3 py-3 text-justify'>IN THE PRESENT DAY CONTEXT, ALL ASPECTS OF MECHANICAL ENGINEERING HAS VIVIDLY IMPROVED ITS VERY BROAD OUTLOOK, 
                    WITH THINGS NEW AND IMPROVED TECHNICAL MATERIAL, THAT WE COME ACROSS IN DAILY LIFE. THESE ENORMOUS DEVELOPMENTS DEMAND AN INFRASTRUCTURE FOR EFFICIENT ECONOMICAL MAINTENANCE OF THESE ASSETS, AND HENCE OUR DEPARTMENT TAKES A PLUNGE INTO THIS SIDE OF
                        THE TRADE.<br/>
                        THERE ARE THREE SECTIONS UNDER MECHANICAL DEPARTMENT. SUCH AS,<br/>

                        <li>MECHANICAL AUTOMOTIVE</li>
                        <li>MECHANICAL GENERAL</li>
                        <li>MARINE ENGINEERING</li>
                        MECHANICAL DEPARTMENT IS ONE OF MAJOR DEPARTMENT IN THIS INSTITUTE. 
                        THIS DEPARTMENT UNDERTAKE SUBJECTS FOR THREE SPECIALIZATIONS FOR NDES PROGRAMME SUCH AS GENERAL, AUTOMOTIVE AND MARINE ENGINEERING. 
                        THERE ARE FIVE LABORATORIES NAMELY,<br/>

                        <li>APPLIED</li>
                        <li>THERMODYNAMICS</li>
                        <li>AUTOMOBILE</li>
                        <li>MECHATRONICS</li>
                        <li>MAIN WORKSHOP</li><br/></h6></p>


                        <h1 className='bg-light text-dark fw-bold text-justify'><strong>DEPARTMENT OF COMPUTER ENGINEERING</strong></h1>
                        <p className='bg-dark text-white text-justify'><h6 className='ms-4 me-4 pt-3 py-3 text-justify'>THIS DEGREE PROGRAM PROVIDES STUDENTS WITH AN APPROPRIATE UNDERSTANDING OF SOFTWARE TECHNOLOGIES AND APPLICATIONS, SOFTWARE ENGINEERING, NETWORK TECHNOLOGIES, WEB TECHNOLOGIES, LEADERSHIP AND INDUSTRIAL KNOWLEDGE.<br/>
                            AT PRESENT, THE DEPARTMENT HAS SERVED AND SERVING MORE THAN 100 STUDENTS. IN ADDITION, THE STAFF OF THE DEPARTMENT HAS CONSISTED OF NINE MEMBERS INCLUDING SENIOR LECTURERS, PROBATIONARY LECTURERS, INSTRUCTORS, AND TEMPORARY INSTRUCTORS.<br/>
                            AT PRESENT, FOUR LABORATORIES ARE CONTROLLED BY THE DEPARTMENT OF COMPUTER ENGINEERING NAMELY THE OPEN-SOURCE RESEARCH LABORATORY, ELECTRONICS AND SIMULATION LABORATORY, COMPUTER ENGINEERING WORKSHOP, AND INTELLIGENT RESEARCH LABORATORY

                            <br/><br/><br/>VISION<br/>

                            THE VISION OF THE DEPARTMENT OF COMPUTER ENGINEERING IS TO BECOME A COMPETITIVE ENTITY IN THE FIELD OF COMPUTER ENGINEERING IN THE ISLAND AND THE WORLD AND TO CREATE GRADUATES WITH QUALIFIED WITH THE KNOWLEDGE, AND CAPABLE OF TAKING LEADERSHIP POSITIONS.<br/>

                            <br/><br/>MISSION<br/>

                            THE MISSION OF THE DEPARTMENT OF COMPUTER ENGINEERING IS TO MAINTAIN THE ACADEMIC AND RESEARCH ACTIVITIES.

                            <br/></h6></p>
                
            </div>

        </div>
    )
}

export default Engineering;