import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import { gsap } from "gsap";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-screen bg-primary w-full font-canterBurry text-white">
      <Header />
      <Hero />
      {/* <Token /> */}
      <About />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
