import React from 'react'
import './styles.css'

const Froms = () => {
    return (
        <div className='cover'>
            <span className='myform'>
                <form className='form-name'>
                    <label htmlFor='name' className='form-names'>
                        Enter your email address for our <br></br>mailing Promo or other interesting <br></br>things
                    </label>
                    <input className='input' placeholder='Enter your email'></input>
                    <div>
                        <button className='form-btn'>Submit</button>
                    </div>
                </form>
            </span>
        </div>
    )
}

export default Froms;
