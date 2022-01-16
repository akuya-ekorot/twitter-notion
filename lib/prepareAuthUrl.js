export const prepareAuthUrl = () => {
    const baseUrl = "https://twitter.com/i/oauth2/authorize?";
    const responseType = "response_type=code";
    const clientID = `client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`;
    const redirectUri = `redirect_uri=http://localhost:3000/callback`;
    const scope = "scope=tweet.write%20offline.access";
    const state = "state=state";
    const codeChallenge = "code_challenge=challenge&code_challenge_method=plain";
    const and = "&";

    const url = baseUrl + responseType + and + clientID + and + redirectUri + and + scope + and + state + and + codeChallenge;

    return url;
}

export const redirectToAuthUrl = (url) => {
    return `location.href = ${url}`;
}