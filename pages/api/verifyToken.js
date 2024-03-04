import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const data = req.body;
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
      res.status(200).json({
        message: "Token verification successfull",
        data: {
          payload: decoded,
        },
      });
    } catch (error) {
      res.status(401).json({ message: "Token expired" });
    }

    if (data) {
    } else {
      res.status(404).json({ message: "Params missing" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
