import React from "react";
import "./SpecialityCard.css";

const SpecialityCard = ({ title, imgSrc }) => {
  return (
    <div className="speciality-card">
      <img src={imgSrc} alt={title} className="speciality-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default SpecialityCard;
