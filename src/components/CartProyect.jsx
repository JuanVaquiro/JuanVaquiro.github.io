import React from "react";
import Gitgub from "../assets/social-media/github.svg";

const CartProyect = ({ title, img, text, url, repo, top }) => {
  return (
    <article className="overflow-hidden col-span-1 rounded aspect-video bg-el-barrio">
      <a
        className="group transition-all hover:scale-110 flex flex-col gap-x-4 p-4 h-full items-center justify-center relative z-"
        target="_blank"
        href={url}
        title={`ver ${title}`}
        rel="preload"
      >
        <h3 className="z-10 text-white text-base xl:text-lg">{title}</h3>
        <p className="z-10 text-slate-300">{text}</p>

        <div
          id={img}
          className="z-0 absolute inset-0 opacity-30 bg-sky-600 bg-center bg-[size:150%] group-hover:bg-[size:200%] transition"
        ></div>
      </a>
      <a
        href={repo}
        title="repositorio"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        id={top}
        className="z-50 fixed text-sky-700 hover:text-white  border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-bl-2xl rounded-b-2xl  text-sm px-1 py-2.5 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-400 dark:hover:text-white dark:hover:bg-sky-500 dark:focus:ring-sky-900"
      >
        <img src={Gitgub} alt="logo github" />
      </a>
    </article>
  );
};

export default CartProyect;
