const Category = require('../models/categoryModel');

const categoryController = {
    getCategories: async (req, res) => {
        try {
            const categories = await Category.find()
            res.json(categories);
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = categoryController;