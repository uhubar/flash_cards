const { Question } = require("../db/models");

class QuestionService {
    static async Questions() {
        try {
            return await Question.findAll();
        } catch (error) {
            return error
        }
    }
}

module.exports = QuestionService;