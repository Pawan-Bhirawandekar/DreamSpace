import React from 'react'
import './Services.css'
import customization from '../../assets/Customization.jpg'
import text2vision from '../../assets/Text2Vision.avif'
import aigen from '../../assets/AiGen.jpeg'
import vaastu from '../../assets/vaastu.png'
import budget from '../../assets/Budget.jpg'
import { useNavigate } from 'react-router'

const Services = () => {
    const navigate = useNavigate()
    const handleNavigateTo = (path) => {
        navigate('/'+ path)
    }
  return (
    <div >
    <div className='services' >
        {/* <div className="service">
            <img src={customization} alt="" />
            <div className="caption">
                <p>Image Customization</p>
            </div>
        </div> */}
        <div className="service" onClick={() => handleNavigateTo("generateImage")}>
            <img src={text2vision} alt="" />
            <div className="caption">
                <p>Text to Vision</p>
            </div>
        </div>
        <div className="service" onClick={() => handleNavigateTo("aiGeneration")}>
            <img src={aigen} alt="" />
            <div className="caption">
                <p>AI Generated Image</p>
            </div>
        </div>
    </div>
    <div className="naming">
        {/* <div className="desc">
            <h4>Image Customization Service</h4>
            <p>This Section will help you to select your own design, furniture, color scheme, etc.</p>
        </div> */}
        <div className="desc" onClick={() => handleNavigateTo("generateImage")}>
            <h4>Text To Vision Convertor</h4>
            <p>This Section will deliver you with an image based on your supplied description.</p>
        </div>
        <div className="desc" onClick={() => handleNavigateTo("aiGeneration")}>
            <h4>AI Image Generation</h4>
            <p>This Section will render you an image based on your selected inputs.</p>
        </div>
    </div>

    <div className="services">
        <div className="service" onClick={() => handleNavigateTo("vaastu")}>
            <img src={vaastu} alt="" />
            <div className="caption">
                <p>Vaastu Suggestions</p>
            </div>
        </div>
        <div className="service" onClick={() => handleNavigateTo("budget")}>
            <img src={budget} alt="" />
            <div className="caption">
                <p>Budget Estimation</p>
            </div>
        </div>
    </div>
    <div className="naming">
        <div className="desc" onClick={() => handleNavigateTo("vaastu")}>
            <h4>Vaastu Shastra</h4>
            <p>This Section will guide you with arranging spaces with divine energies for harmony and well-being.</p>
        </div>
        <div className="desc" onClick={() => handleNavigateTo("budget")}>
            <h4>Design with Budget Estimation</h4>
            <p>This Section will help you design the Home Space by estimating overall approximate budget.</p>
        </div>
    </div>
    </div>
  )
}

export default Services

