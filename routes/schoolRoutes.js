const express = require('express');
const { body, query } = require('express-validator');
const schoolController = require('../controllers/schoolController');

const router = express.Router();

router.post(
  '/addSchool',
  [
    body('name').notEmpty(),
    body('address').notEmpty(),
    body('latitude').isFloat(),
    body('longitude').isFloat()
  ],
  schoolController.addSchool
);

router.get(
  '/listSchools',
  [
    query('latitude').isFloat(),
    query('longitude').isFloat()
  ],
  schoolController.listSchools
);

module.exports = router;
