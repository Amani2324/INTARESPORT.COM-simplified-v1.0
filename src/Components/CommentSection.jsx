import React from "react";

const CommentSection = () => {
  return (
    <>
      <div className="commentSection">
        <form className="w-full py-5 flex flex-col">
          <label htmlFor="message" className="block mb-2 text-sm text-gray-700">
            Your comment
          </label>
          <textarea
            id="message"
            rows="6"
            cols="35"
            className="text-sm pt-4"
            placeholder="Leave a comment..."
          ></textarea>
        </form>
      </div>

      <form className="bg-white shadow-md rounded px-8 pt-3 pb-6 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="pb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex items-center pb-6">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold px-10 py-2 rounded-xl"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentSection;
