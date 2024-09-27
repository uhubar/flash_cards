const ThemeService = require("../services/Theme.service");
const themeRouter = require("express").Router();


themeRouter.get('/', async(req, res) => {
    try {
        const themes = await ThemeService.getThemes();
        console.log(themes)
        res.status(200).json({themes})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

module.exports = themeRouter;