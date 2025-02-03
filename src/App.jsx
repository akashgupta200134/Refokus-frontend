import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Markees from "./components/Markees";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="font-regular w-full min-h-screen bg-zinc-900">
      <Navbar />
      <Work />
      <Stripes />
      <Products/>
      <Markees/>
      <Cards/>
    </div>
  );
};

export default App;
