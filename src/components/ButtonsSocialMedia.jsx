import { Fragment } from "react";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Gitgub from "../assets/github.svg";

const BtnMedia = () => {
  return (
    <Fragment>
      <a
        href="https://www.linkedin.com/in/juan-vaquiro-442585165/"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="flex gap-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        <img src={Linkedin} alt="logo linkedin" />
        Linkedin
      </a>

      <a
        href="https://twitter.com/sofadevJS"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="flex gap-2 text-sky-700 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800"
      >
        <img src={Twitter} alt="logo twitter" />
        Twitter
      </a>

      <a
        href="https://www.instagram.com/david_vaquirox/"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="flex gap-2 text-red-400 hover:text-white border border-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-400 dark:text-red-400 dark:hover:text-white dark:hover:bg-orange-700 dark:focus:ring-orange-900"
      >
        <img src={Instagram} alt="logo instagram" />
        Instagram
      </a>

      <a
        href="https://github.com/JuanVaquiro"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="flex gap-2 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
      >
        <img src={Gitgub} alt="logo github" />
        GitHub
      </a>
    </Fragment>
  );
};

export default BtnMedia;
