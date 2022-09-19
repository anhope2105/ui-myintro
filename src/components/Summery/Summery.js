import React from 'react'
import "./Summery.css"
import CV from "../../assets/cv/CV.pdf"
function Summery() {
  return (
    <section id="summery">
        <div className="summery-heading" data-aos="fade-right">
            <strong className="strong">My skillset</strong>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <a href={CV} download className="btn-link">Get CV 
             <i className="fa-solid fa-download"></i>
            </a>
        </div>
        <div className="summery-details"  data-aos="fade-left">
            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptate repellat laudantium ipsa voluptatum neque velit ex deserunt, assumenda sed doloremque! Corporis quibusdam quae maxime error optio voluptas distinctio amet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptate repellat laudantium ipsa voluptatum neque velit ex deserunt, assumenda sed doloremque! Corporis quibusdam quae maxime error optio voluptas distinctio amet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptate repellat laudantium ipsa voluptatum neque velit ex deserunt, assumenda sed doloremque! Corporis quibusdam quae maxime error optio voluptas distinctio amet?</p>
        </div>
    </section>
  )
}

export default Summery