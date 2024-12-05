import React from "react";

const Token = () => {
  return (
    <section className="py-[100px] w-full ">
      <div className="container flex justify-center items-center flex-col text-center">
        <h1 className="md:text-6xl text-6xl font-bold">tokenomics</h1>

        <div className="w-full flex justify-center gap-x-20 mt-14 flex-col items-center gap-6 md:flex-row">
          <article className="flex flex-col items-center gap-4">
            <h1 className="text-3xl">200,000,000,000,000,000</h1>
            <p className="text-orange-500 capitalize text-2xl">total supply</p>
          </article>
          <article className="flex flex-col items-center gap-4">
            <h1 className="text-3xl">5%</h1>
            <p className="text-orange-500 capitalize text-2xl">tax</p>
          </article>
          <article className="flex flex-col items-center gap-4">
            <h1 className="text-3xl">100%</h1>
            <p className="text-orange-500 capitalize text-2xl">max wallet</p>
          </article>
          
        </div>
      </div>
    </section>
  );
};

export default Token;
