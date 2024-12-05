import React from "react";
import Logo from "../assets/chillguylogo.png";

const Hero = () => {
  return (
    <section className="pt-[100px]  flex justify-center pb-[50px] md:pb-[100px] w-full hero">
      <div className="container grid gap-10 lg:grid-col-2 justify-center text-center items-center">
        <article className="flex flex-col gap-4 justify-center items-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="md:text-8xl animate-bounce text-7xl font-bold capitalize text"
          >
            ChillGuyBNB
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="700"
            className="text-xl font-mono max-w-[700px]"
          >
           BNB ChillGuy is a Binance token that reflects
            the relaxed and fun-loving spirit of Binance Holders to achieve Financial Fredoom. 
          </p>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a
              href=""
              className="px-6 py-2 bg-transparent  w-max text-2xl capitalize bg-white text-primary rounded-xl"
            >
              buy $CHILL
            </a>
            <a
              href="https://t.me/ChillGuyBNB"
              className="px-6 py-2   w-max text-2xl capitalize bg-black text-white rounded-xl"
            >
              join community
            </a>
          </div>
        </article>
        <img src={Logo} alt="" className="rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
