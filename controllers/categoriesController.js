const Category = require('../models/Category');

exports.showCategories = async (req, res) => {
  try {
    const categories = await Category.getAll();
    res.render('pages/categories', { categories });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};