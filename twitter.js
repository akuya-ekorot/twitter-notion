import express from "express";
import { TwitterApi } from "twitter-api-v2";

const app = express()
const port = 3000

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CALLBACK_URL = "http://localhost:3000/callback";


const client = new TwitterApi({ clientId: CLIENT_ID, clientSecret: CLIENT_SECRET });
const { url, codeVerifier, state } = client.generateOAuth2AuthLink(CALLBACK_URL);

app.set

app.get("/callback", (req, res) => {
    // const { state, code } = req.query;
    // const { codeVerifier, state: sessionState } = req.session;

    // if (!codeVerifier || !state || !sessionState || !code) {
    //     return res.status(400).send('You denied the app or your session expired!');
    // }
    // if (state !== sessionState) {
    //     return res.status(400).send('Stored tokens didnt match!');
    // }

    const client = new TwitterApi({ clientId: CLIENT_ID, clientSecret: CLIENT_SECRET });
    const { url, codeVerifier, state } = client.generateOAuth2AuthLink(CALLBACK_URL);

    client.v2.tweet("Hello Twitter API");


})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})