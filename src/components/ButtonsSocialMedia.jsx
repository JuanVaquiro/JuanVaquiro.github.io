import { Fragment } from "react";
import Linkedin from "../assets/social-media/linkedin.svg";
import Twitter from "../assets/social-media/twitter.svg";
import Instagram from "../assets/social-media/instagram.svg";
import Gitgub from "../assets/social-media/github.svg";

const BtnMedia = ({linkedin, twitter, instagram, github}) => {

  const className = `flex gap-2 border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:ring-blue-800`

  return (
    <Fragment>
      <a
        href="https://www.linkedin.com/in/juan-vaquiro-442585165/"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="flex gap-2 border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:ring-blue-800"
      >
        <img src={Linkedin} alt="logo-linkedin" />
        {linkedin}
      </a>

      <a
        href="https://twitter.com/sofadevJS"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="flex gap-2 border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-sky-500 text-sky-500 hover:text-white hover:bg-sky-600 focus:ring-sky-800"
      >
        <img src={Twitter} alt="logo-twitter" />
          {twitter}
      </a>

      <a
        href="https://www.instagram.com/david_vaquirox/"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="flex gap-2 border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-400 text-red-400 hover:text-white hover:bg-orange-500 focus:ring-orange-900"
      >
        <img src={Instagram} alt="logo-instagram" />
        {instagram}
      </a>

      <a
        href="https://github.com/JuanVaquiro"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="flex gap-2 border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-purple-400 text-purple-400 hover:text-white hover:bg-purple-500 focus:ring-purple-900"
      >
        <img src={Gitgub} alt="logo-github" />
        {github}
      </a>
    </Fragment>
  );
};

export default BtnMedia;
