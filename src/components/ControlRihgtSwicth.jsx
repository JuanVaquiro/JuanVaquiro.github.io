import { useState } from "react";
import Plus from "../assets/plus-circle.svg";
import icon from "../assets/icon.svg"
import btnsCr from "../assets/btns-cR.png"


function ControlRihgtSwicth() {
  const CONTROL = document.querySelector("plus");

  const COLOR_HEX = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  function randomColorHex() {
    return Math.floor(Math.random() * COLOR_HEX.length);
  }

  const handleClick = () => {};

  return (
    <div className="control-r w-48 border-red-600 bg-red-500">
      <div>
        <img
          onClick={handleClick}
          className="plus w-14 p-1 mt-7 ml-4 cursor-pointer"
          src={Plus}
          alt="logo-minus-circle"
        />
  
      <img className="p-9" src={btnsCr} alt="" />
      <img className="p-8" src={icon} alt="" />
      </div>
    </div>
  );
}

export default ControlRihgtSwicth;
