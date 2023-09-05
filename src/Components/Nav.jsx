import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

function Navigation() {
  const [offset, setOffset] = useState(-180);

  useEffect(() => {
    
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 700) {
        setOffset(-50);
      } else {
        setOffset(-180);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="fixed-nav">
      <nav className='d-flex TopNav'>
        <div className='d-flex' style={{ margin: '2vw 0vw 0vw 60vw' }}>
          <Link className='Links' to="Home" spy={true} smooth={true} offset={-35} duration={500}><dt className='navmars'>Home</dt></Link>
          <Link className='Linkss' to="Intro" spy={true} smooth={true} offset={offset} duration={500}><dt className='navmars'>About</dt></Link>
          <Link className='Links' to="Rib" spy={true} smooth={true} offset={-50} duration={500}><dt className='navmars'>Skills and Experience</dt></Link>
          <Link className='Links' to="Resume" spy={true} smooth={true} offset={-200} duration={500}><dt className='navmars'>Resume</dt></Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
