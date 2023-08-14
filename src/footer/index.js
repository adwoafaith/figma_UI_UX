import React from 'react'
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Instagram from '../assets/Instagram.png'
import Mostera from '../assets/Monstera.png'
import Fern from '../assets/Fern.png'
import Rectangle21 from '../assets/Rectangle 21.png'
import './styles.css'

const Footer = () => {
  return (
    <div className='myfooter'>
      <span className='heder'>Feel Free To Contact Us</span>
      <footer className='footer-images'>
        <div className='instagram'>
          <img src={Instagram} alt='facebook' />
        </div>
        <div className='facebook'>
          <img src={Facebook} alt='facebook' />
        </div>
        <div className='twitter'>
          <img src={Twitter} alt='facebook' />
        </div>


      </footer>
      <div className='mostera'>
        <img src={Mostera} alt='flower' />
      </div>
      <div className='fern'>
        <img src={Fern} alt='flower' />
      </div>
      <div className='content'>
        <span className='myHome'> Home</span>
        <span className='About-us'>About Us</span>
        <span className='Plants'> Plants</span>
        <span className='delivery'>Delivery</span>
        <span className='footer-blog'>Blog</span>
        <span className='contact-us'>Contact Us</span>
      </div>
      <img src={Rectangle21} alt='rectangle' className='rectangle21'/>
    </div>
  )
}

export default Footer;


