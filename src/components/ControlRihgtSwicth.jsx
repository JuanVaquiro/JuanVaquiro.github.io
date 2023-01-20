import { useState } from "react";
import Plus from "../assets/controll/plus-circle.svg";
import icon from "../assets/icon.svg";
import btnsCr from "../assets/controll/btns-cR.png";
import JoystickControll from "./Joystick";

function ControlRihgtSwicth() {
  const [color, setcolor] = useState('red')

  const COLOR_HEX = [
    'red',
    'sky',
    'lime',
    'yellow',
    'purple',
    'slate'
  ];

  const handleClick = () => {
    const aleatorio = COLOR_HEX[Math.floor(Math.random() * COLOR_HEX.length)];
    setcolor(aleatorio)
  };

  return (
    <section id={color}>
      <div className="flex flex-col items-center justify-center">
        <img
          onClick={handleClick}
          className="plus w-14 p-1 mt-7 mr-24 cursor-pointer hover:p-2"
          src={Plus}
          alt="logo-minus-circle"
        />
        <img className="p-9" src={btnsCr} alt="botones-de-control" />

        <a
        href="https://drive.google.com/file/d/1d4J8t_tNIJigfqg1MB-zNq3tT1WFC3XR/view?usp=sharing/"
        target="_blank"
        className="my-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800"
        >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Ver Curriculum
    </span>
        </a>
        <div className="mt-16">
          <JoystickControll />
        </div>
      </div>
    </section>
    
  );
}

export default ControlRihgtSwicth;

