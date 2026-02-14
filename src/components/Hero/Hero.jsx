import React from 'react'
import './Hero.css'
import seprator from '../../assets/seprator.png'

const Hero = () => {
  return (
    <div className='hero ' id='home'>
        <div className='hero-text'>
            <h1>Unleash Your Design Potential with DreamSpace</h1>
            {/* <div className='seprator'>
                <img src={seprator} alt='-----------------' className='seprator-img'></img>
            </div> */}
            {/* <h1>Unlocking Your Dream Space</h1> */}
            <p><button className='explore-btn'><a style={{ color: "black" , textDecoration:"none"}} href="#services">Explore more</a></button></p>
            {/* <button className='explore-btn'><h1>Unlocking Your Dream Space</h1></button> */}
        </div>
    </div>
  )
}

export default Hero
