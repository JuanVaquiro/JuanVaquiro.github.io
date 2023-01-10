import ControlLeftSwitch from "../components/ControlLeftSwitch";
import ControlRihgtSwicth from "../components/ControlRihgtSwicth";
import icon from "../assets/icon.svg";

const Proyect = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-row items-center justify-center p-2 mt-5">
        <ControlLeftSwitch />
        <div className="screen-conter rounded-md border-double border-8 border-gray-500">
          <article className="p-4 flex">
            <div>
              <div className="flex"></div>
              <span className="text-green-700 font-title font-black text-2xl">
                PROYECTO
              </span>
            </div>
          </article>
        </div>
        <ControlRihgtSwicth />
      </div>
    </section>
  );
};

export default Proyect;
