const filter = require('./filter');

test('filter removes duplicates', () => {
    const albums = [
        { collectionName: 'test 1' },
        { collectionName: 'test 1' },
        { collectionName: 'test 2' },
        { collectionName: 'test 3' },
        { collectionName: 'test 3' },
        { collectionName: 'test 4' },
        { collectionName: 'test 5' },
    ];

    expect(filter(albums).length).toBe(5);
});
