import React from "react";
import { Icon } from "@iconify/react";
import { FaTelegramPlane, FaTwitterSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-3 overflow-hidden w-full b bg-black">
      <nav className="container flex justify-between items-center">
        <a
          href=""
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-4xl md:text-5xl capitalize"
        >
          ChillGuyBNB
        </a>
        <div className="flex items-center gap-2">
          <a
            data-aos="fade-up"
            data-aos-duration="700"
            href="https://t.me/ChillGuyBNB"
            className="text-xl  transition duration-1000"
          >
            <FaTelegramPlane />{" "}
          </a>
          <a
            data-aos="fade-left"
            data-aos-duration="700"
            href="https://twitter.com/ChillGuyBNB"
            className="text-2xl  transition duration-1000"
          >
            <FaTwitterSquare />{" "}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
