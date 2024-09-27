'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.PostCategory)
     this.belongsTo(models.User)
    }
  }
  Post.init({
    text: DataTypes.STRING,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    PostCategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,



  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};