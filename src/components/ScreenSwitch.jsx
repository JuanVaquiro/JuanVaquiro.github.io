import icon from "../assets/icon.svg";
import BtnMedia from "./Buttons";

function ScreenConte() {
  return (
    <div className="screen-conter rounded-md border-double border-8 border-gray-500">
      <article className="p-4 flex">
        <div>
        <div className="flex">
          <BtnMedia />
        </div>
          <h1 className="text-white font-title font-black text-4xl">
            Juan David Vaquiro Diaz
          </h1>
          <span className="text-green-700 font-title font-black text-2xl">
            Front-end Web Development Junior
          </span>
          <p className="">
            Un año de experiencia en elaboración de proyectos educativos de
            aplicaciones Web con énfasis en investigación, análisis y desarrollo
            de software. Tecnólogo en Gestión Informática. Tripulante
            Certificado de MisiónTIC2022. Me gusta compartir y solventar mis
            habilidades de programador web con conocimientos en computación y
            soluciones Web.
          </p>
        </div>
        <div>
          <img src={icon} width="" alt="" />
        </div>
      </article>
    </div>
  );
}

export default ScreenConte;
