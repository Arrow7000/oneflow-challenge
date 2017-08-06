const axios = require('axios');
const getAlbums = require('./get-albums');
const albums = require('../__mocks__/ts.json');


// jest.mock('../__mocks__/axios');
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);
mock.onGet('https://itunes.apple.com/search').reply(200, albums);


test('getAlbums returns albums correctly', async() => {
    expect.assertions(1);

    const response = await getAlbums('example.com');

    expect(response.data).toMatchObject(albums.results);
});
