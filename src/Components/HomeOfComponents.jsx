import React from 'react'
import HeaderComponent from './HeaderComponent'
import IntroComponent from './IntroComponent'
// import Nav from './Nav'
import Ribbion from './Ribbion'
import ProgrammingSkills from './ProgrammingSkills'
import Languages from './Languages'
import Experience from './Experience'
import WorkExp from './WorkExp'
import Portfolio from './Portfolio'
import ContactForm from './ContactForm'
import Navigation from './Nav'


function Home() {
  return (
    <div>

        

        <Navigation></Navigation>
        <HeaderComponent></HeaderComponent>
        <IntroComponent></IntroComponent>
        <Ribbion></Ribbion>
        <ProgrammingSkills></ProgrammingSkills>
        <Languages></Languages>
        <Experience></Experience>
        <WorkExp></WorkExp>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        
    </div>
  )
}

export default Home