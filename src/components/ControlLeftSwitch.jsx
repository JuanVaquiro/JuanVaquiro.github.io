import { Link } from "react-router-dom";
import Minus from "../assets/minus-circle.svg";
import joystick from "../assets/joystick-direction.svg";

const ControlLeftSwitch = () => {
  return (
    <div className="control-l w-48 border-sky-600 bg-sky-500">
      <div className="p-4">
        <img
          className="w-14 p-1 mt-7 ml-24"
          src={Minus}
          alt="logo-minus-circle"
        />
        <ul className="flex flex-col gap-2 m-8 text-center text-slate-900">
          <Link to="/">
            <li className="underline underline-offset-4">Inicio</li>
          </Link>
          <Link to="/experiencia">
            <li className="underline underline-offset-4">Experiencia</li>
          </Link>
          <Link to="/proyecto">
            <li className="underline underline-offset-4">Proyecto</li>
          </Link>
          <Link to="/contacto">
            <li className="underline underline-offset-4">Contacto</li>
          </Link>
        </ul>
      </div>
      <img src={joystick} alt="" />
    </div>
  );
};

export default ControlLeftSwitch;
