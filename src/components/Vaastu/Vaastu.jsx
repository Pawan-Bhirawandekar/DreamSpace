import React from "react";
import "./Vaastu.css";

const Vaastu = () => {
  const [roomType, setRoomType] = React.useState("");
  // const [userInput, setUserInput] = React.useState("");
  const [suggestion, setSuggestion] = React.useState("");

  const handleGetSuggestion = () => {
    const vastuTips = {
      "Bedroom": `For your Bedroom:
        - Place the bed in the southwest corner of the room.
        - Sleep with your head towards the south or east to promote restful sleep.
        - Avoid placing a mirror in front of the bed as it can cause disturbed energy.
        - Use soothing colors like light blue, green, or pastel shades for walls.
        - Keep the room clutter-free to maintain positive energy flow.`,
        // ${userInput ? `Custom tip: ${userInput}` : ""}`,

      "Kitchen": `For your Kitchen:
        - The ideal location is the southeast corner of the house.
        - Avoid placing the stove and sink next to each other as fire and water elements clash.
        - Keep the cooking stove facing east to align with positive energy.
        - Store grains and spices in the southwest for stability.
        - Ensure proper ventilation with an exhaust fan or chimney.`,
        //${userInput ? `Custom tip: ${userInput}` : ""}`,

      "Living Room": `For your Living Room:
        - Place the living room in the northeast or north direction to invite positive energy.
        - Arrange seating such that guests face east or north.
        - Use light-colored walls and ample natural lighting.
        - Keep electronic gadgets and clutter to a minimum.
        - Decorate with indoor plants and positive artwork.`,
        //${userInput ? `Custom tip: ${userInput}` : ""}`,

      "Washroom": `For your Washroom:
        - The washroom should be located in the northwest or southeast direction.
        - Avoid placing it near the kitchen or prayer room.
        - Ensure proper ventilation and cleanliness.
        - Use light colors and avoid dark or dull shades.
        - Always keep the door and toilet lid closed when not in use.`,
        //${userInput ? `Custom tip: ${userInput}` : ""}`,

      "Balcony": `For your Balcony:
        - Ideally, place the balcony in the northeast direction.
        - Use it as a space to enjoy sunlight and fresh air.
        - Decorate with potted plants and light furniture.
        - Avoid heavy storage or clutter on the balcony.
        - Ensure the railing is of a comfortable height and design.`,
        //${userInput ? `Custom tip: ${userInput}` : ""}`,

      "Pooja Room": `For your Pooja Room:
        - The northeast direction is considered the most auspicious.
        - The person performing the pooja should ideally face east or north.
        - Place the pooja room near windows that allow ample daylight to enter.
        - Use soft, warm lighting in the pooja room to create a peaceful and calming environment.
        - The altar should be at a height where the idols or pictures are not at eye level.`,
        //${userInput ? `Custom tip: ${userInput}` : ""}`,
    };

    setSuggestion(vastuTips[roomType] || "Please select a valid room type.");
  };

  return (
    <div className="container1">
      <div className="header">
        <h1>Vaastu Suggestion</h1>
        <p>Get detailed tips for your home and workspace based on Vaastu Shastra</p>
      </div>

      <div className="card">
        <div className="form-group">
          <label>Select a Room Type:</label>
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="">Choose a room type</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Living Room">Living Room</option>
            <option value="Washroom">Washroom</option>
            <option value="Balcony">Balcony</option>
            <option value="Pooja Room">Pooja Room</option>
          </select>
        </div>

        {/* <div className="form-group">
          <label>Enter Custom Information (Optional):</label>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="E.g., prefer natural lighting, avoid clutter"
          />
        </div> */}

        <button className="btn1" onClick={handleGetSuggestion}>Get Suggestion</button>

        {suggestion && (
          <div className="suggestion-box">
            <pre>{suggestion}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vaastu;

