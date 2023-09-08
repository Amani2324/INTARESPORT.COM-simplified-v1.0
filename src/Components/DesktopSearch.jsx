import React from "react";

const DesktopSearch = () => {
  return (
    <>
      <div className="hidden md:flex justify-end">
        <div className="relative pr-24  text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default DesktopSearch;
