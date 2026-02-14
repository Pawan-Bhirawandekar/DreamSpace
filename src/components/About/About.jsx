import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import aboutus from '../../assets/Aboutus.jpg';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={aboutRef}
            className={`about ${isVisible ? 'visible' : ''}`}
            id="aboutus"
        >
            <div className="about-left">
                <img src={aboutus} alt="About us" className="aboutimg" />
            </div>
            <div className="about-right">
                <h1>What We Do</h1>
                <h2>"Transforming your Dream into Reality."</h2>
                <p>
                    Welcome to DreamSpace, where creativity meets functionality in the world of interior design. We are a team of innovators and problem-solvers dedicated to transforming spaces into meaningful, beautiful environments that inspire and elevate the way you live and work. Our platform connects you with top-tier interior designers, tools, and resources to make your vision a reality.
                    <br />
                    We democratize interior design by providing users with innovative tools and expert insights, allowing them to create their dream spaces, regardless of budget or style.
                </p>
                <p>Thank you for choosing DreamSpace - let's build something beautiful together!</p>
            </div>
        </div>
    );
};

export default About;
