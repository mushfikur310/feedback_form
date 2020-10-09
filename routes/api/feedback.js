const express = require('express');
const db = require('../../config/db');

const router = express.Router();


// @route   POST api/feedback
// @desc    Feedback generator
// @access  Public
router.post('/', async (req, res) => {
    debugger;
    try {
        let dbc = await db.dbConn();
        let insert  = await dbc.collection('feedback').insertOne(req.body[0]);
        res.json({success: true, msg: 'data inserted'});
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;