import { Link } from "react-router";
import "./BudgetHomePage.css";

const BudgetHomePage = () => {
    return (
      <div className="button-page budget-page">
        <div className="Back-Button">
        <Link to="/">
          <button className="back-button" style={{ position: 'fixed' }}>Go Back</button>
        </Link>
        <h1 className="page-title">Home Design Options</h1>
        <div className="button-grid">
          <Link to="bedroom">
            <button className="navigate-button">Bedroom</button>
          </Link>
          <Link to="balcony">
            <button className="navigate-button">Balcony</button>
          </Link>
          <Link to="livingroom">
            <button className="navigate-button">Living Room</button>
          </Link>
          <Link to="kitchen">
            <button className="navigate-button">Kitchen</button>
          </Link>
          <Link to="CustomDesign">
            <button className="navigate-button">Custom Design</button>
          </Link>
        
        </div>
        </div>
      </div>
    );
  };

  export default BudgetHomePage;