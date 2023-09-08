import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const POSTS = gql`
  query GetPosts {
    posts {
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

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useQuery("POSTS", () => {
    return fetch("api/posts", {
      query: `
        {
          POSTS(where: {
            title: { contains: $query }
          }) {
            id
            title
          }
        }
      `,
      variables: {
        query,
      },
    });
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>oops! Error....</p>;
  console.log(data);

  return (
    <div>
      <input
        type="text"
        placeholder="Search articles"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
