import React from "react";
import Jesus1 from "../assets/chillguylogo.png";
import Jesus from "../assets/chillguylogo.png";

const About = () => {
  return (
    <section className="py-[50px] w-full">
      <div className="container grid lg:grid-ols-2 justify-between items-center gap-10">
        <article>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="md:text-6x animate-bounce text-6xl font-bold text text-center capitalize"
          >
            about
          </h1>{" "}
          {/* <img src={Jesus} alt="" className="md:hidden" /> */}
          <div className="grid grid-cols-2  gap-4 mt-14 font-mono">
            <p className="text-xs md:text-xl" data-aos="fade-right">
              BNB ChillGuy is a Binance token that reflects the relaxed and fun-loving spirit of Binance Holders to achieve Financial Fredoom. 
            </p>

            <p
              className="text-xs md:text-xl"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              BNB ChillGuy is here to bring the same level of calm and vibrancy to the blockchain. Whether you're a crypto veteran or a newcomer,            </p>
            <p
              className="text-xs md:text-xl"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              BNB ChillGuy is your ticket to fun, community, and positivity—nothing extra needed
 
            </p>
            <p
              className="text-xs md:text-xl"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Your idea is just one click away!
            </p>
          </div>
        </article>
        <img
          data-aos="flip-right"
          data-aos-duration="900"
          src={Jesus1}
          alt=""
          className="w-7/12 rounded-2xl md:w-[20rem] mx-auto"
        />
      </div>
    </section>
  );
};

export default About;
