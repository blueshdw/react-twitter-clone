import React from "react";
import trends from "../TrendsList";
import Trend from "./Trend";

const Trends = () => {
  return (
    <div className="pl-[30px] mt-4 rounded-b-2xl">
      <aside className="w-[348px] border border-[#2f3336] pt-[10px] rounded-2xl flex flex-col gap-2 overflow-hidden">
        <h1 className="font-extrabold text-xl text-[#E7E9EA] px-4">
          Trends for you
        </h1>
        <div className="flex flex-col gap-2">
          {trends.map((trend) => {
            return <Trend trend={trend} key={trend.id} />;
          })}
        </div>
        <button className="flex justify-start items-center h-[52px] text-[#1d9bf0] px-4 hover:bg-white/[0.03]">Show More</button>
      </aside>
    </div>
  );
};

export default Trends;
