import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query Getcategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

const MobileNavLinks = ({ closeHandleClick }) => {
  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>oops! Error....</p>;
  console.log(data);
  return (
    <>
      <Link to="/" onClick={closeHandleClick}>
        <span className="p-2">Home</span>
      </Link>
      {data.categories.data.map((category) => (
        <Link
          key={category.id}
          to={`/CategoryPage/${category.id}`}
          onClick={closeHandleClick}
        >
          <span className="p-2">{category.attributes.name}</span>
        </Link>
      ))}
    </>
  );
};

export default MobileNavLinks;
