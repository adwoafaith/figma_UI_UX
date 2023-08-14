import React,{useState} from 'react'
import './styles.css'
import plants from '../plants'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
// import { Heart } from   'react-icons/BiHeartCircle'


const Products =()=>{
const [icon,setIcon] = useState(false)

  return (
    <div className='body-container'>
      <div className='body'>
        
     
          <div className='titled'>
            What We Offer
          </div>
      <div className='cactus-container'>

          {
            plants.map(item =>{
              return(
                <div className=''>
                  <button style={{ marginBottom: '-300px' }} onClick={()=>setIcon(!icon)} className='icon-container'>

                  <span className='icon'>
                    {
                      icon?<AiFillHeart  style={{color:'green'}}/>:<AiOutlineHeart/>
                    }
                   
                  </span>
                  </button>
                    <div className='cactusPlant'> 
                    <div className='filled-icon'>
                    </div>
                    <img src={item.Image} alt='image' />
                    </div>
                    <div>
                      <div className='cactus-plant'>
                    {item.name}
                      </div>  
                    {item.Price}
                    <span className='number'>{item.number}</span>
                    </div> 
                    <div className='button-container'>
                    <button className='button1'>Buy Now</button>
                    </div>   
                </div>
              )
            })
          }
          </div>
           </div>
    </div>

  )
}

export default Products;