import React from "react";
import { footerList } from "../FooterList";

const Footer = () => {
  return (
    <nav className="flex flex-wrap pl-[50px] pr-[70px] mb-16 gap-x-2 mt-4">
      {footerList.map((item) => {
        return (
          <div key={item.id}>
            <span className="text-[#71767b] cursor-pointer text-[13px] leading-[19.5px] hover:underline underline-offset-4 transition-all duration-200">
              {item.title}
            </span>
            
          </div>
        );
      })}
    </nav>
  );
};

export default Footer;
