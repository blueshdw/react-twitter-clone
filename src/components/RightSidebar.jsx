import React from "react";
import Search from "./Search";
import Premium from "./Premium";
import Trends from "./Trends";
import WhoFollow from "./WhoFollow";
import Footer from "./Footer";

const RightSidebar = () => {
  return (
    <div className="w-[400px] relative">
      <Search />
      <Premium />
      <Trends />
      <WhoFollow />
      <Footer />
    </div>
  );
};

export default RightSidebar;
