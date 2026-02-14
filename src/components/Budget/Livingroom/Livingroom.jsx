import React, { useState } from 'react';
import './Livingroom.css'
import Livingroom1 from "../../../assets/Livingroom1.jpeg";
import Livingroom2 from "../../../assets/Livingroom2.jpeg";
import Livingroom3 from "../../../assets/Livingroom3.jpeg";
import Livingroom4 from "../../../assets/Livingroom4.jpeg";
import Livingroom5 from "../../../assets/Livingroom5.jpeg";
import Livingroom6 from "../../../assets/Livingroom6.jpeg";

// Modal component
const Modal = ({ isOpen, onClose, imageSrc, description, cost }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={imageSrc} alt="Design" className="modal-image" />
        <div className="modal-description">
          <p>{description}</p>
          <p><strong>Cost: </strong>{cost}</p>
        </div>
      </div>
    </div>
  );
};

// Main component
const LivingroomDesign  = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleButtonClick = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Data for the bedroom designs (6 different designs)
  const designData = [
    {
      imageSrc: Livingroom1,
      description: 'This cozy and inviting living room features a large built-in bookshelf filled with books, comfortable beige sofas, and a wooden coffee table. A large window with sheer curtains allows natural light to filter in, and a modern entertainment unit houses a flat-screen TV. The warm color palette and soft lighting create a relaxing atmosphere.',
      cost: '$5,000 to $20,000'
    },
    {
      imageSrc: Livingroom2,
      description: 'This opulent and elegant living room showcases classic design elements with ornate wall paneling, a grand crystal chandelier, and luxurious curved sofas and armchairs upholstered in a light, plush fabric. Artwork adorns the walls, and a detailed fireplace serves as a focal point, creating a sophisticated and formal ambiance.',
      cost: ' $20,000 to $100,000'
    },
    {
      imageSrc: Livingroom3,
      description: 'This traditionally styled living room exudes warmth and character with its rich wood furniture, including a large desk and a sideboard adorned with framed pictures. Comfortable upholstered armchairs and a sofa with decorative pillows offer seating, while a grandfather clock stands near a window with heavy drapes. The walls are filled with an eclectic collection of artwork, creating a lived-in and inviting space.',
      cost: '$8,000 to $40,000'
    },
    {
      imageSrc: Livingroom4,
      description: 'This sophisticated and minimalist living room features a sleek black leather sofa, two modern armchairs in a neutral tone, and a glossy black coffee table. Large sliding glass doors provide ample natural light and a view of the outdoors, complemented by floor-to-ceiling curtains. Abstract art hangs on the wall, and track lighting illuminates the space, creating a contemporary and uncluttered aesthetic.',
      cost: '$7,000 to $30,000'
    },
    {
      imageSrc: Livingroom5,
      description: 'This cozy and contemporary living room features a comfortable grey sectional sofa, a simple wooden coffee table, and a floating entertainment unit with a flat-screen TV. Sheer curtains filter natural light from the window, and a floor lamp provides additional illumination. The neutral color palette and minimalist decor create a relaxed and functional space.',
      cost: '$3,500 to $15,000 '
    },
    {
      imageSrc: Livingroom6,
      description: 'This modern and minimalist living room showcases a large, comfortable sectional sofa in a light neutral tone, paired with a unique, sculptural coffee table. Abstract artwork adorns the walls, and a tall window with sheer curtains allows for soft, natural light. The clean lines and understated decor create a serene and sophisticated atmosphere.',
      cost: '$6,000 to $25,000'
    }
  ];

  return (
    <div className="container">
      <div className="design-grid">
        {designData.map((design, index) => (
          <div className="design-card" key={index}>
            <img src={design.imageSrc} alt={`Bedroom Design ${index + 1}`} className="design-image" />
            <button className="estimate-button" onClick={() => handleButtonClick(design)}>
              Estimate the Cost
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageSrc={modalData.imageSrc}
        description={modalData.description}
        cost={modalData.cost}
      />
    </div>
  );
};

export default  LivingroomDesign;
