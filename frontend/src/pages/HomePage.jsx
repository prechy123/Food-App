import FooterLayout from "../layouts/FooterLayout";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <div className="l-side">
          <h1>
            <span>Welcome to </span>Meal App
          </h1>
          <p>
            Experience a culinary journey like no other with the Meal App,
            offering an exclusive collection of top-notch recipes sourced from
            diverse corners of the world. Elevate your cooking endeavors by
            accessing a wide array of high-quality recipes, thoughtfully curated
            to represent global flavors and gastronomic delights.
          </p>
        </div>
        <div className="r-side">
          <div className="grid-container">
            <div className="grid-item-1"></div>
            <div className="grid-item-2"></div>
            <div className="grid-item-3"></div>
            <div className="grid-item-4"></div>
            <div className="grid-item-5"></div>
            <div className="grid-item-6"></div>
            <div className="grid-item-7"></div>
            <div className="grid-item-7"></div>
          </div>
        </div>
      </section>
      <FooterLayout />
    </>
  );
}
