import React, { useState } from "react";
import data from "./data";
import './styles.css'
import MyImage from '../assets/image 5.png'
const Pictures = () => {

    return (
        <div className="galary-container">
            <div className="big-image">
                <img src={MyImage} alt="image" />
            </div>

            {
                data.map((item) => {
                    const { id, Image } = item
                    return (
                        <span key={item.id} className="all-container">
                            
                            <div className="all-four">
                                 <img src={Image} alt="image" />
                            </div>
                        </span>


                    )
                })
            }

        </div>
    )
}

export default Pictures;