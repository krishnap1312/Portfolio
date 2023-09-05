import React from 'react';
import './HeaderComponents.css';
import { Link } from 'react-router-dom';


function HeaderComponent() {
  return (
    <div className='Navimg d-flex justify-content-evenly text-white Home'>

      <div>
        <nav className='d-flex' style={{ fontSize: '1.2vw', margin: '2vw 0vw 0vw 60vw', padding: '2vw', color: 'white' }}>
          <div className='d-flex'>
            <dt className='navmar'></dt>
          </div>
        </nav>
        <div className='intro d-flex justify-content-between'>

          <div className=' NameTitle' >
            <dt>Krishna </dt>
            <dt>Prasad</dt>
           
          </div>
        <div className='NavIconsAd' >
          <dt className='navicons' style={{ margin: '.8vw' }}>
            <Link to="/GitHub"> <span className='bi bi-github'></span></Link>
          </dt>

          <dt className='navicons' style={{ margin: '.8vw' }}>
            <Link to="/LinkedIn"> <span className='bi bi-linkedin'></span></Link>
          </dt>

          <dt className='navicons' style={{ margin: '.8vw' }}>
            <Link to="/Whatsapp"> <span className='bi bi-whatsapp'></span></Link>
          </dt>

          <dt className='navicons' style={{ margin: '.8vw' }}>
            <Link to="/Instagram"> <span className='bi bi-instagram'></span></Link>
          </dt>

        </div>
        </div>
        <dt className='FullStackHeader'>Full-Stack Developer</dt>
      </div>
    </div>
  );
}

export default HeaderComponent;
