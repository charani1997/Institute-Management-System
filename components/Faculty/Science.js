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
                                    <h3 className='text text-dark'><strong>Faculty Of Science</strong></h3>
                                </div>
                                </div>
                                <div class="carousel-item">
                                <img src="Images/science2.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                <h3 className='text text-dark'><strong>Faculty Of Science</strong></h3>
                                </div>
                                </div>
                                <div class="carousel-item">
                                <img src="Images/science3.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                <h3 className='text text-dark'><strong>Faculty Of Science</strong></h3>
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
                        </div>
                        </div>
    )   
        

    
}

export default Science;