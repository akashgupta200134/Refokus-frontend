import React from "react";
import Product from "./Product";

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

  return (
    <div className="mt-16">
        {productData.map((items , index)  => (
             <Product data = {items} key={index} /> 
        ))}
    
    </div>
  );
};

export default Products;
