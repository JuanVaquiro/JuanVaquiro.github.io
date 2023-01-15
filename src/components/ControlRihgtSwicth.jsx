import { useState } from "react";
import Plus from "../assets/controll/plus-circle.svg";
import icon from "../assets/icon.svg";
import btnsCr from "../assets/controll/btns-cR.png";

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
    <section className="control-r w-48 border-red-600 bg-red-500">
      <div className="flex flex-col items-center justify-center">
        <img
          onClick={handleClick}
          className="plus w-14 p-1 mt-7 mr-24 cursor-pointer"
          src={Plus}
          alt="logo-minus-circle"
        />
        <img className="p-9" src={btnsCr} alt="botones-de-control" />
        <img className="p-8" src={icon} alt="logo" />
        <a
          href="https://drive.google.com/file/d/1d4J8t_tNIJigfqg1MB-zNq3tT1WFC3XR/view?usp=sharing/"
          target="_blank"
          className="text-lg text-slate-900 hover:underline hover:underline-offset-8"
          >
          Ver Curriculum
        </a>
      </div>
    </section>
  );
}

export default ControlRihgtSwicth;
