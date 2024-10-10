import React from "react";
import Button from "./Button";

const Premium = () => {
  return (
    <div className="pl-[30px] mt-20">
      <aside className="w-[348px] h-[146px] border border-[#2f3336] py-[10px] pl-4  rounded-2xl flex flex-col gap-2">
        <h1 className="font-extrabold text-xl text-[#E7E9EA]">
          Subscribe to Premium
        </h1>
        <div className="text-[15px] text-[#E7E9EA] leading-5 mb-0.5 tracking-wide font-normal">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </div>
        <Button size="normal">Subscribe</Button>
      </aside>
    </div>
  );
};

export default Premium;
