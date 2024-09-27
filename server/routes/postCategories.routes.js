const categoryRouter = require("express").Router();
const { PostCategory } = require("../db/models");
const CategoryService = require("../services/Category.service");

categoryRouter.get("/", async (req, res) => {
  try {
    // const categories = await PostCategory.findAll();
    const categories = await CategoryService.getCategories();
    res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
categoryRouter.post("/", async (req, res) => {
  const { title } = req.body;
  try {
    if (!title) {
      res.status(400).json({
        error: "Нам очень нужен твой title!!! Ну пожалуйста! ",
      });
    } else {
      //const post = await PostCategory.create({ title });
      const category = await CategoryService.createCategory({ title });
      res.status(201).json({ category });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

categoryRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // const countDeletedPosts = await PostCategory.destroy({ where: { id } });
    const {isDeleted} = await CategoryService.deleteCategory(id);

    if (isDeleted) {
      res.status(200).json({ message: "Deleted" });
    } else {
      res.status(400).json({ message: "Not found record" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

categoryRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    // const postArrUpdate = await PostCategory.update(
    //   { title },
    //   { where: { id } }
    // );
    // const postArrUpdate = await CategoryService.updateCategory(id, { title });
    // if (postArrUpdate.length > 0) {
    //   const post = await PostCategory.findOne({ where: { id } });
    //   res.status(200).json({ post });
    // }
    const category = await CategoryService.updateCategory(id, { title });
    if (category) {
      res.status(200).json({ category });
    } else {
      res.status(400).json({ message: "Not update" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = categoryRouter;
