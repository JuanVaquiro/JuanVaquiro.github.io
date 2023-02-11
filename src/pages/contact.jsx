import React from "react";
import ControlLeftSwitch from "../components/ControlLeftSwitch";
import ControlRihgtSwicth from "../components/ControlRihgtSwicth";
import FormGmail from "../components/formGmail";

const Contact = () => {
  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row items-center justify-center p-2">
        <ControlLeftSwitch />
        <div className="screen-conter rounded-md border-double border-8 border-gray-500">
          <article className="my-7 px-6">
            <FormGmail />
          </article>
        </div>
        <ControlRihgtSwicth />
      </div>
    </section>
  );
};

export default Contact;
