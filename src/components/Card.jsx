import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para , hover}) => {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl ${width}  min-h-[30rem] flex flex-col justify-between hover:${hover}`}>
      <div className=" w-full">
        <div className=" w-full flex items-center justify-between">
          <h3> one Heading</h3>
          <IoIosArrowRoundForward />
        </div>

        <h1 className=" font-medium mt-5 text-3xl ">Whatever Heading</h1>
      </div>

      <div className="downwala w-full  ">
        {start && (
          <>
            <h1 className=" text-6xl  font-semibold tracking-tight leading-none">
              {" "}
              Start a project{" "}
            </h1>
            <button className=" border-[1px] mt-5 border-zinc-50 rounded-full px-5 py-2">
              Contact us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm font-medium text-zinc-700">
            Lorem ipsum dolor sit amet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
