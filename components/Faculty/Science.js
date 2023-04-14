import {Link} from 'react-router-dom';
import React from 'react'
import {useEffect} from 'react';

function Science(){
    useEffect(()=>{
        document.title='WISDOM | Faculties'
    });
    return(
        <div>
            <h1 className="pb-1 mb-4">Faculty Of Science</h1>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="Images/science1.jpg" class="d-block w-100 h-10" alt="..."/>
                              
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4 className='text-white'><b>WISDOM</b></h4>
                                        <a class="btn btn-danger" href="/user-register" role="button">JOIN WITH US</a>
                                    </div>
                                
                                </div>
                                <div class="carousel-item">
                                <img src="Images/science2.jpg" class="d-block w-100" alt="..."/>
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
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                           </div>
    
                         <div>
                         
                         <h1 className='bg-light text-dark fw-bold'><strong>WELCOME TO FACULTY OF SCIENCE</strong></h1>
                         <p className='bg-dark text-white'>WISDOM is committed to your success. We provide critical resources to assist and guide you as you make progress in your
                              academic program and as you prepare to enter the workforce.</p>


                        <h1 className='bg-light text-dark fw-bold'><strong>Department Of Statistics & Computer Science</strong></h1>
                        <p className='bg-dark text-white'><h6 className='ms-4 me-4 pt-3 py-3'>Degree Aims:<br/>
                            <li>Provide students with in-depth knowledge in statistics with a special focus on computer science and its applications.</li><br/>
                            <li>The programme produces graduates for academia as well as for the information technology related industries.</li><br/></h6></p>
                            <p className='bg-dark text-white'><h6 className='ms-4 me-4 pt-3 py-3'>The BSc (Hons) in Computer Science degree programme produces high-quality graduates with strong analytical and quantitative skills with a
                             comprehensive knowledge in Mathematics, Programming, Software Engineering, System Modelling, and Research. 
                             The graduates must be versatile in the knowledge drawn from the key knowledge areas of Computer Science,
                              including Algorithms Design and Implementation, Intelligent Systems, Parallel Computing, and Computational Science.
                              <br/>The Department plays a major role in undergraduate education at the Faculty by offering/ contributing to 
                              
                              multiple four year degree programs in addition to the general degree program. Currently, it offers two special degrees;
                               Special Degree in Statistics, and Special Degree in Computer Science. It also coordinates the four year degree program in Computation and Management in collaboration with the Faculty of Management 
                              and the Faculty of Arts. Degree program in Statistics and Operation Research is also another four year degree 
                              program the Department mainly contributes to, in collaboration with the Department of Mathematics. 
                              Apart from these, the department also offers courses for the Applied Sciences Degree program.
                            <br/></h6></p>

                        <h1 className='bg-light text-dark fw-bold'><strong>Department Of Mathematics</strong></h1>
                        <p className='bg-dark text-white'><h6 className='ms-4 me-4 pt-3 py-3'>The department conducts five undergraduate programs 
                        that lead to the BSc Honours degrees (BSc in Mathematics, BSc in Applied Mathematics, BSc in Computational Mathematics
                        , BSc in Mathematical Finance, BSc in Finance and Insurance), two postgraduate programs that lead to the 
                        MSc degrees (MSc in Financial Mathematics, MSc in Mathematics Education) and one external program that lead to 
                        the BSc in Financial Engineering.<br/></h6></p>

                        <h1 className='bg-light text-dark fw-bold'><strong>Department Of Chemistry</strong></h1>
                        <p className='bg-dark text-white'><h6 className='ms-4 me-4 pt-3 py-3'>The vision of the Department is to 
                        produce graduates with a sound knowledge in Chemistry having international recognition and the ability to fulfill 
                        chemistry based current needs of the country. Our academic programmes provide high quality B.Sc. General and Special 
                        Degrees and challenging learning opportunities in fundamental, advance, practical and applied Chemistry. Research
                         facilities are also offered to students who are seeking postgraduate qualifications such as M.Phil. and Ph.D.
                          Degrees in Chemistry. The department is equipped with five elementary (teaching) laboratories with a total 
                          capacity of 240 to 300 undergraduates and two advanced laboratories for students reading for B.Sc. Special Degree 
                          and for postgraduate degrees in Chemistry. In addition to the above the department has a well-equipped special 
                          equipment room and also a computer room with Internet and E-mail facilities.
                         Computer facility is being used for computer assisted learning in Chemistry.
                         <br/>
                         <br/>
                         The educational objectives of the Department of Chemistry are as follows:

                            <li>Provide a fundamental understanding of chemistry.</li>
                            <li>Provide prospective chemistry teachers with strong foundation in the application of chemistry principles that will enhance the quality of science teaching provided to schools in the region and state.</li>
                            <li>Provide excellent researchers through special degree programme.</li>
                            <li>Provide qualified graduates in gaining admission to and completing graduate programme in chemistry and related field.</li>
                            <li>Provide qualified graduates for national benefits.</li> <br/></h6></p>

                        <h1 className='bg-light text-dark fw-bold'><strong>Department Of Physics</strong></h1>
                        <p className='bg-dark text-white'><h6 className='ms-4 me-4 pt-3 py-3'>Physics is at the core of our intellectual 
                        understanding of natural phenomena and the foundation of many scientific disciplines, and contributes immensely
                         to scientific and technological advances. Moreover, physics is both a theoretical and practical discipline which 
                         continually evolves with profound scientific questioning; 
                        for example, theories of relativity and quantum mechanics has revolutionised the way of thinking of mankind.
                        <br/>
                        The department offers both three year and four year courses in physics, which form the two basic 
                        routes to B.Sc. general and special degrees. The three year course in physics is one of three main 
                        subjects of the general degree programme, and the four year course is designed for students who wish to 
                        pursue a professional career in physics. In both three and four year courses our aim is to impart a sound 
                        knowledge of the fundamental elements of physics by providing learning experiences such as how to identify 
                        the appropriate physical principles; how to turn a physics problem into a mathematical form and have an 
                        understanding of mathematical modelling and of the role of assumptions and approximations; how to plan, 
                        execute and report the results of an experiment or investigation with a measure of limitations and limits of 
                        uncertainty; how to compare results critically with predictions from theory; etc.
                        <br/></h6></p>
                                                        
                        </div>
                        </div>
    )   
        

    
}

export default Science;