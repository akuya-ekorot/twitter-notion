const uuid = require('uuid');
const axios = require('axios');

export default async (code) => {
    const config = {
        url: "https://api.twitter.com/2/oauth2/token",
        method: "POST",
        headers: {
            // "Authorization": `OAuth oauth_consumer_key="${process.env.CONSUMER_KEY}", oauth_nonce="${uuid.v4()}", oauth_signature="oauth_signature", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(Date.now() / 1000)}", oauth_version="2.0`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        params: {
            client_id: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
            grant_type: "refresh_token",
            refresh_token: code,
        },
        auth: {
            username: process.env.NEXT_PUBLIC_CLIENT_ID,
            password: process.env.CLIENT_SECRET
        }
    }

    const result = await axios(config).then(response => { console.log(response) }).catch(error => { console.error(error) });
    return result;
}