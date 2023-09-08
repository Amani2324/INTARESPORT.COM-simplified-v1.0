import React from "react";
import Posts from "../Components/Posts";
import Footer from "../Components/Footer";

const AmakuruPage = ({ posts }) => {
  return (
    <div>
      <Posts posts={posts ? posts : ""} />
      <Footer />
    </div>
  );
};

export default AmakuruPage;
