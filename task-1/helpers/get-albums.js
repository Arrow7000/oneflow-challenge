const axios = require('axios');

const apiRoot = 'https://itunes.apple.com/search?';

async function getAlbums(artist) {
    const encodedArtist = encodeURIComponent(artist);
    const url = `${apiRoot}entity=album&term=${encodedArtist}`;

    const response = await axios.get(url);
    const { results } = response.data;
    return results;
}

module.exports = getAlbums;
