import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useQuery, gql } from "@apollo/client";

const POSTS = gql`
  query GetPosts {
    posts(sort: "id:desc") {
      data {
        id
        attributes {
          postTitle
          postContent
          postCategory
          postTime
          postAuthor
          coverImg {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const HomePage = () => {
  const [visible, setVisible] = useState(3);
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>oops! Error....</p>;
  console.log(data);

  const showMorePosts = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5 pt-2">
        {data.posts.data.slice(0, visible).map((post) => (
          <Link key={post.id} to={`/PostDetails/${post.id}`}>
            <div className="flex flex-col border-b border-gray-300 md:border-b-0 pb-2 pl-1">
              <div className="flex flex-row md:flex-col pb-1.5 overflow-hidden relative">
                <img
                  src={`http://localhost:1337${post.attributes.coverImg.data.attributes.url}`}
                  className="md:w-48 md:h-40 bg-cover w-1/4 h-1/4"
                />

                <p className="text-gray-800 pl-3 md:pl-0 font-bold text-lg
                 -mb-7">
                  {post.attributes.postTitle}
                </p>
              </div>

              <div className="flex items-center">
                <span className="inline pr-1 text-sm">
                  {post.attributes.postTime}
                </span>
                <span className="text-black pr-1 font-bold">|</span>
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
      <Footer />
    </>
  );
};

export default HomePage;
