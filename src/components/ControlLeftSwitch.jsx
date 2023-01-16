import { useState } from "react";
import { Link } from "react-router-dom";
import Minus from "../assets/controll/minus-circle.svg";
import joystick from "../assets/controll/joystick-direction.svg";

const ControlLeftSwitch = () => {
  const [color, setcolor] = useState('sky')

  const COLOR_HEX = [
    'red-L',
    'sky-L',
    'lime-L',
    'yellow-L',
    'purple-L',
    'slate-L'
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
          className="w-14 p-1 mt-7 ml-24 cursor-pointer"
          src={Minus}
          alt="logo-minus-circle"
        />
        <div className="px-4">
          <ul className="flex flex-col gap-2 m-8 text-center text-slate-900">
            <Link to="/">
              <li className="text-lg hover:underline hover:underline-offset-8">
                Inicio
              </li>
            </Link>
            <Link to="/experiencia">
              <li className="text-lg hover:underline hover:underline-offset-8">
                Experiencia
              </li>
            </Link>
            <Link to="/proyecto">
              <li className="text-lg hover:underline hover:underline-offset-8">
                Proyecto
              </li>
            </Link>
            <Link to="/contacto">
              <li className="text-lg hover:underline hover:underline-offset-8">
                Contacto
              </li>
            </Link>
          </ul>
        </div>
        <img src={joystick} alt="" />
      </div>
    </section>
  );
};

export default ControlLeftSwitch;
