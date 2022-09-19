import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <section id='contact' data-aos="zoom-out-down">
      <strong>What's Next</strong>
      <h3>Let's Work Together</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ea reiciendis dolorum est aspernatur perspiciatis! Numquam recusandae a sint atque expedita unde consequuntur quo, natus earum porro mollitia magnam maiores!</p>
      <a href="mailto:dinhan0500@gmail.com" className='btn-link contact-btn'>
          Write me an email <i className="fa-solid fa-envelope"></i>
      </a>
    </section>
  )
}

export default Contact