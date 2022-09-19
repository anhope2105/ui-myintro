import React from 'react'
import "./Process.css"

const data = [
    {
        id:'01',
        title:"Pree-Process",
        contents:['Collect Infomations' ,'Personas','Setup Goals',' Project Folder + Moodboard']

    },
    {
        id:'02',
        title:"Pree-Process",
        contents:['Collect Infomations' ,'Personas','Setup Goals',' Project Folder + Moodboard']

    },
    {
        id:'03',
        title:"Pree-Process",
        contents:['Collect Infomations' ,'Personas','Setup Goals',' Project Folder + Moodboard']

    },
    {
        id:'04',
        title:"Pree-Process",
        contents:['Collect Infomations' ,'Personas','Setup Goals',' Project Folder + Moodboard']

    },
    {
        id:'05',
        title:"Pree-Process",
        contents:['Collect Infomations' ,'Personas','Setup Goals',' Project Folder + Moodboard']

    },
    {
        id:'06',
        title:"Pree-Process",
        contents:['Collect Infomations' ,'Personas','Setup Goals',' Project Folder + Moodboard']

    }
]

function Process() {
  return (
    <section id="process" data-aos="fade-down">
        <div className="process-heading">
             <h3>Process</h3>
        </div>
        <div className="process-container">
            {
                data.map(process => (
                    <div className="process-box" key={process.id}>
                        <span>{process.id}</span>
                        <strong>{process.title}</strong>
                        <ul>
                            {
                                process.contents.map((content,index) => (
                                    <li key={index}>{content}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Process