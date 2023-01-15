import css from "../assets/tool-webs/css-3.svg";
import git from "../assets/tool-webs/git-icon.svg";
import html from "../assets/tool-webs/html-1.svg";
import js from "../assets/tool-webs/javascript.svg";
import mysql from "../assets/tool-webs/mysql.svg";
import react from "../assets/tool-webs/react.svg";
import tlw from "../assets/tool-webs/tailwindcss-icon.svg";

const Burbujas = () => {
  return (
    <div className="burbujas">
      <img className="burbuja" src={git} />
      <img className="burbuja" src={react} />
      <img className="burbuja" src={html} />
      <img className="burbuja" src={js} />
      <img className="burbuja" src={mysql} />
      <img className="burbuja" src={css} />
      <img className="burbuja" src={tlw} />
    </div>
  );
};

export default Burbujas;
