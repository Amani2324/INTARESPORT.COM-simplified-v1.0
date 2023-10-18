import React from "react";
import { useQuery, gql } from "@apollo/client";
  const GET_SIGNED_IMAGE_URL = gql`
    query getSignedImageUrl($imageId: ID!) {
      getSignedImageUrl(imageId: $imageId) {
        url
      }
    }
  `;

function ImgSignedUrl() {

  const generateSignedUrl = async (imageId) => {
    const response = await fetch(`${strapi.config.get("apiURL")}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_SIGNED_IMAGE_URL,
        variables: {
          imageId,
        },
      }),
    });
    const signedUrl = await response.json();
    return signedUrl;
  };
}

export default ImgSignedUrl;
