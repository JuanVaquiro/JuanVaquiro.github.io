import { useState } from "react";
import { Link } from "react-router-dom";
import Minus from "../assets/controll/minus-circle.svg";
import joystick from "../assets/controll/joystick-direction.svg";
import mrIcon from "../assets/icon-mr/mario-icon.png";
import lgIcon from "../assets/icon-mr/leugi-icon.png";
import tdIcon from "../assets/icon-mr/toad-icon.png";
import stIcon from "../assets/icon-mr/star-icon.png";
import JoystickControll from "./Joystick";

const ControlLeftSwitch = () => {
  const [color, setcolor] = useState("sky-L");

  const COLOR_HEX = [
    "red-L",
    "sky-L",
    "lime-L",
    "yellow-L",
    "purple-L",
    "slate-L",
  ];

  const handleClick = () => {
    const aleatorio = COLOR_HEX[Math.floor(Math.random() * COLOR_HEX.length)];
    setcolor(aleatorio);
  };

  return (
    <section id='sky-L'>
      <div className="flex flex-col items-center justify-center">
        <img
          onClick={handleClick}
          className="w-14 p-1 mt-7 ml-24 cursor-pointer hover:p-2"
          src={Minus}
          alt="logo-minus-circle"
        />
        <JoystickControll />
        <div className="px-4">
          <ul className="flex flex-col gap-2 m-4 text-center text-slate-900">
            <Link to="/">
              <div className="flex gap-2">
                <img className="w-1/4" src={mrIcon} alt="icon-luigi" />
                <li className="text-lg hover:underline hover:underline-offset-8">
                  Inicio
                </li>
              </div>
            </Link>
            <Link to="/experiencia">
              <div className="flex gap-2">
                <img className="w-1/4" src={lgIcon} alt="icon-luigi" />
                <li className="text-lg hover:underline hover:underline-offset-8">
                  Experiencia
                </li>
              </div>
            </Link>
            <Link to="/proyecto">
              <div className="flex gap-2">
                <img className="w-1/4" src={tdIcon} alt="icon-luigi" />
                <li className="text-lg hover:underline hover:underline-offset-8">
                  Proyecto
                </li>
              </div>
            </Link>
            <Link to="/juego">
              <div className="flex gap-2">
                <img className="w-1/4" src={stIcon} alt="icon-luigi" />
                <li className="text-lg hover:underline hover:underline-offset-8">
                  Juegos
                </li>
              </div>
            </Link>
            <Link to="/contacto">
              <div className="flex gap-2">
                <img className="w-1/4" src={mrIcon} alt="icon-luigi" />
                <li className="text-lg hover:underline hover:underline-offset-8">
                  Contacto
                </li>
              </div>
            </Link>
          </ul>
        </div>
        <img className="-mt-3" src={joystick} alt="control-de-direccion" />
      </div>
    </section>
  );
};

export default ControlLeftSwitch;
