import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Markees from "./components/Markees";

const App = () => {
  return (
    <div className="font-regular w-full min-h-screen bg-zinc-900">
      <Navbar />
      <Work />
      <Stripes />
      <Products/>
      <Markees/>
    </div>
  );
};

export default App;
