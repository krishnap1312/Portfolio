import React from 'react'
import "./HeaderComponents.css"
import QRCode from 'react-qr-code'

function LinkedIn() {
  return (
    <div className='LinkedIn'>
      <div className='LinkedInDiv'>
      </div>
      <div className='LinkedInqrCode'>
        <h1 className='LinkedInqrCodeText'>Scan and Connect with me on LinkedIn</h1>
        <QRCode className='LinkedInQR' value="https://www.linkedin.com/in/BhVKrishnaPrasad/" ></QRCode>
      </div>
    </div>
  )
}

export default LinkedIn