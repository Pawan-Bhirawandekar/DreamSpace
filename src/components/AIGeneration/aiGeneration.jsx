import { useState } from "react";
import axios from "axios";
import "./aiGeneration.css";

export default function AIImageGeneration() {
  const [roomType, setRoomType] = useState("Bedroom");
  const [color, setColor] = useState("Red");
  const [category, setCategory] = useState("Essential");
  const [base64Images, setBase64Images] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImage = async () => {
    console.log("Fetching image...");
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating delay
    const response = await axios.post(
      "http://localhost:4000/api/image/",
      { roomType, color, category },
      { responseType: "arraybuffer" }
    );

    const base64String = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
    return base64String;
  };

  const handleGenerateImage = async () => {
    setLoading(true);
    setError(null);

    try {
      const NUMBER_OF_IMAGES = 4;
      let results = [];
      for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
        const base64string = await fetchImage();
        results.push(`data:image/png;base64,${base64string}`);
      }

      setBase64Images(results);
    } catch (err) {
      console.error("Error generating the image:", err);
      setError("Failed to generate the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  function downloadImage(base64, index) {
    const link = document.createElement('a');
    link.download = `generated_image${index}.png`;
    link.href = base64;
    link.click();
  }

  return (
    <div className="container-genimg">
      <h1 className="title">AI Room Image Generator</h1>

      <div
        className={`content ${base64Images.length > 0 ? "content-generated" : ""}`}
      >
        <form className="form">
          <div className="form-group">
            <label className="label" htmlFor="roomTypeSelect">Room Type</label>
            <select
              id="roomTypeSelect"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="dropdown"
            >
              <option value="">Select Room Type</option>
              {["Bedroom", "Kitchen", "Washroom", "Living Room"].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="label" htmlFor="colorSelect">Color</label>
            <select
              id="colorSelect"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="dropdown"
            >
              <option value="">Select Color</option>
              {["red", "blue", "green", "yellow", "black", "white", "gray", "orange", "purple", "pink", "brown", "cyan", "magenta",
    "crimson", "scarlet", "burgundy", "maroon", "rose", "ruby", "carmine", "coral", "salmon", "vermilion", "blush", "cherry",
    "navy", "sky", "azure", "teal", "turquoise", "cerulean", "sapphire", "periwinkle", "cobalt", "indigo", "ultramarine", "denim",
    "lime", "olive", "mint", "jade", "emerald", "forest", "sage", "chartreuse", "seafoam", "pistachio", "moss", "hunter",
    "gold", "amber", "mustard", "lemon", "canary", "saffron", "topaz", "banana", "butterscotch", "dandelion", "flaxen",
    "tangerine", "peach", "apricot", "rust", "pumpkin", "amber", "carrot", "persimmon", "copper", "coral",
    "lavender", "lilac", "violet", "plum", "amethyst", "orchid", "mauve", "magenta", "grape", "mulberry", "eggplant",
    "chocolate", "chestnut", "cocoa", "coffee", "mahogany", "umber", "tan", "beige", "sand", "sienna", "sepia", "wheat",
    "silver", "charcoal", "ash", "slate", "gunmetal", "pewter", "dove", "smoke", "graphite", "fossil",
    "aqua", "beige", "taupe", "fuchsia", "indigo", "ivory", "khaki", "ochre", "opal", "pewter", "rosewood", "ultramarine", "vermilion"].map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="label" htmlFor="categorySelect">Category</label>
            <select
              id="categorySelect"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="dropdown"
            >
              <option value="">Select Category</option>
              {["Essential", "Premium", "Luxury"].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
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

        {base64Images.length > 0 && (
          <div className="image-container">
            <h2 className="subtitle">Generated Images:</h2>
            <div className="grid-container">
              {base64Images.map((base64, index) => (
                <div className="image-wrapper"> 
                <img
                  key={index}
                  src={base64}
                  alt="Generated Room"
                  className="generated-image"
                />
                <i onClick={() => downloadImage(base64, index + 1)}  className="fa-solid fa-arrow-down download-icon"></i>
              </div>
                
              ))}
            </div>
          </div>
        )}
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
