import React, { useState } from "react";

const CommentFormComponent = () => {
  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="comment" value={comment} />
      <button type="submit">Add Comment</button>
    </form>
  );
};

const CommentListComponent = () => {
  const [comments, setComments] = useState([]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.author}: {comment.content}
        </li>
      ))}
    </ul>
  );
};

const addComment = (comment) => {
  // Get the current list of comments.
  const comments = [...state.comments];

  // Add the new comment to the list.
  comments.push({
    id: Math.random().toString(36).substring(7),
    author: comment.author,
    content: comment.content,
  });

  // Update the state with the new list of comments.
  setComments(comments);
};

const App = () => {
  return (
    <div>
      <CommentFormComponent />
      <CommentListComponent />
    </div>
  );
};

export default App;
