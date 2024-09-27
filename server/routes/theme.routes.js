const themeRouter = require("express").Router();
const ThemeService = require("../services/Theme.service");

themeRouter.get('/', async(req, res) => {
    try {
        const themes = await ThemeService.getThemes();
        res.status(200).json({themes})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

module.exports = themeRouter;