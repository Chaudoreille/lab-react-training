import React from 'react';
import "./Greetings.css";

const Greetings = ({ lang, children }) => {
  const greeting = {
    fr: "Bonjour",
    de: "Halo",
    en: "Hello",
    es: "Ola"
  };
  return (
    <div className='Greetings'>
      <p>
        <span>{greeting[lang]} </span>
        <span>{children}</span>
      </p>
    </div >
  );
};

export default Greetings;