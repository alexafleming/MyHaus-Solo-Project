const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




/**
 * GET route template
 */

router.get('/:id', async (req, res) => {
  try {
    const paintFormQuery = `
        SELECT * FROM paint_form
        WHERE room_id = $1
      `;

    const decorFormQuery = `
        SELECT * FROM decor_form 
        WHERE room_id = $1
      `;

    const appFormQuery = `
        SELECT * FROM appliances_electronics_form
         WHERE room_id = $1
      `;

    const miscFormQuery = `
        SELECT * FROM miscellaneous_form
         WHERE room_id = $1
      `;

    // Using Promise.all to execute both queries concurrently
    const [paintResults, decorResults, appResultS, miscResults] = await Promise.all([
      pool.query(paintFormQuery, [req.params.id]),
      pool.query(decorFormQuery, [req.params.id]),
      pool.query(appFormQuery, [req.params.id]),
      pool.query(miscFormQuery, [req.params.id]),
    ]);

    res.send({
      paintForm: paintResults.rows,
      decorForm: decorResults.rows,
      appForm: appResultS.rows,
      miscForm: miscResults.rows,
    });
  } catch (err) {
    console.error('ERROR:', err);
    res.sendStatus(500);
  }
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
  pool.query(queryText, [decorFormSubmission.item, decorFormSubmission.purchasedFrom, decorFormSubmission.websiteLink, decorFormSubmission.additionalComments, decorFormSubmission.roomId])
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

  let queryText = `INSERT INTO "appliances_electronics_form" ("item", "brand_name","price_of_item", "model_number", "warranty_info", "additional_comments", "room_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  pool.query(queryText, [appliancesFormSubmission.item, appliancesFormSubmission.brandName, appliancesFormSubmission.priceOfItem, appliancesFormSubmission.modelNumber, appliancesFormSubmission.warrantyInfo, appliancesFormSubmission.additionalComments, appliancesFormSubmission.roomId])
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

router.delete('/paintform/:id', (req, res) => {

  const queryText = `DELETE FROM "paint_form" WHERE "id" = $1;`;

  const values = [req.params.id];

  pool.query(queryText, values)
    .then((result) => {
      console.log(`Succesfully deleted paint form`);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus('Error deleting stat', 500);
    })
});

router.delete('/decorform/:id', (req, res) => {

  const queryText = `DELETE FROM "decor_form" WHERE "id" = $1;`;

  const values = [req.params.id];

  pool.query(queryText, values)
    .then((result) => {
      console.log(`Succesfully deleted decor form`);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus('Error deleting stat', 500);
    })
});

router.delete('/appform/:id', (req, res) => {

  const queryText = `DELETE FROM "appliances_electronics_form" WHERE "id" = $1;`;

  const values = [req.params.id];

  pool.query(queryText, values)
    .then((result) => {
      console.log(`Succesfully deleted appliances and electroncs form`);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus('Error deleting stat', 500);
    })
});

router.delete('/miscform/:id', (req, res) => {

  const queryText = `DELETE FROM "miscellaneous_form" WHERE "id" = $1;`;

  const values = [req.params.id];

  pool.query(queryText, values)
    .then((result) => {
      console.log(`Succesfully miscellaneous form`);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus('Error deleting stat', 500);
    })
});

router.put('/paintform/:id', (req, res) => {
  let { id } = req.params;
  const updateValues = [req.body.brandName, req.body.paintColorName, req.body.paintFinish, req.body.additionalComments, id];

  const queryText = `
  UPDATE "paint_form"
  SET "brand_name" = $1, "paint_color_name" = $2, 
 "paint_finish" = $3, "additional_comments" = $4
  WHERE "id" = $5`

  pool.query(queryText, updateValues)
    .then((result) => {
      console.log(`Successfully updated paint form with ID ${id}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error updating paint form');
    });
});

router.put('/decorform/:id', (req, res) => {
  let { id } = req.params;
  const updateValues = [req.body.item, req.body.purchasedFrom, req.body.websiteLink, req.body.additionalComments, id];

  const queryText = `
  UPDATE "decor_form"
  SET "item" = $1, "purchased_from" = $2, 
 "website_link" = $3, "additional_comments" = $4
  WHERE "id" = $5`

  pool.query(queryText, updateValues)
    .then((result) => {
      console.log(`Successfully updated decor form with ID ${id}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error updating decor form');
    });
});

router.put('/appform/:id', (req, res) => {
  let { id } = req.params;
  const updateValues = [req.body.item, req.body.brandName, req.body.priceOfItem, req.body.modelNumber, req.body.warrantyInfo, req.body.additionalComments, id];

  const queryText = `
  UPDATE "appliances_electronics_form"
  SET "item" = $1, "brand_name" = $2, 
 "price_of_item" = $3, "model_number" = $4, 
 "warranty_info" = $5, "additional_comments" = $6
  WHERE "id" = $7`

  pool.query(queryText, updateValues)
    .then((result) => {
      console.log(`Successfully updated appliances + electronics form with ID ${id}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error updating appliances + electronics form');
    });
});

module.exports = router;