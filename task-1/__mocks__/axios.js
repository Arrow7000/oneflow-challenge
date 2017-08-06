const ts = require('./ts.json');

const axios = {
    get() {
        return new Promise(resolve => resolve({ data: ts }));
    }
}

module.exports = axios;
