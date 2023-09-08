import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
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

const LatestNews = () => {
         const { loading, error, data } = useQuery(POSTS);
         if (loading) return <p>Loading...</p>;
         if (error) return <p>oops! Error....</p>;
         console.log(data);
  return (
         <div>
                
    </div>
  )
}

export default LatestNews