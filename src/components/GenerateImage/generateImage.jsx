import { useState } from "react";
import axios from "axios";
import "./generateImage.css";

export default function GenerateImage() {
  const [roomType, setRoomType] = useState("");
  const [color, setColor] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleGenerateImage = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state

    try {
      console.log("Fetching image...");
      const response = await axios.post(
        "http://localhost:4000/api/image/",
        { roomType, color },
        { responseType: "arraybuffer" } // Expect binary data
      );

      // Convert the binary response to a Base64 string
      const base64String = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

      setImageBase64(`data:image/png;base64,${base64String}`); // Set Base64 as image source
    } catch (err) {
      console.error("Error generating the image:", err);
      setError("Failed to generate the image. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  function downloadImage() {
    
    const link = document.createElement('a');
    
    link.download = 'generated_image.png';
    // Set the href to the base64 data
    link.href = imageBase64;
    // Trigger the download
    link.click();
  }

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 250) {
      setDescription(value);
      setCharLimitError(""); // Clear error if within limit
    } else {
      setCharLimitError("Maximum 250 characters allowed."); // Show error
    }
  };

  return (
    <div className="container-genimg">
      <h1 className="title">Synthesize Your Imagination into Reality</h1>
      <div className="flexdisplay">
        <form className="form">
          <div className="form-group">
            <label htmlFor="roomType" className="label">
              Room Type
            </label>
            <input
              type="text"
              id="roomType"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              placeholder="Enter room type (e.g., Bedroom)"
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="color" className="label">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Enter a description"
              className="input"
            />
          </div>
          <button
            type="button"
            onClick={handleGenerateImage}
            className="button"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Image"}
          </button>
        </form>
        {error && <p className="error">{error}</p>} {/* Display error if any */}
        {imageBase64 && (
          <div className="image-container">
            <h2 className="subtitle">Generated Image:</h2>
            <div className="image-wrapper"> 
              <img
                id="aiImage"
                src={imageBase64}
                alt="Generated Room"
                className="generated-image"
              />
              <i onClick={downloadImage}  className="fa-solid fa-arrow-down download-icon"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
