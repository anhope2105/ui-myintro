import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer id="footer">
        <span>COPYRIGHT ©2022</span>

       <div className='social'>
       <a href="#!" className=''><i className="fa-brands fa-facebook"></i> </a>
        <a href="#!"><i className="fa-brands fa-instagram"></i></a>
        <a href="#!"><i className="fa-brands fa-youtube"></i></a>
       </div>
        <a href="#!" className='footer-logo'>AN HOPE - DEV ETC</a>
    </footer>
  )
}

export default Footer