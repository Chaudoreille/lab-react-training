import React from 'react';
import "./Random.css";

const Random = ({ min, max }) => {
  const minValue = min || 0;
  const maxVAlue = max || 1;
  const randomNumber = Math.floor(Math.random() * (maxVAlue - minValue)) + minValue;

  return (
    <div className='Random'>
      <p>
        {`Random value between ${minValue} and ${maxVAlue} => ${randomNumber}`}
      </p>
    </div>
  );
};

export default Random;