const fetch = require('node-fetch');
const { serverUrl } = require('../config/index')

async function getClubs() {
    const res = await fetch(`${serverUrl}/api/v1/clubs/`);
    return res.json();
}

async function getClub(clubId) {
    const res = await fetch(`${serverUrl}/api/v1/club/${clubId}`);
    return res.json();
}

module.exports = {
    getClubs,
    getClub,
}