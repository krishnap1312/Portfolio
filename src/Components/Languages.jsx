import React from 'react'
import "./HeaderComponents.css"

function Languages() {
  return (
    <div  className='Langu'>
        <div className='LangHead'>
            <div className='LangHeading' >
                <h2>Languages</h2>
            </div>
        </div>
            <div className='LanguagesDiv'>
                <div className='LanguageGrid marginLang'>
                    <div>English</div>
                    <div className='LangPro'>Fluent</div>
                </div>
                <div className='LanguageGrid marginLang'>
                    <div>Hindi</div>
                    <div className='LangPro'>Native</div>
                </div>
                <div className='LanguageGrid marginLang'>
                    <div>Telugu</div>
                    <div className='LangPro'>Native</div>
                </div>
                
            </div>
    </div>
  )
}

export default Languages