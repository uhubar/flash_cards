import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryForm from "../component/Category/CategoryForm";
import CategoryItem from "../component/Category/CategoryItem";
import { axiosInstance } from "../axiosInstance";

function CategoryPage() {
  console.log("1 Component render");

  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    // const response = await fetch("/api/categories");
    // const data = await response.json();
    try {
      const response = await axiosInstance.get("/categories");
      if (response.status === 200) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadCategories();
    console.log("2. Use effect is RUN ");
  }, []);
  // [] - монтирование
  // нету - монтирвоание и при обновлении
  // [state, state] - следить за состояниями
  console.log("3. Before return ");

  return (
    <div>
      <CategoryForm setCategories={setCategories} />
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          setCategories={setCategories}
        />
      ))}
    </div>
  );
}

export default CategoryPage;
