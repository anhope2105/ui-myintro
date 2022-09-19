import React from 'react'
import "./About.css"


function About() {
  return (
    <section id="about">
        <div className='about-container'>
            <div className="about-heading" data-aos="flip-left">
                <strong>About me</strong>
                <h3>Designing with passion for Problem Solving</h3>
                <a href="tel:09859999888" className='btn-link'>0985-999-888 <i className="fa-solid fa-phone" ></i>
                </a>
            </div>
            <div className='about-details' data-aos="flip-right">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi animi sapiente consectetur quis! Similique excepturi minima possimus eum itaque laboriosam maiores earum adipisci tenetur ipsa, totam, corrupti numquam eveniet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi animi sapiente consectetur quis! Similique excepturi minima possimus eum itaque laboriosam maiores earum adipisci tenetur ipsa, totam, corrupti numquam eveniet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi animi sapiente consectetur quis! Similique excepturi minima possimus eum itaque laboriosam maiores earum adipisci tenetur ipsa, totam, corrupti numquam eveniet.</p>
            </div>
        </div>
    </section>
  )
}

export default About