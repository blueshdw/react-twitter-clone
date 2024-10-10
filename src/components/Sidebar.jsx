import React from "react";
import { LogoIcon } from "../Logo";
import { NavLinks } from "../NavLinks";
import { NavLink } from "react-router-dom";
import More from "./More";
import Button from "./Button";
import Account from "./Account";

const Sidebar = () => {
  return (
    <div className="sidebar w-[266px] pr-[35px] sticky top-0 h-[100vh]">
      <div className="logo">
        <LogoIcon />
      </div>
      <nav className="navbar mt-0.5 flex flex-col gap-[.3px]">
        {NavLinks.map((link) => {
          return (
            <NavLink
              key={link.id}
              to={link.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {({ isActive }) => (
                <div className="group cursor-pointer flex items-center">
                  <div className="inline-flex relative items-center gap-[9px] group-hover:bg-[#eff3f41a] transition-colors rounded-3xl pr-7 ">
                      {isActive ? link.ActiveIcon : link.InActiveIcon}
                      {link.notifications && <span className="absolute top-1.5 left-[23px] w-[18px] h-[18px] text-[11px] border border-black bg-[#1d9bf0] flex items-center justify-center rounded-full ">{link.notifications}</span>}
                    <span className="bg-transparent flex justify-center text-xl">
                      {link.title}
                    </span>
                  </div>
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>
      <More />
      <div className="mt-2">
        <Button size="large">Post</Button>
      </div>
      <Account />
    </div>
  );
};

export default Sidebar;
