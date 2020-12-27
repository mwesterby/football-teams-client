const fetch = require('node-fetch');
const { serverUrl } = require('../config/server')

export async function getClubs() {
    const res = await fetch(`${serverUrl}/api/v1/clubs/`);
    return res.json();
}

export async function getClub(clubId) {
    const res = await fetch(`${serverUrl}/api/v1/club/${clubId}`);
    return res.json();
}

export async function updateClub(clubId, body) {
    const res = await fetch(`${serverUrl}/api/v1/club/${clubId}`, { 
        method: 'PUT', 
        body: JSON.stringify(body), 
        headers: { 'Content-Type': 'application/json' }
    });
    return res.json();
}
