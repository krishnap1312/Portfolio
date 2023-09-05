import React from 'react';



function Portfolio() {
  return (
    <div className='BaccPortfolio Portfolio'>
      <dt className=' PorfolioHeader' >Portfolio - Projects</dt>
      <div className='cardFlex'>

        {/* // ! People's Bank Div */}
        <div className='ALLCardDiv' >
          <div className='Card'>
            <div className='CardHeader'>
              <h1>People's Bank</h1>
            </div>
            <div className=''>
              <p className='CardText' ><span className='CardStyle'>Description:</span> The People's Bank Net Banking Project, executed from April to June 2023, introduces an online platform enabling users
                to register, open accounts, and access banking services. <br></br> Admins allocate unique account numbers for login, facilitating
                balance checks, fund transfers, and dummy bill payments. <br></br> Job posters manage vacancies, job seekers apply, and agents
                oversee accounts. <br></br> Benefits encompass streamlined banking, efficient job posting, real-time data, user-friendliness, and
                data security. <br></br>The tech stack includes <span style={{ color: "#900C3F", fontWeight: "bolder" }}> ReactJS, Bootstrap, MDB for the front-end, and NodeJS, ExpressJS, and MongoDB </span> for
                the back-end.
              </p>
              <div className=''>
                <div className='CardFooter'>
                  <a href="https://github.com/krishnap1312/Peoples-Bank" target='blank'><button className='CardButton ' >Check Detailed Project  <span className='bi bi-box-arrow-up-right'></span></button></a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* // ! Book Store Div */}
        <div className='ALLCardDiv'>
          <div className='Card'>
            <div className='CardHeader'>
              <h1>Book Store </h1>
            </div>
            <div className=''>
              <p className='CardText'>
                <span className='CardStyle'> Description:</span> Efficiently manage library or bookstore tasks with this web-based system.
                <br />Features include authentication, catalog management, checkout, reservations, and admin controls.
                <br />Purpose: Showcase web dev and database skills. Create user-friendly interfaces and automate library processes.
                <br />The tech stack includes <span style={{ color: "#900C3F", fontWeight: "bolder" }}> ReactJS, Bootstrap, and NodeJS, ExpressJS, and MongoDB </span> for
                the back-end.

              </p>
              <div className='CardFooter'>
                <a href="https://github.com/krishnap1312/Library-BookStore" target='blank'><button className=' CardButton'>Check Detailed Project <span className='bi bi-box-arrow-up-right'></span></button></a>
              </div>
            </div>
          </div>
        </div>

        {/* // ! All Projects Div */}

        <div className='ALLCardDiv'>
          <div className='AllProjectCard'>
            <div className='CardHeader'>
              <h1>List of All Other Projects</h1>
            </div>
            <div className=''>
              <div className='projectsDivs'>
              <div>
                <ul className='GridProjects'>
                   <li className='ProjectsName'><span className='bi bi-arrow-right text-light'></span> Library Book Store</li>
                   <li className='ProjectsName'><span className='bi bi-arrow-right text-light'></span> Restaurant Website</li>
                   <li className='ProjectsName'><span className='bi bi-arrow-right text-light'></span> Furniture Website</li>
                   <li className='ProjectsName'><span className='bi bi-arrow-right text-light'></span> Random Year Facts</li>
                   <li className='ProjectsName'><span className='bi bi-arrow-right text-light'></span> Random User Generator</li>
                </ul></div>
                <div>
                  <img className='projectImg' src="Project.png"  alt="" />
                </div>
              </div>
              <div className='CardFooters'>
                <a href='https://github.com/krishnap1312?tab=repositories' target='blank'>
                <button className=' CardButtons'>Check Detailed Projects <span className='bi bi-box-arrow-up-right'></span></button>
                </a>
              </div>
            </div>
          </div>
        </div>
        

        

      </div>
    </div>
  );
}

export default Portfolio;
