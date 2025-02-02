import React from "react";

const Work = () => {
  let imageUrl = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      left: "50%",
      top: "48%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      left: "45%",
      top: "60%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      left: "55%",
      top: "63%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      left: "60%",
      top: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      left: "48%",
      top: "70%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      left: "55%",
      top: "70%",
      isActive: false,
    },
  ];

  return (
    <div className="w-full">
      <div className=" relative max-w-screen-xl overflow-hidden mx-auto text-center">
        <h1
          className=" text-[35vw] text-zinc-100 select-none font-medium
          leading-none tracking-tight"
        >
          Work
        </h1>

        <div className="absolute top-0 w-full h-full">
  {imageUrl.map(
    (items, index) =>
      items.isActive && (
        <img
          key={index} 
          src={items.url}
          alt={`Image ${index}`} 
          style={{ top: items.top, left: items.left }}
          className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
        />
      )
  )}
</div>

      </div>
    </div>
  );
};

export default Work;
