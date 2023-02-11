import { Fragment } from "react";
import BtnMedia from "./ButtonsSocialMedia";
import prng from "../assets/prg-nintendo.png";

function FormGmail() {
  return (
    <Fragment>
      <form>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombres
          </label>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-400"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows="4"
            required
            className="block p-2.5 w-full text-sm rounded-lg borderfocus:border-blue-800 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="Escribir comentario..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:border-blue-800"
        >
          Enviar
        </button>
      </form>

      <div className="flex justify-end">
        <div className="flex flex-col items-end">
          <h3 className="mr-2 p-2">Sofadev JS</h3>
          <span className="mr-2 p-2">juanvaquiro99@gmail.com</span>
          <span className="mr-2 p-2">(+57) 3007214107</span>
        </div>
        <div className="">
          <BtnMedia />
        </div>
      </div>
    </Fragment>
  );
}

export default FormGmail;
