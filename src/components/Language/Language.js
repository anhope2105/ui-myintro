import React from 'react'
import "./Language.css"

function Language() {
    const data = [
        {
            title:"Languages",
            contents:["Javascript , Nodejs , MySql"]
        },
        {
            title:"Software",
            contents:["MySql , MongoDB , AWS"]
        },
        {
            title:"Database",
            contents:["Vscode , Notebook"]
        }
    ]
  return (
   <section id="language" data-aos="zoom-in">
       {
           data.map((item,index) => (
               <div className="languages-box" key={index}>
                   <h3>{item.title}</h3>
                   <ul>
                       {
                           item.contents.map((content,index) => (
                               <li key={index}>{content}</li>
                           ))
                       }
                   </ul>
               </div>
           ))
       }
   </section>
  )
}

export default Language