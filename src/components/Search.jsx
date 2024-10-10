import React, { useState, useEffect, useRef } from "react";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [popup, setPopup] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
        setPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const inputFocus = () => {
    setIsFocused(true);
    setPopup(true);
  };

  return (
    <div className="h-[53px] py-1 pl-[30px] pr-5 fixed top-0 w-[350px]">
      <label
        className="search w-full h-full flex items-center rounded-full relative"
        ref={inputRef}
      >
        <svg
          viewBox="0 0 24 24"
          fill={isFocused ? "#1d9bf0" : "#71767B"}
          width={19}
          className="bg-[#202327] absolute left-5"
        >
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
        </svg>
        <input
          onFocus={() => inputFocus()}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          type="text"
          value={query}
          className="h-full bg-[#202327] w-full text-[15px] outline-none pl-[56px] rounded-full placeholder:text-[#757575] border border-transparent focus-within:border-[#1d9bf0]"
        />
        {query && (
          <svg
            onClick={() => setQuery("")}
            viewBox="0 0 15 15"
            fill="#000"
            width={22}
            height={22}
            className="p-1 bg-[#1A8CD8] rounded-full cursor-pointer absolute right-3"
          >
            <path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path>
          </svg>
        )}
        {popup && (
          <div className="min-h-[100px] border border-[#2f3336] rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.5)] shadow-[#2f3336] absolute right-0 left-0 top-full text-[15px] overflow-hidden">
            {!query && (
              <p className="text-[#71767B] w-full flex justify-center mt-5">
                Try searching for people, lists, or keywords
              </p>
            )}

            {query && (
              <div className="w-full px-4 py-3 hover:bg-[#eff3f41a] cursor-pointer">
                Search for "{query.trim()}"
              </div>
            )}
            {query && <div className="h-[1px] w-full bg-[#2f3336] my-1"></div>}
            {query && (
              <div className="w-full px-4 py-3 hover:bg-[#eff3f41a] cursor-pointer">
                Go to "{query.trim()}"
              </div>
            )}
          </div>
        )}
      </label>
    </div>
  );
};

export default Search;
