function filter(albumList) {
    const map = {};
    for (const album of albumList) {
        const title = album.collectionName;
        map[title] = album;
    }

    const filtered = Object.values(map);
    return filtered;
}

module.exports = filter;
