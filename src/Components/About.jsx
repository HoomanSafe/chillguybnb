import React from "react";
import Jesus1 from "../assets/logo.png";
import Jesus from "../assets/logo.png";

const About = () => {
  return (
    <section className="py-[50px] w-full">
      <div className="container grid lg:grid-ols-2 justify-between items-center gap-10">
        <article>
          <h1 className="md:text-6xl text-6xl font-bold text-center capitalize">
            about
          </h1>{" "}
          {/* <img src={Jesus} alt="" className="md:hidden" /> */}
          <div className="grid grid-cols-2  gap-4 mt-14 font-mono">
            <p className="text-xs md:text-xl">
              As Elon Musk said “There should be a thing called “RaptorRaid”,
              everyone needs to help a friend out. Best way to do that is to
              spread awareness.”
            </p>

            <p className="text-xs md:text-xl">
              Since the birth of DeFi, raiding has been an effective form of
              marketing. RaptorRaid has developed a working system that allows
              users to share their projects and gain additional engagement
              immediately upon posting!
            </p>
            <p className="text-xs md:text-xl">
              The extra eyes equals out to extra buys! It’s that simple.
              RaptorRaid is using the most up-to-date technology there is for
              sharing, posting, gaining momentum, and grabbing attention.
            </p>
            <p className="text-xs md:text-xl">
              Your idea is just one click away!
            </p>
          </div>
        </article>
        <img src={Jesus1} alt="" className="w-7/12 rounded-2xl md:w-[20rem] mx-auto" />
      </div>
    </section>
  );
};

export default About;
