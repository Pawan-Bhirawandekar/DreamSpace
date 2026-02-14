import React, { useRef } from 'react'
import './Professional.css'
import back_img from '../../assets/back_img.png'
import next_img from '../../assets/next_img.png'

import Alex_fernandes from '../../assets/Alex_fernandes.jpg'
import Arjun_Mehta from '../../assets/Arjun_Mehta.jpg'
import Serena_Voss from '../../assets/Serena_Voss.jpeg'
import Maya_Kapoor from '../../assets/Maya_Kapoor.jpeg'
import Sophia_Lanes from '../../assets/Sophia_Lanes.jpg'

const Professional = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -70) {
      tx -= 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='Professional'>
      <img src={next_img} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_img} alt="" className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={Alex_fernandes} alt="" />
                <div className='heading'>
                  <h2>Alex fernandes</h2>
                  <h3>Residential Interior Designer</h3>
                  <p>Years of Experience: 4</p>
                  <p>Contact: 123-456-7890</p>
                  <p>Email: alexfernandes@gmail.com</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={Serena_Voss} alt="" />
                <div className='heading'>
                  <h2>Serena Voss</h2>
                  <h3>Commercial Interior Designer</h3>
                  <p>Years of Experience: 5</p>
                  <p>Contact: 234-567-8901</p>
                  <p>Email: serenaV@gmail.com</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={Arjun_Mehta} alt="" />
                <div className='heading'>
                  <h2>Arjun Mehta</h2>
                  <h3>Commercial Interior Designer</h3>
                  <p>Years of Experience: 2</p>
                  <p>Contact: 345-678-9012</p>
                  <p>Email: arjun@gmail.com</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={Maya_Kapoor} alt="" />
                <div className='heading'>
                  <h2>Maya Kapoor</h2>
                  <h3>Sustainable Interior Designer</h3>
                  <p>Years of Experience: 3</p>
                  <p>Contact: 456-789-0123</p>
                  <p>Email: kapoormaya@gamil.com</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={Sophia_Lanes} alt="" />
                <div className='heading'>
                  <h2>Sophia Lanes</h2>
                  <h3>Residential Interior Designer</h3>
                  <p>Years of Experience: 1</p>
                  <p>Contact: 567-890-1234</p>
                  <p>Email: jorge@gmail.com</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Professional
