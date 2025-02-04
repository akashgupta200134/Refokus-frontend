import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import video1 from "/assets/arq.mp4"
import video2 from "/assets/ttr.mp4"
import video4 from "/assets/yahoo.mp4"
import video3 from "/assets/yir.mp4"
import video5 from "/assets/rainfall.mp4"

const Products = () => {
  const productData = [
    {
      title: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      casestudy: true,
      live: true,
    },

    {
      title: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      casestudy: false,
      live: true,
    },
    {
      title: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      casestudy: false,
      live: true,
    },
    {
      title: "Yahoo!",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      casestudy: true,
      live: true,
    },
    {
      title: "Rainfall",
      desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      casestudy: true,
      live: true,
    },
  ];

  const [position, setPosition] = useState(0);

  const mover = (value) => {
    setPosition(value * 20);
  };

  return (
    <div className="mt-32 relative">
      {productData.map((items, index) => (
        <Product data={items} key={index}  keyindex={index} moverfunction={mover} />
      ))}

      <div className=" absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          className=" window absolute w-[32rem] h-[20rem]  left-[41%]  overflow-hidden  rounded-3xl"
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
            transition={{ease : [0.68, -0.6, 0.32, 1.6] , duration : 0.5}}
        >
       <motion.div
  animate={{ y: -position + `rem` }}
  transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
  className="w-full h-full overflow-hidden"
>
  <video autoPlay loop muted className="w-full h-full object-cover">
    <source src= {video1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>

<motion.div
  animate={{ y: -position + `rem` }}
  transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
  className="w-full h-full overflow-hidden"
>
  <video autoPlay loop muted className="w-full h-full object-cover">
    <source src={video2} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>

<motion.div
  animate={{ y: -position + `rem` }}
  transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
  className="w-full h-full overflow-hidden"
>
  <video autoPlay loop muted className="w-full h-full object-cover">
    <source src={video3} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>
   
   
<motion.div
  animate={{ y: -position + `rem` }}
  transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
  className="w-full h-full overflow-hidden"
>
  <video autoPlay loop muted className="w-full h-full object-cover">
    <source src={video4} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>

<motion.div
  animate={{ y: -position + `rem` }}
  transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
  className="w-full h-full overflow-hidden -py-1"
>
  <video autoPlay loop muted className="w-full h-full object-cover">
    <source src={video5} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>




        </motion.div>
      </div>
    </div>
  );
};

export default Products;
