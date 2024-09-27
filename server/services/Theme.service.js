const { Theme } = require("../db/models");

class ThemeService {
    static async getThemes() {
        try {
            return await Theme.findAll()
        } catch (error) {
            return error;
        }
    }
}

module.exports = ThemeService;