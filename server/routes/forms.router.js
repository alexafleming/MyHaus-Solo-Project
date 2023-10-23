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


router.post('/decorform', (req, res) => {
    let decorFormSubmission = req.body;

    let queryText = `INSERT INTO "decor_form" ("item", "purchased_from", "website_link", "additional_comments", "room_id")
  VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [decorFormSubmission.item,  decorFormSubmission.purchasedFrom,  decorFormSubmission.websiteLink,  decorFormSubmission.additionalComments,  decorFormSubmission.roomId])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new decor form`, error);
            res.sendStatus(500);
        });
});


router.post('/appform', (req, res) => {
    let appliancesFormSubmission = req.body;

    let queryText = `INSERT INTO "appliances_electronics_form" ("item", "brand_name","price_of_item", "model_number", "warrenty_info", "additional_comments", "room_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(queryText, [appliancesFormSubmission.item,  appliancesFormSubmission.brandName,  appliancesFormSubmission.priceOfItem, appliancesFormSubmission.modelNumber , appliancesFormSubmission.warrentyInfo, appliancesFormSubmission.additionalComments,  appliancesFormSubmission.roomId])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new appliances + electronics form`, error);
            res.sendStatus(500);
        });
});

router.post('/miscform', (req, res) => {
    let miscFormSubmission = req.body;
   

    let queryText = `INSERT INTO "miscellaneous_form" ("item", "brand_name", "additional_comments", "room_id")
  VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [miscFormSubmission.item, miscFormSubmission.brandName, miscFormSubmission.additionalComments, miscFormSubmission.roomId])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new miscellaneous form`, error);
            res.sendStatus(500);
        });
});


module.exports = router;