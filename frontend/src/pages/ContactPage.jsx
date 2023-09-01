import React from "react";
import FooterLayout from "../layouts/FooterLayout";

export default function ContactPage() {
  return (
    <>
      <section id="contactPage">
        <h1>About Us</h1>
        <div className="contents">
          <div className="content-img">
              <img src="https://picsum.photos/600/400" alt="lorem-ipsum" />
          </div>
          <div className="content-info">
              <h1>Our Story</h1>
              <p>Our story began with a simple idea: to make cooking and enjoying meals more convenient and enjoyable. We understand that in today's fast-paced world, finding the time and inspiration to prepare homemade meals can be challenging. That's why we set out to create a meal app that caters to all your culinary needs.</p>
              <h1>Our Vision</h1>
              <p>At [Meal App Name], we envision a world where cooking is a source of joy, not a chore. We believe that everyone can be a culinary artist and that the act of sharing meals is a profound way to connect with others. Our vision is to empower you to discover new recipes, plan your meals effortlessly, and create memorable dining experiences for yourself and your loved ones.</p>
          </div>
        </div>
      </section>
      <FooterLayout />
    </>
  );
}
