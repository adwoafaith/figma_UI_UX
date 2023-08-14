import React from "react";
import Image from '../assets/Group 1.png'
import Grow from '../assets/Grow_Sprout.png'
import Pruning from '../assets/Pruning 1.png'
import Temperature from '../assets/Temperature.png'
import './styles.css'

const Galary =() =>{
return(
    <main className="body">
         <div className="container-mine">
            <span className="small-icons">
            <div className="image">
                <img src={Image} alt="image"/>
            </div>
            <div className="icon1">
                <div className="image1"> <img src={Grow} alt="another"/>
                <div className="text-container">
                <p className="title1">Quality Products</p>
                <span className="text1">
                 Our flowers are of the highest quality, 
                 carefully selected and sourced from reputable
                </span>

                </div>
                </div>
                
               <div className="image-container">

                <div className="image2"><img src={Grow} alt="another"/>
                    <div className="text-container2">
                    <p className="title2">Always Fresh</p>
                    <span className="text2">
                    Our flowers are always fresh, handpicked and delivered promptly
                     for maximum longevity and enjoyment.
                    </span>

                    </div>
                </div>
               </div>
            </div>
            <div className="icon2">
               <div className="image3"> <img src={Temperature} alt="another"/>
               <div className="text-container3">
               <p className="title3">Work Smart</p>
               <span className="text3">
               We work smart, using innovative techniques
                and technology to streamline our processes
               </span>

               </div>
               </div>
                <div className="image4"><img src={Pruning} alt="another"/>
                <div className="text-container4">
                <p className="title4"> Excellent services</p>
                <span className="text4">
                We pride ourselves on providing excellent service, going above
                and beyond to meet our customers' needs
                </span>

                </div>
                </div>
            </div>
                
            </span>
         </div>
    </main>
)
}

export default Galary;