import React from 'react';
import "./BoxColor.css";

const BoxColor = ({ r, g, b }) => {
  const red = r > 255 ? 255 : r < 0 ? 0 : r;
  const green = g > 255 ? 255 : g < 0 ? 0 : g;
  const blue = b > 255 ? 255 : b < 0 ? 0 : b;
  const hexa = (nb) => parseInt(nb, 10).toString(16).padStart(2, "0");

  const generatedStyle = {
    backgroundColor: `rgb(${red} ${green} ${blue})`,
    color: (red + green + blue) / 3 < 127 ? "white" : "black",
  };
  const hexacode = hexa(red) + hexa(green) + hexa(blue);

  return (
    <div style={generatedStyle} className='BoxColor'>
      <p>{`rgb(${red},${green},${blue})`}</p>
      <p>#{hexacode}</p>
    </div>
  );
};

export default BoxColor;