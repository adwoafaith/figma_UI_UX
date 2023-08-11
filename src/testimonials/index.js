import React from 'react'
import data  from './data'
import './styles.css'
 
const Testimonial =()=> {
  return (
    <div className='container-all'>
        <span className='heading'>What Do They Say About Us</span>
        {
            data.map((students)=>{
                const {id}= students;
                return(
                    <div className='overall' key={id}> 
                        <span className='mydesign' >
                                <div className='names'>
                                    {students.name}
                                </div>
                                <div className='image'>
                                    <img src={students.image} alt='name'/>
                                </div>
                                <div className='information'>
                                    {students.info}
                                </div>
                                <div className='icons-back'>
                                <img src={students.avatar} alt='name'/>
                                </div>    

                        </span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Testimonial;