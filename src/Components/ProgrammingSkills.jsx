import React from 'react'
import "./HeaderComponents.css"

function ProgrammingSkills() {
  return (
    <div className='ProgrammingSkills' style={{ margin: "5vw 7vw" }}>
      <div className='d-flex justify-content-evenly'>
        <div>
          <div><h1 className='HeadSkills' >Programming Skills</h1></div>
          <div className='ProgrammingSkillsText'><p>As a Full Stack Developer, I am proficient in both front-end and back-end technologies. I possess a comprehensive understanding of HTML, CSS, JavaScript, and ReactJS for building dynamic and user-friendly interfaces. On the server-side, I am skilled in Node.js, Express.js, and MongoDB, enabling me to create robust and scalable back-end systems. Additionally, my expertise extends to Python, Bootstrap, and AWS, allowing me to design and deploy full-fledged web applications with efficiency and versatility. With my ability to handle both ends of the development process, I can deliver end-to-end solutions that cater to the diverse needs of modern web projects.</p></div>
        </div>
        <div className='PSkills'>
          <div>
            <div >
              <div className='marginSkills'><h4>HTML4/HTML5</h4></div>
              <div className='marginSkills'><h4>JavaScript</h4></div>
            </div>
            <div >
              <div className='marginSkills'><h4>NodeJS</h4></div>
              <div className='marginSkills'><h4>MongoDB</h4></div>
              <div className='marginSkills'><h4>AWS</h4></div>
            </div>
          </div>
          <div>

            <div>
              <div className='marginSkills'><h4>CSS</h4></div>
              <div className='marginSkills'><h4>ReactJS</h4></div>
            </div>
            <div>
              <div className='marginSkills'><h4>ExpressJS</h4></div>
              <div className='marginSkills'><h4>Python</h4></div>
              <div className='marginSkills'><h4>Bootstrap</h4></div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ProgrammingSkills