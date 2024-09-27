const questionRouter = require("express").Router();
const QuestionService = require("express").Router();

questionRouter.get('/', async(req, res) => {
    try {
        const questions = await QuestionService.getQuestions();
        res.status(200).json({questions})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

module.exports = questionRouter;