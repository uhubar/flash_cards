import React from "react";
import { useState } from "react";

function CategoryItem({ category, setCategories }) {
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [input, setInput] = useState(category.title);

  const handlerDelete = async (id) => {
    const response = await fetch(`/api/categories/${id}`, {
      method: "DELETE",
    });
    const res = await response.json();
    if (res.message === "Deleted") {
      setCategories((prev) => prev.filter((el) => el.id !== id));
    }
  };

  const handlerUpdate = async (e, id) => {
    e.preventDefault();
    const response = await fetch(`/api/categories/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({title: input})
      });

    const res = await response.json();
    setCategories((prev) => prev.map((el) => el.id === id ? res.category : el))
    setIsShowUpdate(false)

  };

  return (
    <div key={category.id}>
      <h2>{category.title}</h2>
      <button type="button" onClick={() => handlerDelete(category.id)}>
        Удалить
      </button>
      <button type="button" onClick={() => setIsShowUpdate((prev) => !prev)}>
        Обновить
      </button>

      {isShowUpdate && (
        <form onSubmit={(e) => handlerUpdate(e, category.id)}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button type="submit">Отправить</button>
        </form>
      )}

      <hr style={{ color: "white" }} />
    </div>
  );
}

export default CategoryItem;
