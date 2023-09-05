import React from 'react';
import { Link } from 'react-scroll';

function Ribbion() {
  return (
    <div className='d-flex Rib' >
      <div className='RibbonDiv' >
        
        <div className='divflex1'>
          <div style={{ textAlign: "center", margin: "2vw" }}>
            <img className='ImgRib'  src="/skills.png" alt="" />
            <div className='d-flex justify-content-center'>
              <div className='RibText' >
                <dt>Skills</dt>
                <br />
                <p>Learn about my skills in programming, find info on my language knowledge and more.</p>
                <div className='LinkDiv' style={{ height: "3.2vw" }}>
                <Link className='Links' to="ProgrammingSkills" spy={true} smooth={true} offset={-150} duration={500}><dt className=''>Learn More <span className=' bi bi-arrow-right '></span></dt></Link>
            
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='divflex1'>
          <div style={{ textAlign: "center", margin: "2vw" }}>
            <img className='ImgRib' src="/rating.png" alt="" />
            <div className='d-flex justify-content-center'>
              <div className='RibText'>
                <dt>Experience</dt>
                <br />
                <p>Get to know the timeline of my education and find out more about my working experience.</p>
                <div className='LinkDiv' style={{ height: "3.2vw" }}>
                <Link className='Links' to="Exp" spy={true} smooth={true} offset={-180} duration={500}><dt className=''> Learn More <span className='bi bi-arrow-right'></span></dt></Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='divflex1'>
          <div style={{ textAlign: "center", margin: "2vw" }}>
            <img className='ImgRib' src="/profile.png" alt="" />
            <div className='d-flex justify-content-center'>
              <div className='RibText' >
                <dt>Portfolio</dt>
                <br />
                <p>My portfolio is my biggest pride. Check my previous works and get to know my skills better.</p>
                <div className='LinkDiv' style={{ height: "3.2vw" }}>
                <Link className='Links' to="Portfolio" spy={true} smooth={true} offset={50} duration={500}><dt className=''> Learn More <span className='bi bi-arrow-right'></span></dt></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Ribbion;
