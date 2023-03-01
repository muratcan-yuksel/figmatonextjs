import React from "react";
import Collection from "./Collection";
import house from "@/assets/house.png";
import email from "@/assets/email.png";
import phone from "@/assets/phone.png";

const Contact = () => {
  const data = [
    {
      title: "Our Location",
      para: "99 S.t Jomblo Park Pekanbaru 28292. Indonesia",
      icon: house,
    },
    { title: "Phone Number", para: "(+62)81 414 257 9980", icon: phone },
    { title: "Email Address", para: "info@yourdomain.com", icon: email },
  ];
  return (
    <div className=" h-full   p-10 lg:px-28 lg:py-32    ">
      <h5 className="text-[#3056D3] font-semibold text-[16px] leading-5 mb-2">
        Contact Us
      </h5>
      <h1 className="text-[#212B36] font-bold text-[40px] lg:text-[35px] leading-10 mb-7">
        Get In Touch With Us
      </h1>
      <p className="text-[#637381] text-[16px] leading-7">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi numquam
        sapiente quod culpa qui minus itaque nesciunt cupiditate saepe
        praesentium? Exercitationem natus optio debitis quos recusandae
        assumenda? Aperiam, accusantium id.
      </p>
      {data.map((item, index) => (
        <Collection
          key={index}
          title={item.title}
          para={item.para}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Contact;
