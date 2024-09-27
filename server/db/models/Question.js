'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme}) {
     this.belongsTo(Theme, {
      foreignKey: 'ThemeId',
    })
    }
  }
  Question.init({
    question: DataTypes.STRING,
    response: DataTypes.STRING,
    ThemeId: DataTypes.INTEGER,



  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};