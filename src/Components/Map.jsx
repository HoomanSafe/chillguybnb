import React from "react";
import Jesus from "../assets/jesus3.png";

const Map = () => {
  return (
    <section className="py-[50px] bg-white text-primary w-full">
      <div className="container flex justify-center items-center flex-col">
        <h1
          className="md:text-6xl animate-bounce text mt-10 text-6xl font-bold capitalize"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          road map
        </h1>

        <div className="w-full  bg-red-40 flex justify-center items-start mt-14 flex-wrap gap-10">
          <article
            className="min-h-[300px] flex-col px-5 w-full text-start flex md:w-[300px] bg-black text-white relative rounded-lg ring-1 ring-primary justify-center gap-7"
            data-aos="flip-right"
            data-aos-duration="900"
          >
            <h2 className="text-3xl">phase 1</h2>
            <ul className="flex flex-col w-full list-disc font-mono list-inside">
              <li className="">Website Launch</li>
              <li className="">Launch</li>
              <li className="">Dextools Update</li>
              <li className="">Coingecko + CMC Listings</li>
              <li>1,000 Believers</li>
            </ul>
          </article>
          <article
            data-aos="flip-left"
            data-aos-duration="900"
            className="min-h-[300px] flex-col px-5 w-full text-start flex md:w-[300px] bg-white text-black relative rounded-lg ring-1 ring-primary justify-center gap-7"
          >
            <h2 className="text-3xl">phase 2</h2>
            <ul className="flex flex-col w-full list-disc font-mono list-inside">
              <li className="">Get  Raptor Raid trending on Twitter</li>
              <li className="">Marketing Campaign</li>
              <li className="">Initial Cex Listings</li>
              <li className="">Community Growth </li>
            </ul>
          </article>{" "}
          <article
            data-aos="zoom-out"
            data-aos-duration="900"
            className="min-h-[300px] flex-col px-5 w-full text-start flex md:w-[300px] bg-black text-white relative rounded-lg ring-1 ring-primary justify-center gap-7"
          >
            <h2 className="text-3xl">phase 3</h2>
            <ul className="flex flex-col w-full list-disc font-mono list-inside">
              <li className="">5,000 Believers</li>
              <li className="">Cex Listing</li>
            </ul>
          </article>{" "}
        </div>
      </div>
    </section>
  );
};

export default Map;
