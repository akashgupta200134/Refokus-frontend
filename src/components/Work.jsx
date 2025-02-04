import React, { useState } from "react";
import { motion, useScroll } from "motion/react";
import { data } from "react-router-dom";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      left: "50%",
      top: "48%",
      isActive: false,
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
  ]);

  const { scrollYProgress } = useScroll();

  function showImages(arr) {
    setImages((prev) =>
      prev.map((items, index) =>
        arr.indexOf(index) === -1
          ? { ...items, isActive: false }
          : { ...items, isActive: true }
      )
    );
  }

  scrollYProgress.on("change", (data) => {
    const progress = Math.floor(data * 100);

    switch (progress) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1, 2]);
        break;
      case 4:
        showImages([0, 1, 2, 3]);
        break;
      case 5:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 6:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className=" relative max-w-screen-xl  mx-auto text-center">
        <h1
          className=" text-[35vw] text-zinc-100 select-none font-medium
          leading-none tracking-tight"
        >
          Work
        </h1>

        <div className="absolute top-0 w-full h-full">
          {images.map(
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
