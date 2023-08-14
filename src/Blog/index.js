import React from 'react'
import data from './data';
import './styles.css';
import { MdOutlineDateRange } from 'react-icons/md'
import { AiOutlineArrowRight } from 'react-icons/ai'


const Blog =()=> {
  return (
    <div className='blog-container'>
          <span className='blog-heading'>Interesting blog to read</span>
            <div className='blogs'>

           
          {
            data.map((items)=>{
                const {image,title,info,readMore,date} = items;
                return(
                    <div className='all-blogs'> 
                        <div className='blog-image'>
                            <img src={image} alt='image'/>
                        </div>
                        <div className='blog-titles'>
                            <h5>{title}</h5>
                        </div>
                        <div className='blog-info'>
                            <span>{info}</span>
                        </div>
                        <br></br>
                        <div className='blog-date'>
                            <MdOutlineDateRange />
                            {date}
                        </div>
                        <div className='blog-readMore'> 
                            {readMore}
                            <button className='readmore-btn'>
                                <AiOutlineArrowRight/>
                            </button>
                        </div>

                        
                    </div>
                )
            })
          }
          </div>
    </div>
  )
}

export default Blog;
