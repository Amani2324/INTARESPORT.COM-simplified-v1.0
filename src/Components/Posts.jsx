import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";






/*
  const posts = [
    {
      id: "1",
      postTitle:
        " First step for success . if you wanna make it in life, follow these following steps",
      postCategory: "primus Ligue",
      postTime: "23/11/2023",
      coverImg: "./src/images/logo.jpg",
    },
    {
      id: "2",
      postTitle:
        " Second step for success . if you wanna make it in life, follow these following steps",
      postCategory: "primus Ligue",
      postTime: "23/11/2023",
      coverImg: "./src/images/logo.jpg",
    },

    {
      id: "3",
      postTitle:
        " Third step for success . if you wanna make it in life, follow these following steps",
      postCategory: "primus Ligue",
      postTime: "23/11/2023",
      coverImg: "./src/images/logo.jpg",
    },

    {
      id: "4",
      postTitle:
        " Fourth step for success . if you wanna make it in life, follow these following steps",
      postCategory: "primus Ligue",
      postTime: "23/11/2023",
      coverImg: "./src/images/logo.jpg",
    },

    {
      id: "5",
      postTitle:
        " Fith step for success . if you wanna make it in life, follow these following steps",
      postCategory: "primus Ligue",
      postTime: "23/11/2023",
      coverImg: "./src/images/logo.jpg",
    },
  ];
  */


const Posts = () => {
    const [visible, setVisible] = useState(3);
     let { loading, error, data } = useFetch(
       "http://localhost:1337/api/posts?populate=*"
     );
     if (loading) return <p>Loading...</p>;
     if (error) return <p>oops! Error....</p>;
  //const [loading, setLoading] = useState(null)
  //const [searchTitle, setSearchTitle] = useState("")
  const showMorePosts = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  return (
    <> 
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5 pt-2">
        {data.data.slice(0, visible).map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <div className="flex flex-col border-b border-gray-300 md:border-b-0 pb-2 pl-1">
              <div className="flex flex-row md:flex-col pb-1.5 overflow-hidden relative">
                <img
                  src={`http://localhost:1337${post.attributes.coverImg.data.attributes.url}`}
                  className="md:w-48 md:h-40 bg-cover w-1/4 h-1/4"
                />
                <p className="text-black pl-3 md:pl-0 font-medium font-sans text-lg -mb-7">
                  {post.attributes.postTitle}
                </p>
              </div>

              <div className="flex items-center">
                <span className="inline pr-2 text-sm">
                  {post.attributes.postTime} |
                </span>
                <span className="inline text-sm">
                  {post.attributes.postCategory}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
          <div className="flex justify-center pb-6 pt-5 bg-white">
      <button
        onClick={showMorePosts}
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold px-10 py-2 rounded-xl"
        type="button"
      >
        Soma ayandi makuru
      </button>
    </div>
    </>
  );
};

export default Posts;
