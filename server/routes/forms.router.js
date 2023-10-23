const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
});

/**
 * POST route template
 */
router.post('/paintform', (req, res) => {
    let paintFormSubmission = req.body;

    let queryText = `INSERT INTO "paint_form" ("brand_name", "paint_color_name", "paint_finish", "additional_comments", "room_id")
  VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [paintFormSubmission.brandName, paintFormSubmission.paintColorName, paintFormSubmission.paintFinish, paintFormSubmission.additionalComments, paintFormSubmission.roomId])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new paint form`, error);
            res.sendStatus(500);
        });
});

module.exports = router;