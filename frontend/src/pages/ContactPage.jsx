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
            <p>
              Our story began with a simple idea: to make cooking and enjoying
              meals more convenient and enjoyable. We understand that in today's
              fast-paced world, finding the time and inspiration to prepare
              homemade meals can be challenging. That's why we set out to create
              a meal app that caters to all your culinary needs.
            </p>
            <h1>Our Vision</h1>
            <p>
              At Culinary App, we envision a world where cooking is a source of
              joy, not a chore. We believe that everyone can be a culinary
              artist and that the act of sharing meals is a profound way to
              connect with others. Our vision is to empower you to discover new
              recipes, plan your meals effortlessly, and create memorable dining
              experiences for yourself and your loved ones.
            </p>
            <h1>What We Offer</h1>
            <ol>
              <li>
                Recipe Inspiration: Our app is your gateway to a world of
                mouthwatering recipes, curated to suit every taste and dietary
                preference. From quick weekday dinners to special occasion
                feasts, we've got you covered.
              </li>
              <li>
                Meal Planning: Say goodbye to the stress of meal planning. Our
                app allows you to create personalized meal plans and shopping
                lists, ensuring you have everything you need to whip up a
                delicious meal.
              </li>
              <li>
                Cooking Tips & Techniques: Whether you're a seasoned chef or a
                beginner in the kitchen, we provide valuable cooking tips,
                step-by-step instructions, and video tutorials to help you
                master your culinary skills.
              </li>
              <li>
                Community & Sharing: Join our vibrant community of food
                enthusiasts. Share your own creations, exchange tips and tricks,
                and connect with fellow foodies from around the globe.
              </li>
            </ol>
            <h1>Why Choose Us?</h1>
            <ol>
              <li>
                User-Focused: We put our users at the center of everything we
                do. Your feedback shapes our app's development, ensuring it
                meets your evolving needs.
              </li>
              <li>
                Reliable: Count on us to provide accurate and trustworthy
                recipes and meal planning tools. We strive for excellence in
                every aspect of our service.
              </li>
              <li>
                Passionate Team: Our team is made up of food lovers, chefs,
                nutritionists, and tech enthusiasts who are dedicated to making
                your culinary journey exceptional.
              </li>
            </ol>
            <h1>Join Us on this Culinary Adventure!</h1>
            <p>
              Thank you for choosing Culinary App as your culinary partner.
              Whether you're a seasoned chef or just starting your culinary
              adventure, we're here to help you every step of the way. Together,
              let's explore the world of flavors, create memorable meals, and
              savor the joy of food. Happy cooking! Culinary App Team
            </p>
          </div>
        </div>
      </section>
      <FooterLayout />
    </>
  );
}
