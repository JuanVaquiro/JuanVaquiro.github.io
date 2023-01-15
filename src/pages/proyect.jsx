import CartProyect from "../components/CartProyect";
import ControlLeftSwitch from "../components/ControlLeftSwitch";
import ControlRihgtSwicth from "../components/ControlRihgtSwicth";

const Proyect = () => {
  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row items-center justify-center p-2 mt-5">
        <ControlLeftSwitch />
        <div className="screen-conter rounded-md border-double border-8 border-gray-500">
          <article className="my-7 px-6">
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <CartProyect
                title={"GifExpertApp"}
                url={"https://gifapp-react-vite.netlify.app/"}
                repo={"https://github.com/JuanVaquiro/React-Vite-Learning"}
                img={"GifApp"}
                text={"buscador de gifs"}
                top={"top1"}
              />
              <CartProyect
                title={"CiclaMundo"}
                url={"https://sena-project.vercel.app/"}
                repo={"https://github.com/JuanVaquiro/SENA-PROJECT"}
                img={"CiclaMundo"}
                text={"app web de inventario"}
                top={"top1"}
              />
              <CartProyect
                title={"ColombiaTKD"}
                url={"https://piramides.comunisoft.com/"}
                repo={"https://github.com/JuanVaquiro/client_react_proyect"}
                img={"ColombiaTKD"}
                text={"gestion torneos de taekwondo "}
                top={"top1"}
              />
              <CartProyect
                title={"SkyMotion"}
                url={"https://github.com/SkyMotion-MisionTic-2022"}
                repo={"https://github.com/SkyMotion-MisionTic-2022"}
                img={"SkyMotion"}
                text={"gestion de proyectos"}
                top={"top2"}
              />
              <CartProyect img={"BoxMario"} top={"top3"} />
              <CartProyect img={"BoxMario"} top={"top3"} />
              <CartProyect img={"BoxMario"} top={"top3"} />
              <CartProyect img={"BoxMario"} top={"top3"} />
              <CartProyect img={"BoxMario"} top={"top3"} />
            </section>
          </article>
        </div>
        <ControlRihgtSwicth />
      </div>
    </section>
  );
};

export default Proyect;
