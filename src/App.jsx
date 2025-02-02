import React from "react";
import Navbar from "./components/Navbar";
import Work from './components/Work'
import Stripe from "./components/Stripe";



const App = () => {
  return (
    <div className=" font-regular w-full h-screen bg-zinc-900">
      <Navbar />
      <Work/>
      <Stripe/>
      
    </div>
  );
};

export default App;
