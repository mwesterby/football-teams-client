const fetch = require('node-fetch');
const { serverUrl } = require('../config/index')

async function getClubs() {
    const res = await fetch(`${serverUrl}/api/v1/clubs/`);
    return res.json();
}

module.exports = {
    getClubs,
}