import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    
    <div className=" max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700  ">
      <div className="nleft flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />

        <div className="links text-white flex items-center ml-20  gap-14 ">
          {["Home", "Work", "Careers", "", "News"].map((items, index) =>
            items.length == 0 ? (
              <span className=" bg-zinc-400 w-[1px] h-6"></span>
            ) : (
              <a
                className=" text-sm flex items-center gap-1"
                href="#"
                key={index}
              >
                {index == 1 && (
                  <span
                    style={{ boxshadow: "rgb(0, 255, 25) 0px 0px 0.55em;" }}
                    className="inline-block w-[5px] h-[5px] rounded-full bg-green-600  "
                  />
                )}
                {items}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
