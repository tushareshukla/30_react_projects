import React, { useState } from "react";

export default function Eight() {
  const [color, setColor] = useState("red");
  const handleChangeColor = () => {
    color === "red" ? setColor("blue") : setColor("red");
  };
  return (
    <div
      onClick={handleChangeColor}
      style={{
        backgroundColor: color,
        height: "500px",
        width: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        cursor: "pointer",
      }}
    >
      Color change krna hai ? click kro hojayega
    </div>
  );
}
