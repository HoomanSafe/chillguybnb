import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="pt-[100px] lg:min-h-screen flex justify-center pb-[50px] md:pb-[150px] w-full hero">
      <div className="container grid gap-10 lg:grid-col-2 justify-center text-center items-center">
        <article className="flex flex-col gap-4 justify-center items-center">
          <h1 className="md:text-8xl text-7xl font-bold capitalize">
            raptor raid
          </h1>
          <p className="text-xl font-mono max-w-[700px]">
            Experience the power of RaptorRaid, the game-changing platform for
            project marketing in the world of decentralized finance. Share your
            ideas and watch them soar with immediate engagement and increased
            buys.
          </p>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a
              href=""
              className="px-6 py-2 bg-transparent  w-max text-2xl capitalize bg-white text-primary rounded-xl"
            >
              buy raid raptor
            </a>
            <a
              href=""
              className="px-6 py-2   w-max text-2xl capitalize bg-black text-white rounded-xl"
            >
              join community
            </a>
          </div>
        </article>
        {/* <img src={Logo} alt="" className="rounded-full" /> */}
      </div>
    </section>
  );
};

export default Hero;
