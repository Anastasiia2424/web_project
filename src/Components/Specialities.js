import React from "react";
import SpecialityCard from "./SpecialityCard";
import "./Specialities.css";

const specialities = [
  { title: "Classic Donuts", imgSrc: "https://cdn.pixabay.com/photo/2017/01/31/14/18/dessert-2024487_640.png" },
  { title: "Custom Donuts", imgSrc: "https://cdn.pixabay.com/photo/2017/01/31/14/18/dessert-2024487_640.png" },
  { title: "Mini Donuts", imgSrc: "https://cdn.pixabay.com/photo/2017/01/31/14/18/dessert-2024487_640.png" },
  { title: "Donut Boxes", imgSrc: "https://cdn.pixabay.com/photo/2017/01/31/14/18/dessert-2024487_640.png" },
];

const Specialities = () => {
  return (
    <section className="specialities">
      <h2>OUR SPECIALITIES</h2>
      <div className="specialities-grid">
        {specialities.map((speciality) => (
          <SpecialityCard
            key={speciality.title}
            title={speciality.title}
            imgSrc={speciality.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Specialities;
