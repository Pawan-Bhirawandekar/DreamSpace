// import React, { useState } from 'react';
// import './Balcony.css'
// import Bedroom1 from '../../../assets/Bedroom1.jpeg'
// import Bedroom2 from '../../../assets/Bedroom2.jpeg'
// import Bedroom3 from '../../../assets/Bedroom3.jpeg'
// import Bedroom4 from '../../../assets/Bedroom4.jpeg'
// import Bedroom5 from '../../../assets/Bedroom5.jpeg'
// import Bedroom6 from '../../../assets/Bedroom6.jpeg'

// // Modal component
// const Modal = ({ isOpen, onClose, imageSrc, description, cost }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="close-button" onClick={onClose}>X</button>
//         <img src={imageSrc} alt="Design" className="modal-image" />
//         <div className="modal-description">
//           <p>{description}</p>
//           <p><strong>Cost: </strong>{cost}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main component
// const BalconyDesign = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState({});

//   const handleButtonClick = (data) => {
//     setModalData(data);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   // Data for the bedroom designs (6 different designs)
//   const designData = [
//     {
//       imageSrc: Bedroom1,
//       description: 'Luxury Bedroom with modern lighting and custom furniture.',
//       cost: '$30,000 - $50,000'
//     },
//     {
//       imageSrc: Bedroom2,
//       description: 'Minimalist Bedroom with sleek decor and smart features.',
//       cost: '$15,000 - $25,000'
//     },
//     {
//       imageSrc: Bedroom3,
//       description: 'Cozy Bedroom with comfortable furniture and warm colors.',
//       cost: '$5,000 - $10,000'
//     },
//     {
//       imageSrc: Bedroom4 ,
//       description: 'Elegant Bedroom with premium finishes and a spacious layout.',
//       cost: '$40,000 - $60,000'
//     },
//     {
//       imageSrc: Bedroom5 ,
//       description: 'Contemporary Bedroom with modern furniture and minimal design.',
//       cost: '$10,000 - $20,000'
//     },
//     {
//       imageSrc: Bedroom6,
//       description: 'Classic Bedroom with traditional furniture and soothing colors.',
//       cost: '$8,000 - $15,000'
//     }
//   ];

//   return (
//     <div className="container">
//       <div className="design-grid">
//         {designData.map((design, index) => (
//           <div className="design-card" key={index}>
//             <img src={design.imageSrc} alt={`Bedroom Design ${index + 1}`} className="design-image" />
//             <button className="estimate-button" onClick={() => handleButtonClick(design)}>
//               Estimate the Cost
//             </button>
//           </div>
//         ))}
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         imageSrc={modalData.imageSrc}
//         description={modalData.description}
//         cost={modalData.cost}
//       />
//     </div>
//   );
// };

// export default BalconyDesign;


import React, { useState } from "react";
import "./Balcony.css";
import Balcony1 from "../../../assets/balcony1.png";
import Balcony2 from "../../../assets/balcony2.png";
import Balcony3 from "../../../assets/balcony3.png";
import Balcony4 from "../../../assets/balcony4.png";
import Balcony5 from "../../../assets/balcony5.png";
import Balcony6 from "../../../assets/balcony6.png";

// Modal component
const Modal = ({ isOpen, onClose, imageSrc, description, cost }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-image-container">
          <img src={imageSrc} alt="Design" className="modal-image" />
        </div>
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
const BalconyDesign = () => {
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
      imageSrc: Balcony1,
      description: "This is a modern and stylish balcony setup featuring sleek gray walls, vibrant green accents, and contemporary furniture. The space is decorated with woven chairs, a wooden dining table, and potted plants, creating a cozy and inviting atmosphere for relaxation or casual gatherings.",
      cost: "$950–$1,050",
    },
    {
      imageSrc: Balcony2,
      description: "This cozy balcony features a minimalist design with a comfortable sofa, a round coffee table, and natural elements like potted plants and soft cushions. The wooden deck tiles and glass railing add a modern and airy vibe.",
      cost: "$700–$900",
    },
    {
      imageSrc: Balcony3,
      description: "This modern balcony design features wooden armchairs with textured cushions, a cozy ottoman, and vertical planters for greenery. String lights and a geometric rug enhance the warm, inviting ambiance.",
      cost: "$800–$1,000",
    },
    {
      imageSrc: Balcony4,
      description:
        "This cozy, well-decorated balcony features warm peach-toned walls, a comfortable seating arrangement, potted plants, a small table, and a natural fiber rug, creating a serene outdoor space. The style reflects a blend of Scandinavian minimalism and earthy aesthetics. ",
      cost: "$500 to $1,000",
    },
    {
      imageSrc: Balcony5,
      description:
        "This stylish and compact balcony design features an exposed brick wall, a built-in storage bench with a bright yellow cushion, and decorative shelving with soft lighting. Potted plants line the railing, adding greenery, while thoughtful decor creates a cozy and functional space.",
      cost: "$700 to $1,500",
    },
    {
      imageSrc: Balcony6,
      description:
        "This modern balcony setup offers a stunning city view, complemented by white brick walls, cozy seating, and a mix of natural and warm lighting. Features include a vertical green trellis, elegant decor, a rug, and a unique bookshelf that adds character to the space.",
      cost: "$800 to $1,800",
    },
  ];

  return (
    <div className="container">
      <div className="design-grid">
        {designData.map((design, index) => (
          <div className="design-card" key={index}>
            <img
              src={design.imageSrc}
              alt={`Bedroom Design ${index + 1}`}
              className="design-image"
            />
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

export default BalconyDesign;
