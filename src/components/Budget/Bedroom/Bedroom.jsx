import React, { useState } from 'react';
import './Bedroom.css'
import Bedroom1 from "../../../assets/Bedroom1.jpeg";
import Bedroom2 from "../../../assets/Bedroom2.jpeg";
import Bedroom3 from "../../../assets/Bedroom3.jpeg";
import Bedroom4 from "../../../assets/Bedroom4.jpeg";
import Bedroom5 from "../../../assets/Bedroom5.jpeg";
import Bedroom6 from "../../../assets/Bedroom6.jpeg";

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
const BedroomDesign = () => {
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
      imageSrc: Bedroom1,
      description: 'This elegant bedroom features classic dark wood furniture, a carved bed, and soft teal walls adorned with framed art and a decorative mirror. Warm lighting, sheer curtains, and beige carpeting create a cozy and timeless ambiance.',
      cost: '$30,000 - $50,000'
    },
    {
      imageSrc: Bedroom2,
      description: 'This cozy bedroom features a soft pastel pink color palette with modern minimalistic furniture. It includes a sleek wardrobe, a comfortable upholstered bed, and a small bedside table with a stylish lamp. The walls are decorated with framed art and photos, while a large window with sheer curtains brings in natural light. The room exudes a soft, calming, and elegant atmosphere.',
      cost: '$15,000 - $25,000'
    },
    {
      imageSrc: Bedroom3,
      description: 'This charming bedroom features a bright and airy ambiance with soft blue walls and large windows that let in natural light, adorned with floral curtains. A cozy bed with layered blankets and cushions is paired with a wooden desk and chair, creating a functional workspace. The walls are decorated with a variety of framed art and photos, and the room is completed with bookshelves and a patterned area rug, giving it a warm, personalized, and inviting vibe.',
      cost: '$5,000 - $10,000'
    },
    {
      imageSrc: Bedroom4,
      description: 'This elegant bedroom showcases a luxurious classical design with soft beige tones and intricate detailing. The upholstered bed with a carved headboard is complemented by matching bedside tables and ornate wall sconces. A vintage chandelier adds grandeur, while the tall wardrobe and custom moldings emphasize sophistication. The large window draped with layered curtains allows natural light to enhance the rich textures, and the patterned area rug ties the space together with warmth and refinement.',
      cost: '$40,000 - $60,000'
    },
    {
      imageSrc: Bedroom5,
      description: 'This modern bedroom features a sleek and minimalistic design with a monochromatic gray palette. The low-profile upholstered bed with clean lines is paired with matching bedside tables and modern lighting fixtures. Floor-to-ceiling windows and transom windows allow abundant natural light, complemented by soft sheer curtains. A cozy accent chair and textured area rug add warmth, while the recessed ceiling lighting with a contemporary pendant fixture enhances the rooms elegant ambiance. The overall aesthetic emphasizes comfort, simplicity, and sophistication.',
      cost: '$10,000 - $20,000'
    },
    {
      imageSrc: Bedroom6,
      description: 'This stylish bedroom blends functionality with a contemporary aesthetic. Featuring a sleek upholstered bed in dark gray, complemented by bold black-and-white striped bedding, the room exudes a modern vibe. The walls are painted in deep gray tones, enhancing the cozy atmosphere, while a large window lets in natural light, softened by sheer curtains. The space is highly organized, with built-in shelves and a tall bookcase offering ample storage for books and decor. A well-lit desk and workspace area add practicality, making it ideal for study or work. A modern chandelier adds a touch of sophistication to the room.',
      cost: '$8,000 - $15,000'
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

export default BedroomDesign;
