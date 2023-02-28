import Image from "next/image";
import React from "react";

const Collection = ({ icon, title, para }) => {
  return (
    <div className="flex flex-row my-12">
      <div className="bg-[#3056d30d] w-20 h-20  mr-7 flex justify-center items-center">
        <Image width="24" height="24" src={icon} alt="" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-[20px] leading-5 mb-2">{title}</h2>
        <p className="text-[#637381] text-[16px] leading-7 w-56">{para}</p>
      </div>
    </div>
  );
};

export default Collection;
