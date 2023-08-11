import React from 'react'
import IndoorPlant from '../assets/Indoor_Plant.png'
import PlantPort from '../assets/Bamboo 257.png'
import Outdoor from '../assets/Outdoor_Plant (1).png'
import './style.css'

const WhatWeOffer =() =>{
  return (
    <>
      <div className='back'>
        <span className='name'>
          We Help Choose The Most Suitable Plants For You
        </span>
        <span className='offer'>

          Our selection includes a wide variety of flowers
          from classic roses to exotic
          orchids,as well as a variety of
          lush indoor and outdoor plants, and also offer<br></br> unique floral arrangments
          that are perfect for any occasion,whether you're<br></br> looking
          to brighting up your home or send a toughtful gift

        </span>
      </div>
        <div className='three'>
          <div className='indoorPlant'>
            <img src={IndoorPlant} alt='plant' />
            <div>
              <p style={{color:'green',textAlign:'left'}}>Indoor Plants </p>
              Bring the beauty of nature to <br></br>your
              outdoor spaces with our wide<br></br> selection
              of outdoor plants
            </div>
          </div>
          
          <div className='all'>
          <img src={Outdoor} alt='outdoor' />
          <h3 className='outdoor'>      
            Outdoor Plants
          </h3>
          <p className='outdoorText'><p>Bring a touch of greenery to your
          </p ><p>living space with our collection of</p> <p>indoors
          plants perfect for purifying the</p> air and
          adding a natural touch  to your home</p>

          </div>
         
          <div className='plantport'>
          <img src={PlantPort} alt='image' style={{ marginLeft: '-30px'}} />          
           <div>
            <p style={{ color: 'green',marginLeft:'-235px' }}>Plant Pot</p>
            <div style={{marginLeft:'15px',display:'inline-block'}}>
              Bring the beauty of nature to your
              outdoor spaces with our wide selection<br></br>
              of outdoor plants
            </div>
         
           </div>
          </div>
        </div>

        <h1>What We offer To You</h1>
    </>
 
  )
}

export default WhatWeOffer;
