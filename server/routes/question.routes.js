const QuestionService = require("../services/Question.service");

const questionRouter = require("express").Router();


questionRouter.get('/', async(req, res) => {
    try {
        const questions = await QuestionService.getQuestions();
        res.status(200).json({questions})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//ghbdtnnjfsajbfdjhsadbjhfdshjfewjhwefjhwefjh
questionRouter.get('/:ThemeId/:id', async(req, res) => {
    const {id, ThemeId} = req.params;
    try {
        const question = await QuestionService.getOneQuestion(id, ThemeId);
        res.status(200).json({question})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

module.exports = questionRouter;