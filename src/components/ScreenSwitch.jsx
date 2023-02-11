import BtnMedia from "./ButtonsSocialMedia";
import video from "../assets/bg-video.mp4";

function ScreenConte() {
  return (
    <div className="screen-conter rounded-md border-double border-8 border-gray-500">
      <video className="p-4" src={video} autoPlay loop muted />
      <article className="content p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2">
            <BtnMedia linkedin={'Linkedin'} twitter={"Twitter"} instagram={"instagram"} github={"Github"} />
          </div>
          <h1 className="text-white text-center font-black text-6xl p-2">
            Juan David Vaquiro Diaz
          </h1>
          <span className="text-sky-600 font-title font-black text-4xl p-2">
            Front-end Developer Web Junior
          </span>
          <p className="text-lg text-center p-2 max-w-prose">
            Un año de experiencia en elaboración de proyectos educativos de
            aplicaciones Web con énfasis en investigación, análisis y desarrollo
            de software. Tecnólogo en Gestión Informática. Me gusta compartir y solventar mis
            habilidades de programador web con conocimientos en computación y
            soluciones Web.
          </p>
        </div>
      </article>
    </div>
  );
}

export default ScreenConte;
