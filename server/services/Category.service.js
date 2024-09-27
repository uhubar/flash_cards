const { PostCategory } = require("../db/models");
class CategoryService {
  static async getCategories() {
    try {
      return await PostCategory.findAll();
    } catch (error) {
      return error;
    }
  }

  static async createCategory(data) {
    try {
      return await PostCategory.create(data);
    } catch (error) {
      return error;
    }
  }

  static async updateCategory(id, data) {
    try {
      const category = await PostCategory.findOne({ where: { id } });
      if (!category) {
        return { message: "Category not found" };
      }
      return await category.update(data);
    } catch (error) {
      return error;
    }
  }

  static async deleteCategory(id) {
    try {
      const category = await PostCategory.findOne({ where: { id } });
      if (!category) {
        return { isDeleted: false, message: "Category not found" };
      }
      await category.destroy();
      return { isDeleted: true, message: "Success" };
    } catch (error) {
      return error;
    }
  }
}

module.exports = CategoryService;
