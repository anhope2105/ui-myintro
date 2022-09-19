import React from 'react'
import "./Projects.css"
import Blog from "../../assets/images/Blog.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";



function Projects() {
    const data = [
        {
            src:Blog,
            url:"#!"
        },
        {
            src:Blog,
            url:"#!"
        },
        {
            src:Blog,
            url:"#!"
        },
        {
            src:Blog,
            url:"#!"
        },
       
    ]
  return (
    <section id="projects">
        <div className="projects-heading">
            <h3>Recent Projects</h3>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
         
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
          {
              data.map((project,index) => (
                <SwiperSlide key={index}>
                     <div className="project-box">
                        <a href={project.url}>
                            <img src={project.src} alt="project"  />
                            <div className="p-overlay">
                                <strong>Outserved Reports</strong>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
              ))
          }
        
       
      </Swiper>
       
        
            <div className="git-btn ">
                <a href="https://github.com/anhope2105?tab=repositories" className=" btn-link" target="_blank">
                    Git hub <i className="fa-brands fa-github"></i>
                </a>
            </div>
       
    </section>
  )
}

export default Projects