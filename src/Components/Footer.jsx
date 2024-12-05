import React from "react";
import { Icon } from "@iconify/react";
import { FaTelegramPlane, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-[20px] w-full bg-white text-primary">
      <div className="container flex justify-center flex-col items-center">
        <div className="flex items-center gap-2">
          <a
            href="https://t.me/ChillGuyBNB"
            className="text-3xl transition duration-1000"
          >
            <FaTelegramPlane />{" "}
          </a>
          <a
            href="https://twitter.com/ChillGuyBNB"
            className="text-3xl  transition duration-1000"
          >
            <FaTwitterSquare />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
