import React from "react";
import Jesus from "../assets/jesus3.png";

const Map = () => {
  return (
    <section className="py-[50px] bg-black w-full">
      <div className="container flex justify-center items-center flex-col">
        <img src={Jesus} alt="" className="md:max-w-[20rem]" />
        <h1 className="md:text-6xl mt-10 text-6xl font-bold">
          <span className="text-orange-500">road</span> map
        </h1>

        <div className="w-full bg-red-40 flex justify-between items-center mt-14 flex-wrap gap-10">
          <article className="min-h-[300px] px-5 w-full md:w-[300px] bg-red-900/50 relative rounded-lg ring-1 ring-red-500 flex justify-center items-center">
            <div className=" w-max bg-white text-orange-500 capitalize h-max px-4 py-2 text-2xl rounded-tl-xl absolute top-0 left-0 ">
              phase 1
            </div>
            <ul className="flex flex-col w-full list-disc font-mono list-inside">
              <li className="">Website Launch</li>
              <li className="">Launch</li>
              <li className="">Dextools Update</li>
              <li className="">Coingecko + CMC Listings</li>
              <li>1,000 Believers</li>
            </ul>
          </article>
          <article className="min-h-[300px] px-5 w-full md:w-[300px] bg-red-900/50 relative rounded-lg ring-1 ring-red-500 flex justify-center items-center">
            <div className=" w-max bg-white text-orange-500 capitalize h-max px-4 py-2 text-2xl rounded-tl-xl absolute top-0 left-0 ">
              phase 2
            </div>
            <ul className="flex flex-col w-full list-disc font-mono list-inside">
              <li className="">Get Holy Raptor Gang trending on Twitter</li>
              <li className="">Marketing Campaign</li>
              <li className="">Initial Cex Listings</li>
              <li className="">Community Growth </li>
            </ul>
          </article>{" "}
          <article className="min-h-[300px] px-5 w-full md:w-[300px] bg-red-900/50 relative rounded-lg ring-1 ring-red-500 flex justify-center items-center">
            <div className=" w-max bg-white text-orange-500 capitalize h-max px-4 py-2 text-2xl rounded-tl-xl absolute top-0 left-0 ">
              phase 3
            </div>
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
