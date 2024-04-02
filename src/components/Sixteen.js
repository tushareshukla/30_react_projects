import React from "react";

export default function Sixteen() {
  const [color, setColor] = React.useState("#000000");
  const handleColotChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <input type="color" onChange={handleColotChange} />
      <br />
      <br />

      <br />

      <br />

      <br />

    
  <div
          style={{display:"flex", gap:"10px"}}>
  <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
 
    </div>
  </div>
  );
}
