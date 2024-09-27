import axios from "axios";
import React from "react";
import { useState } from "react";

function CategoryForm({ setCategories }) {
  const [input, setInput] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // const response = await fetch("/api/categories", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ title: input }),
    // });
    // const res = await response.json();
  
    const { data } = await axios.post("/api/categories", { title: input });
    setCategories((prev) => [...prev, data.category]);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default CategoryForm;
