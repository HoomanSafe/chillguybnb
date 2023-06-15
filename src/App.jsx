import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import { gsap } from "gsap";

const App = () => {
  useEffect(() => {
    // gsap.from(".header", {
    //   opacity: 0.5,
    // });
  }, []);
  return (
    <div className="min-h-screen bg-primary w-full font-canterBurry text-white">
      <Header />
      <Hero />
      <Token />
      <About />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
