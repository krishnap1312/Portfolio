import React from 'react'
import "./HeaderComponents.css"
import QRCode from 'react-qr-code'

function GitHub() {
  return (
    <div className='Github'>
      <div className='GithubDiv'>
      </div>
      <div className='GitHubqrCode'>
        <h1 className='GitHubqrCodeText'>Scan and Check my GitHub Profile</h1>
        <QRCode value="https://github.com/krishnap1312" ></QRCode>
      </div>
    </div>
  )
}

export default GitHub