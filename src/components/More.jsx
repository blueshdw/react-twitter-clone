import React from "react";
import { MoreIcon } from "../MoreIcon";
import { MoreList } from "../MoreList";
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";

const More = () => {
  return (
    <Popover className="group cursor-pointer relative">
      <Popover.Panel  
        className="w-[318px] absolute top-28 -right-28 z-30 bg-black shadow-box rounded-xl overflow-hidden flex flex-col h-[500px]"
        style={{ transform: 'translateY(-100%)' }} // Paneli sidebar'ın en üstüne taşır
      >
        {MoreList.map((item) => {
          return (
            <Link
              key={item.id}
              className="cursor-pointer flex items-center hover:bg-[#eff3f41a] px-4 flex-1"
              to={item.path}
            >
              <div className="inline-flex items-center gap-[25px] font-bold transition-colors bg-transparent">
                {item.icon}
                <span className="bg-transparent flex justify-center text-xl">
                  {item.title}
                </span>
              </div>
            </Link>
          );
        })}
      </Popover.Panel>
      <Popover.Button className="outline-none">
        <div className="inline-flex items-center gap-[9px] group-hover:bg-[#eff3f41a] transition-colors rounded-3xl pr-7">
          <MoreIcon />
          <span className="bg-transparent flex justify-center text-xl">More</span>
        </div>
      </Popover.Button>
    </Popover>
  );
};

export default More;
