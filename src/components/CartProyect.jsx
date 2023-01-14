import React from "react";
import Gitgub from "../assets/github.svg"

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
        <h3 className="z-10 text-white text-base xl:text-lg">
          {title}
        </h3>
        <p className="z-10 text-slate-200">
            {text}
        </p>
       
        <div    
          id={img}
          className="z-0 absolute inset-0 opacity-20 bg-center bg-[size:150%] group-hover:bg-[size:200%] transition"
        ></div>
        </a>
        <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        id={top}
        className="z-50 fixed text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-1 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
      >
        <img src={Gitgub} alt="logo github" />
      </a>
    </article>
  );
};

export default CartProyect;
