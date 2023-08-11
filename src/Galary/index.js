import React, { useState } from "react";
import data from "../data";
import coton from '../assets/pexels-cottonbro-studio-4507715 2.png'
import image from '../assets/image 5.png'
import cotton4 from '../assets/pexels-cottonbro-studio-4507715 4.png'

const Pictures =()=>{
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            
            {
                data.map((item)=>{
                   
                    return (
                        <div key={item.id}>
                            <img src ={item.Image} alt="image"/>
                            <img src={coton} alt=""/>    
                            <img src={image} alt=""/>
                            <img src={cotton4} alt=""/>  
                        </div>
                            
                        
                    )
                })
            }
           
        </>
    )
}

export default Pictures;