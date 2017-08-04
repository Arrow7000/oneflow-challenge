const express = require('express');
const router = express.Router();
const axios = require('axios');


const apiRoot = 'https://itunes.apple.com/search?';

// Helpers
function filter(albumList) {
    const map = {};
    for (const album of albumList) {
        const title = album.collectionName;
        map[title] = album;
    }

    const filtered = Object.values(map);
    return filtered;
}

// Routes
router.get('/albums', async(req, res) => {
    const { artist } = req.query;
    const encodedArtist = encodeURIComponent(artist);
    const url = `${apiRoot}entity=album&term=${encodedArtist}`;

    const response = await axios.get(url);
    const { results } = response.data;
    const filtered = filter(results);

    res.send(filtered);
});

module.exports = router;
