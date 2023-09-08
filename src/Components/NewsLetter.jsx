import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col bg-blue-700 mx-6 rounded-2xl justify-center items-center">
      <div className="flex flex-col basis-full justify-center">
        <h2 className="text-white pt-5 pl-5 font-bold text-3xl">
          Sign Up For Our Daily Newsletter
        </h2>
        <p className="text-white pb-8 pt-2  pl-5 text-md">
          Get news from INTARE SPORT in your inbox each weekday morning.
        </p>
      </div>
      <div className="flex flex-col basis-full">
        <form className="w-full">
          <div className="flex items-center mb-6 mx-1">
            <input
              className="w-full px-10 py-4 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center pb-6 ml-1">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold px-10 py-2 rounded-xl"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
