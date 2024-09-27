import React, { useState } from "react";
import Post from "./Post";

const data = [
  {
    id: 1,
    title: "Post 1",
    text: "Text 1",
    description: "Description 1",
    isPublished: true,
  },
  {
    id: 2,
    title: "Post 2",
    text: "Text 2",
    description: "Description 2",
    isPublished: false,
  },
  {
    id: 3,
    title: "Post 3",
    text: "Text 3",
    description: "Description 3",
    isPublished: true,
  },
  {
    id: 4,
    title: "Post 4",
    text: "Text 4",
    description: "Description 4",
    isPublished: false,
  },
  {
    id: 5,
    title: "Post 5",
    text: "Text 5",
    description: "Description 5",
    isPublished: true,
  },
  {
    id: 6,
    title: "Post 6",
    text: "Text 6",
    description: "Description 6",
    isPublished: false,
  },
  {
    id: 7,
    title: "Post 7",
    text: "Text 7",
    description: "Description 7",
    isPublished: true,
  },
  {
    id: 8,
    title: "Post 8",
    text: "Text 8",
    description: "Description 8",
    isPublished: false,
  },
  {
    id: 9,
    title: "Post 9",
    text: "Text 9",
    description: "Description 9",
    isPublished: true,
  },
  {
    id: 10,
    title: "Post 10",
    text: "Text 10",
    description: "Description 10",
    isPublished: false,
  },
  {
    id: 11,
    title: "Post 11",
    text: "Text 11",
    description: "Description 11",
    isPublished: true,
  },
  {
    id: 12,
    title: "Post 12",
    text: "Text 12",
    description: "Description 12",
    isPublished: false,
  },
  {
    id: 13,
    title: "Post 13",
    text: "Text 13",
    description: "Description 13",
    isPublished: true,
  },
];

function Posts() {
  const [posts, setPosts] = useState(data);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const submitHandler = (event) => {
 event.preventDefault();
    setPosts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title,
        text,
        isPublished,
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <label>
          text
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </label>
        <label>
          isPublished
          <input
            type="checkbox"
            value={isPublished}
            onChange={(e) => setIsPublished(e.target.value)}
          ></input>
        </label>
        <button type="submit">Отправить</button>
      </form>

      {posts.map((post) => (
        <Post key={post.id} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
}

export default Posts;
