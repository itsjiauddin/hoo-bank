import logo from "../assets/images/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState("hidden");

  return (
    <div className="py-4 flex justify-between items-center">
      <img className="w-40" src={logo} alt="" />
      <img
        className={"w-14 cursor-pointer md:hidden"}
        onClick={() => {
          menu === "hidden" ? setMenu("absolute") : setMenu("hidden");
        }}
        src={hamburger}
        alt=""
      />
      <div
        className={`${menu} inset-x-0 top-20 py-6 mx-12 bg-customDark-700 md:flex md:bg-inherit md:space-x-20 md:py-0 md:mx-0`}
      >
        <a href="#">
          <p className="py-3">Home</p>
        </a>
        <a href="#">
          <p className="py-3">About Us</p>
        </a>
        <a href="#">
          <p className="py-3">Features</p>
        </a>
        <a href="#">
          <p className="py-3">Solution</p>
        </a>
      </div>
    </div>
  );
}
