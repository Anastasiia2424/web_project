import React from "react";
import "./AboutUsBanner.css";

const AboutUsBanner = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>ABOUT US</h2>
        <p>
          At Ponchyk & Co., we specialize in creating beautiful and original
          donuts, including classic flavors, creative custom designs, and
          mini-donuts for any occasion—birthdays, corporate events, weddings,
          and more.
        </p>
        <button className="read-more">READ MORE</button>
      </div>
      <div className="about-us-image">
        <img
          src="https://images.unsplash.com/photo-1505236917042-e70d2d365d6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /* Replace with the correct image path */
          alt="Ponchyk & Co. team in their shop"
        />
      </div>
    </section>
  );
};

export default AboutUsBanner;
