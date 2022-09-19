import React from 'react'
import "./Carrer.css"
import CV from "../../assets/cv/CV.pdf"
function Carrer() {
    const carrers = [ 
        {
            title: "Font-end Developer",
            name:"Software",
            year: "2021-2022"
        },
        {
            title: "back-end Developer",
            name:"Software",
            year: "2021-2022"
        },
    ]
    const educations = [
        {
            title: "Font-end Developer",
            name:"Software",
            year: "2021-2022"
        },
        {
            title: "back-end Developer",
            name:"Software",
            year: "2021-2022"
        },
    ]
  return (
    <section id="carrer">
        <div className='carrer-education'>
            <div className='carrer' data-aos="zoom-in-right">
                <h3>Carrer</h3>
                <div className="c-b-container">
                    {
                        carrers.map((carrer,index) => (
                            <div className="c-box" key={index}>
                                <h4>{carrer.title}</h4>
                                <strong>{carrer.name}</strong>
                                <span>{carrer.year}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='carrer edu' data-aos="zoom-in-left">
                <h3>Education</h3>
                <div className="c-b-container">
                    {
                        educations.map((education,index) => (
                            <div className="c-box" key={index}>
                                <h4>{education.title}</h4>
                                <strong>{education.name}</strong>
                                <span>{education.year}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
           
        </div>
        <div className='btn-c'>
                <a href={CV} download className='btn-link'>
                Get CV <i className="fa-solid fa-download"></i>
                </a>
            </div>
    </section>
  )
}

export default Carrer