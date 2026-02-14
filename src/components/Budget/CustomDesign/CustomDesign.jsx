// import React, { useState } from "react";
// import emailjs from "emailjs-com"; // Import emailjs library
// import "./CustomDesign.css";

// const CustomDesign = () => {
//     const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "a67c877a-db25-4c3a-9d43-214f9f45519e");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
//   return (
//     <>
//     <h1 className="heading-custom">Custom Design</h1>
//       <div className="header-customDesign">
//           Get in touch with us for custom design solutions for your home and office

//       </div>

//       <div className="contact">

//         <div className="contact-col">
//           <form onSubmit={onSubmit}>
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               required
//             />
//             <label>Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter mobile number"
//               required
//             />
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email id"
//               required
//             />
//             <label>Write Your message</label>
//             <textarea
//               name="message"
//               rows="6"
//               placeholder="Enter your message"
//               required
//             />
//             <button type="submit" className="btn">
//               Submit now
//             </button>
//           </form>
//           <span>{result}</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CustomDesign;

import React, { useState, useEffect } from "react";
import "./CustomDesign.css";

const CustomDesign = () => {
  const [result, setResult] = useState("");
  const items = ["Bedroom", "Kitchen", "Balcony", "Living room", "Washroom"];
  const [currentItem, setCurrentItem] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "398936ef-c9f4-4a7c-a169-029cb24f4147");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    let typingTimeout;
    let erasingTimeout;

    if (isTyping) {
      // Typing effect
      if (displayText.length < items[currentItem].length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(
            (prevText) => prevText + items[currentItem][prevText.length]
          );
        }, 150);
      } else {
        setIsTyping(false);
        erasingTimeout = setTimeout(() => {
          setIsTyping(true);
        }, 2000); // Pause before erasing
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayText((prevText) => prevText.slice(0, -1));
        }, 100);
      } else {
        setIsTyping(true);
        setCurrentItem((prevItem) => (prevItem + 1) % items.length);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [displayText, isTyping, currentItem, items]);

  return (
    <>
      <style>
        {`
            body{
                background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
 url("/background.jpg") no-repeat center center fixed;
                background-size: cover;
                
    backdrop-filter: blur(2px);
            
                `}
      </style>
      <div className="custom-design-container">
        <div className="image-container"></div>
        <div className="form-container">
          <h1 className="animated-text">
            Get custom design for{" "}
            <span className="highlight">{displayText}</span>
            <span className="blinking-cursor">|</span>
          </h1>
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" required />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter mobile number"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email ID"
              required
            />
            <label>Write Your Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            />
            <button type="submit" className="btn">
              Submit now
            </button>
            <span>{result}</span>
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomDesign;
