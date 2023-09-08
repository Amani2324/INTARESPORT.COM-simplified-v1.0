import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  const disqusShortname = "intare";
  const disqusConfig = {
    url: "http://localhost:5173/PostDetailsPage",
    identifier: data.post.data.id, // Single post id
    title: data.post.data.attributes.postTitle, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
