import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className='foot'>
          <div className='texts'>
            <div className='Funiro'>
              <h3>Funiro.</h3>
              <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className='linnks'>
              <h3>Links</h3>
              <h4>Home</h4>
              <h4>Shop</h4>
              <h4>About</h4>
              <h4>Contact</h4>
            </div>
            <div className='help'>
              <h3>Help</h3>
              <h4>Payment Options</h4>
              <h4>Returns</h4>
              <h4>Privacy Policies</h4>
            </div>
            <div className='new'>
              <h3>Newsletter</h3>
              <div className='display'>
                <h3>Enter Your Email Address</h3>
                <h4>SUBSCRIBE</h4>
              </div>
            </div>
          </div>
          <hr />
          <div className='end'>
            <h3>2023 furino. All rights reverved</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer