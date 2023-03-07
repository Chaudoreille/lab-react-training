import React from 'react';
import "./CreditCard.css";
import VisaImage from '../../assets/images/visa.png';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const obfuscatedNumber = number.toString().slice(0, -4).replace(/.{4}/g, "•••• ") + number.toString().slice(-4);
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };
  const imageUrls = {
    "Master Card": "master-card.svg",
    "Visa": VisaImage
  };

  return (
    <div className='CreditCard' style={cardStyle}>
      <div className='logo-wrapper'>
        <img src={imageUrls[type]} alt="card logo" />
      </div>
      <p className='card-number'>{obfuscatedNumber}</p>
      <div className='card-details'>
        <p>
          <span className='expiration'>Expires {expirationMonth}/{expirationYear}</span>
          <span className='bank-name'>{bank}</span>
        </p>
        <p className='owner'>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;