import React, { useRef, useState, useEffect } from 'react';
import './Testimonials.css';

import bob_mathews from '../../assets/bob_mathews.jpeg';
import crystal_dsa from '../../assets/crystal_dsa.jpg';
import jorge_lobo from '../../assets/jorge_lobo.jpg';
import micheial_johnson from '../../assets/micheial_johnson.jpg';
import sana_davidson from '../../assets/sana_davidson.jpg';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  // Autoplay state management
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = 5; // Total number of slides

  // Autoplay logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesCount);
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  // Update the slider's position based on the current slide state
  useEffect(() => {
    slider.current.style.transform = `translateX(-${currentSlide * 20}%)`;
  }, [currentSlide]);

  return (
    <div className='testimonials'>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={sana_davidson} alt="" />
                <div className='heading'>
                  <h2>Sana Davidson</h2>
                  <h3>Interior Designer</h3><p className='rating'><i className="fa-solid fa-star"></i> 4.8</p>
                  <p>Great Experience! A must-have tool for anyone in the design industry.</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={micheial_johnson} alt="" />
                <div className='heading'>
                  <h2>Michael Johnson</h2>
                  <h3>Interior Designer</h3>
                  <p className='rating'><i className="fa-solid fa-star"></i> 4.9</p>
                  <p>The AI feature is incredibly intuitive. I loved seeing my ideas come to life in no time!</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={bob_mathews} alt="" />
                <div className='heading'>
                  <h2>Bob Mathews</h2>
                  <h3>Homeowner</h3><p className='rating'><i className="fa-solid fa-star"></i> 4.6</p>
                  <p>Incredible features! The ability to customize furniture placement was exactly what I needed.</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={crystal_dsa} alt="" />
                <div className='heading'>
                  <h2>Crystal D'sa</h2>
                  <h3>Homeowner</h3><p className='rating'><i className="fa-solid fa-star"></i> 4.9</p>
                  <p>This tool saved me hours of work. I was able to design my living room layouts effortlessly.</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={jorge_lobo} alt="" />
                <div className='heading'>
                  <h2>Jorge Lobo</h2>
                  <h3>Homeowner</h3><p className='rating'><i className="fa-solid fa-star"></i> 4.8</p>
                  <p>A perfect solution for homeowners looking to bring their interior design ideas to life without the hassle of hiring a professional.</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;