import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="  max-w-screen-xl mx-auto py-10  flex gap-32">
        <div className="basis-1/2">
          <h1 className=" text-white text-[12rem] font-semibold leading-none tracking-tighter">
            refokus.
          </h1>
        </div>

        <div className="basis-1/2 flex gap-4 mt-16 ">
          <div className="basis-1/3 block capitalize text-zinc-600">
            <h4 className="text-zinc-400">Socials</h4>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((items, index) => (
              <a className=" block mt-2 capitalize  text-zinc-600">{items}</a>
            ))}
          </div>
          <div className="basis-1/3 block  capitalize text-zinc-600">
            <h4 className="text-zinc-400">sitemao</h4>
            {["Home", "Work", "Careers" ,"Contacts"].map((items, index) => (
              <a className=" block mt-2 capitalize  text-zinc-600">{items}</a>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right text-zinc-50">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className="mt-12 w-32"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
