import React from "react";
import { useParams } from "react-router-dom";
//import ShareButton from "../Components/ShareButton";
import CommentSection from "../Components/CommentSection";
import Footer from "../Components/Footer";
//import NewsLetter from "../Components/NewsLetter";
import { useQuery, gql } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
//import DisqusThread from "../Components/DisqusThread";
//import DisqusComments from "./DisqusComment";
import Comments from "./Comments";
import SomaAyandi from "../Components/SomaAyandi";

const POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
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

const PostDetailsPage = ({ url }) => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(POST, {
    variables: { id: id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>oops! Error....</p>;
  console.log(data);

  return (
    <>
      <div className="content">
        <div className="flex justify-start pl-2">
          <div className="bg-slate-900 text-center text-gray-200 text-sm rounded-md ">
            {data.post.data.attributes.postCategory}
          </div>
        </div>
        <h1 className=" text-black font-bold text-xl md:text-2xl pb-3 pt-2 pl-2">
          {data.post.data.attributes.postTitle}
        </h1>
        <div className="py-2 pl-2 md:pl-8">
          <div className="text-base text-red-700 font-bold pb-2">
            {data.post.data.attributes.postAuthor}
          </div>
          <div className="inline pr-2 text-sm text-gray-600 font-semibold">
            {data.post.data.attributes.postTime}
          </div>
        </div>
        <div className="image-content">
          <img
            src={`http://localhost:1337${data.post.data.attributes.coverImg?.data?.attributes?.url}`}
          />
        </div>

        {/*<ShareButton />*/}

        <div className="pl-3 font-normal text-lg">
          <ReactMarkdown>{data.post.data.attributes.postContent}</ReactMarkdown>
          <SomaAyandi />
        </div>
        <p className=" flex justify-center text-slate-900 text-xl font-bold pt-10">COMMENTAIRES</p>
        <Comments fullUrl={url} id={id} />
      </div>
      {/*
      <HotStories />
      <Recommended />
      <MostPopular />
      */}
      {/*<NewsLetter />*/}
      <Footer />
    </>
  );
};

export default PostDetailsPage;
