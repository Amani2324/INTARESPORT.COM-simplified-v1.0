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

const SubNavbar = () => {
  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>oops! Error....</p>;
  console.log(data);
  return (
    <div className="hidden md:flex justify-start  bg-littleBlack h-20">
      <div className="pt-6 px-12 items-center">
        <div className="navLinks">
          <Link to="/">
            <span className="p-2">Home</span>
          </Link>
          {data.categories.data.map((category) => (
            <Link key={category.id} to={`/CategoryPage/${category.id}`}>
              <span className="p-2">{category.attributes.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
