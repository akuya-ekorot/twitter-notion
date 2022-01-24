import prepareAuthUrl from "../../lib/prepareAuthUrl";

export default function handler(req, res) {
    const url = prepareAuthUrl();
    res.status(200).redirect(url);
}