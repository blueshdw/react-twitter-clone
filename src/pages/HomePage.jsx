import React from "react";
import Filter from "../components/Filter";
import WhatIsHappening from "../components/WhatIsHappening";
import Posts from "../components/Posts";

const HomePage = () => {
  return (
    <div className="h-full">
      <Filter />
      <WhatIsHappening />
      <Posts />
    </div>
  );
};

export default HomePage;
