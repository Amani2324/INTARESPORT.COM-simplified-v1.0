import React from "react";
import PostContent from "./PostContent";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";


const PostContentPage = ({ posts }) => {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <PostContent posts={posts ? posts : ""} />
    </div>
  );
};

export default PostContentPage;
