import React from "react";
import { Icon } from "@iconify/react";
import { FaTelegramPlane, FaTwitterSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-3 w-full ">
      <nav className="container flex justify-between items-center">
        <a href="" className="text-4xl md:text-5xl capitalize">
          raptor raid
        </a>
        <div className="flex items-center gap-2">
          <a href="" className="text-xl  transition duration-1000">
            <FaTelegramPlane />{" "}
          </a>
          <a href="" className="text-2xl  transition duration-1000">
            <FaTwitterSquare />{" "}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
