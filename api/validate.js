export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ resultCode: 1, message: "METHOD_NOT_ALLOWED" });

  const body = req.body || {};
  const token = body.token || "";

  const SECRET = "e5b1c29bc42a30a106d76201becb7a8a5329cc27d2e4d4396a58be332bba7b78";

  if (token === SECRET) {
    return res.status(200).json({ resultCode: 0, message: "OK" });
  } else {
    return res.status(403).json({ resultCode: 1, message: "INVALID_TOKEN" });
  }
}
