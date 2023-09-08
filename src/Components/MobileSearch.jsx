import React from "react";

const MobileSearch = () => {
  return (
    <div className="flex basis-1/4 text-white cursor-pointer pl-4 md:hidden">
      <svg
        className="w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        ></path>
      </svg>
    </div>
  );
};
export default MobileSearch;
