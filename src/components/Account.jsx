import { Popover } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAccount, useAccounts } from "../hooks/hooks";
import { useDispatch } from "react-redux";
import { setCurrentAccount } from "../store/auth";

const Account = () => {
  const currentAccount = useAccount();
  const accounts = useAccounts();
  const dispatch = useDispatch();

  const handleAccountSwitch = (account) => {
    dispatch(setCurrentAccount(account));
  };

  return (
    <div className="relative">
      <Popover>
        <Popover.Button className="group outline-none rounded-full my-10 p-3 hover:bg-[#eff3f41a] w-full flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src={currentAccount.avatar}
            alt="avatar"
          />
          <div className="text-start flex flex-col ">
            <h6 className="font-bold text-[15px] leading-5 group-hover:bg-[#eff3f41a]">
              {currentAccount.username}
            </h6>
            <span className="text-[#71767b] text-[15px] group-hover:bg-[#eff3f41a]">
              @{currentAccount.fullName}
            </span>
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="#fff"
            width={19}
            height={19}
            className="bg-transparent w-full flex justify-end"
          >
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2-2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
          </svg>
        </Popover.Button>

        <Popover.Panel className="absolute bottom-full -right-12 w-[300px] py-3 border border-[#2f3336] rounded-2xl shadow-box">
            {accounts.map((account, index) => {
              return (
                <div
                  key={account.id}
                  onClick={() => handleAccountSwitch(account)}
                  className={`group outline-none p-3 w-full flex items-center gap-3 ${
                    index !== 0
                      ? "hover:bg-[#eff3f41a] cursor-pointer select-none"
                      : ""
                  }`}
                >
                  <img
                    className="w-10 h-10 rounded-full flex-shrink-0"
                    src={account.avatar}
                    alt="avatar"
                  />
                  <div className="text-start flex flex-col">
                    <h6
                      className={`font-bold text-[15px] leading-5 ${
                        index !== 0 ? "group-hover:bg-[#eff3f41a]" : ""
                      }`}
                    >
                      {account.username}
                    </h6>
                    <span
                      className={`text-[#71767b] text-[15px] ${
                        index !== 0 ? "group-hover:bg-[#eff3f41a]" : ""
                      }`}
                    >
                      @{account.fullName}
                    </span>
                  </div>
                  {/* Eğer account currentAccount ise tik işaretini göster */}
                  {currentAccount.id === account.id && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="#00BA7C"
                      width={19}
                      height={19}
                      className="ml-auto bg-transparent"
                    >
                      <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"></path>
                    </svg>
                  )}
                </div>
              );
            })}
            <div className="w-full px-4 py-3 font-bold hover:bg-[#eff3f41a] cursor-pointer">
              <Link className="bg-transparent">Add an existing account</Link>
            </div>
            {accounts.length !== 1 && (
              <div className="w-full px-4 py-3 font-bold hover:bg-[#eff3f41a] cursor-pointer">
                <Link className="bg-transparent">Manage accounts</Link>
              </div>
            )}
            <div className="w-full px-4 py-3 font-bold hover:bg-[#eff3f41a] cursor-pointer">
              <Link className="bg-transparent">
                Log out @{currentAccount.fullName}
              </Link>
            </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default Account;
