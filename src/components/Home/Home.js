import React from 'react'
import Avatar from "../../assets/images/Avatar.jpg"
import "./Home.css"

function Home() {
  return (
    <section id="home"  x>
        <div className="home-text" data-aos="fade-down">
        <strong>hello , i'm An Hope</strong>
        <h1> To la An Hope Day</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quasi magnam perspiciatis ad doloremque alias ex tenetur libero dignissimos in nulla illum accusantium quae fugiat nesciunt, est voluptatem. Maiores, quam!</p>
        <a href="#summery" className='btn-link'> Scroll For Me</a>
        </div>

        <div className="home-img" data-aos="fade-up">
            <div className="img-box">
                <img src={Avatar} alt="Avatar" />
                <h2>An Hope <br /> <span>Full-Stack Developer</span> </h2>
                <div className="social">
                  <a href="#!">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#!">
                  <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
                <a href="#!" className="hire-me">Hire me</a>
            </div>
        </div>
    </section>
  )
}

export default Home