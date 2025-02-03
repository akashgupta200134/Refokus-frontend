import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Markees from "./components/Markees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion";  





const App = () => {

const locomotiveScroll = new LocomotiveScroll();




  return (
    <div className="font-regular w-full min-h-screen bg-zinc-900">
      <Navbar />
      <Work/>
      <Stripes />
      <Products/>
      <Markees/>
      <Cards/>
      <Footer/>

    </div>
  );
};

export default App;
