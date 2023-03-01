import React from "react";
import Contact from "@/components/Contact";
import Form from "@/components/Form";

const index = () => {
  return (
    <div className="flex  flex-col md:flex-row bg-[#FFFFFF]">
      <div className="w-full ">
        <Contact />
      </div>
      <div className="w-full ">
        <Form />
      </div>
    </div>
  );
};

export default index;
