import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";

const App = () => {
  return (
    <div className="font-regular w-full min-h-screen bg-zinc-900">
      <Navbar />
      <div className="px-4 py-6">
        <Work />
      </div>
      <Stripes />
    </div>
  );
};

export default App;
