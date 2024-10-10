import { Popover } from "@headlessui/react";
import React from "react";

const Trend = ({ trend }) => {
  return (
    <div
      className="group px-4 py-2 flex items-start justify-between first:mt-1 hover:bg-white/[0.03] cursor-pointer "
      key={trend.id}
    >
      <div className="flex flex-col">
        <div className="text-[13px] text-[#71767b] group-hover:bg-white/[0.03]">
          {trend.title}
        </div>
        <div className="font-bold text-[15px] leading-5 group-hover:bg-white/[0.03]">
          {trend.topic.type === "tag" && "#"}
          {trend.topic.value}
        </div>
        <div className="text-[13px] text-[#71767b] group-hover:bg-white/[0.03]">
          {Math.floor(trend.postCount).toLocaleString()} posts
        </div>
      </div>
      <Popover className="bg-transparent relative">
        <Popover.Button className="outline-none">
          <button className="outline-none mt-1 cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full bg-transparent hover:bg-[#1d9bf01a] transition-colors">
            <svg
              viewBox="0 0 24 24"
              fill="#71767b" // Normalde gri rengi
              width={20}
              height={20}
              className="bg-transparent hover:fill-[#1d9bf0]" // Sadece hover ile tetiklenecek
            >
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </svg>
          </button>
        </Popover.Button>
        <Popover.Panel
          className="w-[300px] absolute top-0 right-0 z-[10000] rounded-lg"
          style={{ boxShadow: "0px 1px 6px rgba(250, 250, 250, 250)" }}
        >
          <div className="flex flex-col w-full rounded-xl">
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4 px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path>
              </svg>
              Not interested in this
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path>
              </svg>
              This trend is harmful or spammy
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default Trend;
