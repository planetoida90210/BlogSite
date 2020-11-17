const express = require('express');
const { NotExtended } = require('http-errors');
const News = require('../models/news')
const router = express.Router();


router.all('*', (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('login');

    return;
  }

  next();
});

/* GET home page. */
router.get('/',(req, res ) => {
  // const newsData = new News({
  //   title: 'Test',
  //   description: 'Opis'
  // })
  // newsData.save((err) => {
  //   console.log(err);
  // })


  res.render('admin/index', { title: 'Admin' });
});

router.get('/news/add', (req, res) => {
  res.render('admin/news-form', { title: 'Dodaj news' });
})

module.exports = router; 