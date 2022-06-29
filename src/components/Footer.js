import React from 'react'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import facebook from '../img/facebook.png'
import pin from '../img/pin.png'

const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='footer-title'>SHOOS</h1>
        <ul className='footer-links'>
          <li>Featured</li>
          <li>New Arrivals</li>
          <li>Deals</li>
          <li>Cloud 9</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>News</li>
        </ul>
        <ul className='footer-social'>
          <li><img src={twitter}></img></li>
          <li><img src={instagram}></img></li>
          <li><img src={facebook}></img></li>
        </ul>
        <div className='footer-location'>
          <img src={pin}></img><h3>United States</h3>
        </div>
        <h3 className='copyright'>&copy; 2022 Shoos, Inc. All Rights Reserved</h3>
    </div>
  )
}

export default Footer