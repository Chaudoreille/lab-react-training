import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture } = { ...props };
  const dateOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  return (
    <div className="IdCard">
      <img src={picture} alt="" />
      <div className="info">
        <div>
          <p className="label">First Name</p>
          <p>{firstName}</p>
        </div>
        <div>
          <p className="label">Last Name</p>
          <p>{lastName}</p>
        </div>
        <div>
          <p className="label">Gender</p>
          <p>{gender}</p>
        </div>
        <div>
          <p className="label">Height</p>
          <p>{height}</p>
        </div>
        <div>
          <p className="label">birth</p>
          <p>{birth.toLocaleDateString('en-US', dateOptions)}</p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
