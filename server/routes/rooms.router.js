const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let addRoomSubmission = req.body;

    if (req.isAuthenticated()) {

        let queryText = `INSERT INTO "rooms" ("room_name", "image", "user_id")
  VALUES ($1, $2, $3);`;
        pool.query(queryText, [addRoomSubmission.roomName, addRoomSubmission.photo, req.user.id])
            .then(result => {
                res.sendStatus(201);
            })
            .catch(error => {
                console.log(`Error adding new room`, error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(401);
    }
});

router.get('/', (req, res) => {
    console.log('/');
    console.log('is authenticated?', req.isAuthenticated());
    if(req.isAuthenticated()) {
        let queryText = `SELECT * FROM "rooms" WHERE "user_id" = $1;`;
        let queryParams = [req.user.id];
        pool.query(queryText, queryParams).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(401);
    }
});

module.exports = router;