import React, { useEffect, useState } from "react";

import Hero from "./../Hero/Hero";
import Contact from "./../Contact/Contact";
import About from "./../About/About";
import Title from "./../Title/Title";
import Services from "./../Services/Services";
import SwiperGallery from "./../Swiper/SwiperGallery";
import Testimonials from "./../Testimonials/Testimonials";
import Professional from "./../Professional/Professional";

import slide_image1 from "./../../assets/balcony.jpeg";
import slide_image2 from "./../../assets/bedroom_ai.jpg";
import slide_image3 from "./../../assets/livingroom.jpeg";
import slide_image4 from "./../../assets/ceiling.jpg";
import slide_image5 from "./../../assets/kitchen1.jpg";
import slide_image6 from "./../../assets/wadrobe.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const images = [
  { src: slide_image1, alt: "Balcony" },
  { src: slide_image2, alt: "Bedroom" },
  { src: slide_image3, alt: "Living Room" },
  { src: slide_image4, alt: "Ceiling" },
  { src: slide_image5, alt: "Kitchen" },
  { src: slide_image6, alt: "Wardrobe" },
];

export default function Home(props) {
  const { homeRef } = props;
  return (
    <>
      <Navbar />
      <div ref={homeRef}>
        <Hero />

        <div className="container">
          <About />

          <Title title="What We Offer" id={"services"} />
          <Services />

          <Title
            title="Get a glimpse of DreamSpace homes"
            subTitle="Transform your space with the latest dream home interiors"
          />
          <SwiperGallery images={images} title="AI Gallery" />

          <Title title="Connect With Professionals" />
          <Professional />

          <Title title="What Our Clients Say" id="feedback" />
          <Testimonials />

          <Title
            subTitle="Get in Touch"
            id={"contact"}
            title="Contact us"
          ></Title>
          <Contact />

          <Footer />
        </div>
      </div>
    </>
  );
}
