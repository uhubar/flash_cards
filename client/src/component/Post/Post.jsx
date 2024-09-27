import React from "react";
import { Link } from "react-router-dom";

function Post({ post, setPosts }) {
  const onDeleteHandler = (id) => {
    setPosts((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h3> {post.title}</h3>
      </Link>

      <p> {post.text}</p>
      <p> {post.isPublished && String(post.isPublished)}</p>
      <button type="button" onClick={() => onDeleteHandler(post.id)}>
        Удалить
      </button>
    </div>
  );
}

export default Post;
