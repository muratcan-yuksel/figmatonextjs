import React from "react";

const Form = () => {
  return (
    <div className="  h-full   p-10 lg:px-28 lg:py-32 ">
      <div className="bg-[#FFFFFF] drop-shadow-lg  h-full w-full p-10">
        <input
          type="text"
          placeholder="Your Name "
          className=" border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5"
        />{" "}
        <input
          type="text"
          placeholder="Your Email "
          className=" border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5"
        />{" "}
        <input
          type="text"
          placeholder="Your Phone "
          className=" border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
          className=" border border-[#F0F0F0] w-full  rounded-lg p-5 mb-5"
        ></textarea>
        <button className="bg-[#3056D3] w-full h-[50px]  rounded-lg p-5 mb-5 flex justify-center items-center">
          <p className="text-white leading-5">Send Message</p>
        </button>
      </div>
    </div>
  );
};

export default Form;
