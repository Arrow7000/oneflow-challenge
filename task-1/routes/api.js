const express = require('express');
const router = express.Router();
const filter = require('../helpers/filter');
const getAlbums = require('../helpers/get-albums');


// Routes
router.get('/albums', async(req, res) => {
    const { artist } = req.query;

    const results = await getAlbums(artist)

    const filtered = filter(results);
    res.send(filtered);
});

module.exports = router;
