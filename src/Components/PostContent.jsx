import React from "react";
import { useParams } from "react-router-dom";
import ShareButton from "./ShareButton";
import CommentSection from "./CommentSection";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";

const PostContent = ({ posts }) => {
  const { id } = useParams();
  let post = {};
  if (post) {
    let arr = posts.data.filter(post => post.id == id);
    post = arr[0];
  } else {
    post = {};
  }

  /*
  const posts = [
    {
      id: 1,
      postTitle:
        " First step for success . if you wanna make it in life, follow these following steps",
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus optio debitis accusamus sequi inventore obcaecati eum voluptates,laudantium labore alias quos ad veritatis numquam voluptas? Porro,voluptatem? Illum, nobis quia. Lorem ipsum dolor sit amet consecteturadipisicing elit. Temporibus optio debitis accusamus sequi inventoreobcaecati eum voluptates, laudantium labore alias quos ad veritatisnumquam voluptas? Porro, voluptatem? Illum, nobis quia.",
      postCategory: "primus Ligue",
      postTime: "23/11/2023",
      coverImg: "/src/images/logo.jpg",
      postAuthor: "Amani Sostene",
    },

    {
      id: 2,
      postTitle:
        " Second step for success . if you wanna make it in life, follow these following steps",
      postContent:
        "Loremmmmmmdkddjdjdnvnbjgktototorlj,gnbjgjigji tvuhigtvhu ugth ui_ogt( vh yyg(h o_g(h o_hyyyyyyyyyyyyyighguhgutuu(ty(ut(uty(ut(v vpéu ih ufkjg'hfjijonegzji ogrhugrhghghug hg'hug' u))))))))",
      postCategory: "primus Ligue",
      postTime: "23/11/2023",
      coverImg: "/src/images/logo.jpg",
      postAuthor: "Amani Sostene",
    },
    {
      id: 3,
      postTitle:
        " Third step for success . if you wanna make it in life, follow these following steps",
      postContent:
        "Loremmmmmmdkddjdjdnvnbjgktototorlj,gnbjgjigji tvuhigtvhu ugth ui_ogt( vh yyg(h o_g(h o_hyyyyyyyyyyyyyighguhgutuu(ty(ut(uty(ut(v vpéu ih ufkjg'hfjijonegzji ogrhugrhghghug hg'hug' u))))))))",
      postCategory: "primus Ligue",
      postTime: "23/11/2023",
      coverImg: "/src/images/logo.jpg",
      postAuthor: "Amani Sostene",
    },
  ];

  let post = posts.filter((post) => post.id == id);
  post = post[0];
  */
  return (
    <>
      <div className="content">
        <div className="flex justify-start pl-2">
          <div className="bg-slate-900 text-center text-gray-200 text-sm rounded-md ">
            {post.attributes.postCategory}
          </div>
        </div>
        <h1 className=" text-black font-bold text-xl md:text-2xl pb-3 pt-2 pl-2">
          {post.attributes.postTitle}
        </h1>
        <div className="py-2 pl-2 md:pl-8">
          <div className="text-base text-red-700 font-bold pb-2">
            {post.attributes.postAuthor}
          </div>
          <div className="inline pr-2 text-sm text-gray-600 font-semibold">
            {post.attributes.postTime}
          </div>
        </div>
        <div className="image-content">
          <img
            src={`http://localhost:1337${post.attributes.coverImg.data.attributes.url}`}
          />
        </div>
        <ShareButton />
        <div className="pl-3 font-normal">{post.attributes.postContent}</div>
        <CommentSection />
      </div>
      {/*
      <HotStories />
      <Recommended />
      <MostPopular />
      */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default PostContent;
