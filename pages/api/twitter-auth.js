// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getAccessToken from "../../lib/getAccessToken";

export default async function handler(req, res) {
  const code = req.query.code;
  console.log(code)

  const response = await getAccessToken(code);

  res.status(200).json({data: response});
}
