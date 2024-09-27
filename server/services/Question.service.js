const { Question } = require("../db/models");


class QuestionService {
    static async getQuestions() {
        try {
            return await Question.findAll();
        } catch (error) {
            return error
        }
    }

    static async getOneQuestion(id, ThemeId) {
        try {
            return await Question.findOne({where: { id, ThemeId }});
        } catch (error) {
            
        }
}
}

module.exports = QuestionService;