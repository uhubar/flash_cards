import React from "react";
import { useParams } from "react-router-dom";

function OnePostPage({ posts }) {
  const { id } = useParams();

  const post = posts.find((el) => el.id === Number(id));

  return (
    <div>
      <h1> Это Один пост!!!!!!</h1>
      <h2> {post.title}</h2>
      <p> {post.text}</p>
      <b> {post.isPublished && String(post.isPublished)}</b>
    </div>
  );
}

export default OnePostPage;
