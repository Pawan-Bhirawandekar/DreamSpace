import React from 'react';
import './contact.css';
import emailIcon from '../../assets/email.svg';
import phoneIcon from '../../assets/phone.svg';
import locationIcon from '../../assets/location.svg';

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (event) => {
        console.log("cooleing function")
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "398936ef-c9f4-4a7c-a169-029cb24f4147");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully!");
                event.target.reset();
            } else {
                setResult(data.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setResult("Network error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message</h3>
                <p>
                    Have questions or ready to transform your space? Contact us for personalized interior design solutions. 
                    We're here to bring your vision to life!
                </p>
                <ul>
                    <li>
                        <a href="mailto:contact.dreamspace2425@gmail.com?subject=Contact%20to%20Interior">
                            <img src={emailIcon} alt="Email" /> contact.dreamspace2425@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+919969403524">
                            <img src={phoneIcon} alt="Phone" /> +91 9969403524 
                        </a>&nbsp;&nbsp; || &nbsp;&nbsp; 
                        <a href="tel:+919820118984">
                            +91 9820118984
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.google.com/maps?q=Vile-Parle,+Mumbai,+Maharashtra" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img src={locationIcon} alt="Location" /> Vile-Parle, Mumbai, Maharashtra
                        </a>
                    </li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" required />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter mobile number" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email id" required />

                    <label htmlFor="message">Write Your Message</label>
                    <textarea id="message" name="message" rows="6" placeholder="Enter your message" required></textarea>

                    <button type="submit" className="btn" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Now"}
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;

