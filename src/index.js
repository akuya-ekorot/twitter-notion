const express = require('express');
const axios = require('axios');
var uuid = require('uuid');
const dotenv = require('dotenv')
dotenv.config()

const app = express();

const config = {
  method: "POST",
  url: "https://api.twitter.com/oauth/request_token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `OAuth oauth_consumer_key="${process.env.CONSUMER_KEY}", oauth_nonce="${uuid.v4()}", oauth_signature="oauth_signature", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(Date.now() / 1000)}", oauth_version="1.0"`
  },
  params: {
    "oauth_callback": new URL("http://localhost:3000/callback"),
  },
  "accept-encoding": ["gzip", "deflate", "br"]
}

axios(config).then((response) => {
  console.log(response)
});


const port = process.env.PORT | 3000;
app.listen(port, () => { console.log(`App Listening at http://localhost:${port}`) })