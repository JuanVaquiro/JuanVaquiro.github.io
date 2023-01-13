import { Link } from "react-router-dom";
import Minus from "../assets/minus-circle.svg";
import joystick from "../assets/joystick-direction.svg";

const ControlLeftSwitch = () => {
  return (
    <section className="control-l w-48 border-sky-600 bg-sky-500">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-14 p-1 mt-7 ml-24"
          src={Minus}
          alt="logo-minus-circle"
        />
        <div className="p-4">
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
