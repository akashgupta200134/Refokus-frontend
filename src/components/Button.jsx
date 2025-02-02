import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className="bg-zinc-100 min-w-40 h-10  select-none flex gap-5 rounded-full text-black py-2 px-4 items-center justify-between space-x-2 cursor-pointer">
      <span className=" text-sm  font-medium">Get Started</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
