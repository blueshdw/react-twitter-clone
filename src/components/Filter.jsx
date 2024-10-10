const Filter = () => {
  return (
    <div className="w-full border-b border-[#2f3336] bg-black bg-opacity-50 backdrop-blur-lg sticky top-0 z-10">
      <button className="group w-1/2 h-[53px] hover:bg-[#191B1C] transition-colors">
        <span className="font-bold text-[#e7e9ea] relative after:absolute after:h-1 after:w-full after:-bottom-4  after:left-0 after:flex after:justify-center after:bg-[#1d9bf0] after:rounded-sm group-hover:bg-[#191B1C] bg-transparent transition-colors ">
          For you
        </span>
      </button>
      <button className="group w-1/2 h-[53px] hover:bg-[#191B1C] transition-colors">
        <span className="group-hover:bg-[#191B1C] font-bold text-[#e7e9ea] relative transition-colors bg-transparent">
          Following
        </span>
      </button>
    </div>
  );
};

export default Filter;
