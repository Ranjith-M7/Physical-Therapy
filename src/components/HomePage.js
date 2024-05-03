import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WeOffer from "./WeOffer";
import ChooseUs from "./ChooseUs";
import SpecialOffers from "./SpecialOffers";
import Customers from "./Customers";
import SectionSix from "./SectionSix";
import Footer from "./Footer";

// import Footer from "./components/Footer";
// import SectionSix from "./components/SectionSix";
// import About from "./components/About";

// import WeOffer from "./components/WeOffer";
// import SpecialOffers from "./components/SpecialOffers";
// import Customers from "./components/Customers";
// import ChooseUs from "./components/ChooseUs";
// import OurLocation from "./components/OurLocation";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WeOffer />
      <ChooseUs />
      <SpecialOffers />
      <Customers />
      <SectionSix />
      <Footer />
    </>
  );
}

export default HomePage;
