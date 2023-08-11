import React from 'react'
import './style.css'
import GroupMask from '../assets/Mask group.svg'

const  Flower =()=> {
  return (
    <div className='background'>
      <img src={GroupMask} alt='group image' className='myIcon'
        margi />
        <div className='texts'>
              <a href='www.myhome.com' className='home'>home</a>
                  <span>about</span>
                  <span>contact</span>
                <button className='btn'>call us</button>
        
              
         
        </div>
            <h1 className='heading'> Nature's Beautify Delivered To You</h1>
            <p className='nature'> natures beautiful delivery is just a click away with our online
            flower and plant shop. We offer a <p> wide variety of flowrs
            that will bring a touch of nature to your home
        </p>
      </p>
    
      <div className='button-container' >
        <button className='button'> Book now</button>
        <button className='btns'> Watch Video</button>
      </div>


      {/* <img src={background} alt=''/> */}
       
    </div>
  )
}

export default Flower;
