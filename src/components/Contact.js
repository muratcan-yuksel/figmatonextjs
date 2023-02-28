import React from "react";
import Collection from "./Collection";

const Contact = () => {
  return (
    <div className="w-1/2 h-screen border px-28 py-32">
      <h5 className="text-[#3056D3] font-semibold text-[16px] leading-5 mb-2">
        Contact Us
      </h5>
      <h1 className="text-[#212B36] font-bold text-[40px] leading-10 mb-7">
        Get In Touch With Us
      </h1>
      <p className="text-[#637381] text-[16px] leading-7">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi numquam
        sapiente quod culpa qui minus itaque nesciunt cupiditate saepe
        praesentium? Exercitationem natus optio debitis quos recusandae
        assumenda? Aperiam, accusantium id.
      </p>
      <Collection />
    </div>
  );
};

export default Contact;
