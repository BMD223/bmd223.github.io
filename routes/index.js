const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get('/categories', categoriesController.showCategories);

module.exports = router;