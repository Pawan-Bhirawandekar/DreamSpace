import React, { useState } from "react";
import "./Kitchen.css";
import Kitchen1 from "../../../assets/kitchen1.png";
import Kitchen2 from "../../../assets/kitchen2.png";
import Kitchen7 from "../../../assets/kitchen7.png";
import Kitchen4 from "../../../assets/kitchen4.png";
import Kitchen5 from "../../../assets/kitchen5.png";
import Kitchen6 from "../../../assets/kitchen6.png";

// Modal component
const Modal = ({ isOpen, onClose, imageSrc, description, cost }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={imageSrc} alt="Design" className="modal-image" />
        <div className="modal-description">
          <p>{description}</p>
          <p>
            <strong>Cost: </strong>
            {cost}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main component
const KitchenDesign = () => {
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
      imageSrc: Kitchen1,
      description: "This luxurious modern kitchen features sleek black cabinetry, a marble-topped island, and integrated lighting for a sophisticated look. Open layout and high-end finishes enhance the space, blending style with functionality.",
      cost: "$20,000 to $50,000",
    },
    {
      imageSrc: Kitchen2,
      description: "This charming kitchen design features a minimalist white color scheme with a central island and sleek countertops. The setup is complemented by wooden bar stools, pendant lighting, and natural wood flooring, offering a warm and inviting atmosphere.",
      cost: "$10,000 to $25,000",
    },
    {
      imageSrc: Kitchen7,
      description: "This contemporary kitchen features sleek high-gloss black and white cabinetry, a spacious island with a waterfall countertop, and stylish bar stools. The backsplash with geometric patterns adds a modern touch, while integrated lighting enhances the ambiance.",
      cost: "$4,800 to $12,000 ",
      className: "design-image3",
    },
    {
      imageSrc: Kitchen4,
      description: "This contemporary kitchen features sleek high-gloss black and white cabinetry, a spacious island with a waterfall countertop, and stylish bar stools. The backsplash with geometric patterns adds a modern touch, while integrated lighting enhances the ambiance.",
      cost: "$15,000 to $35,000",
    },
    {
      imageSrc: Kitchen5,
      description: "This bright and airy traditional kitchen showcases white cabinetry, a large central island with a white countertop, and warm hardwood flooring. Natural light floods the space through multiple windows above the sink area.",
      cost: "$30,000 to $75,000",
    },
    {
      imageSrc: Kitchen6,
      description:"This modern modular kitchen features sleek, olive-toned cabinets with a mix of glossy and matte finishes, complemented by a patterned backsplash. The design incorporates efficient storage solutions and modern appliances, maximizing functionality in a compact space.",
      cost: "$3,000 to $7,200",
    },
  ];

  return (
    <div className="container">
      <div className="design-grid">
        {designData.map((design, index) => (
          <div className="design-card" key={index}>
            <div>
              <img
                src={design.imageSrc}
                alt={`Bedroom Design ${index + 1}`}
                className="design-image"
              />
            </div>
            <button
              className="estimate-button"
              onClick={() => handleButtonClick(design)}
            >
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

export default KitchenDesign;
