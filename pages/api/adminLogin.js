import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const data = req.body;

    if (data) {
      const { name, password } = data;
      if (
        name === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
      ) {
        const token = jwt.sign({ name }, process.env.NEXT_PUBLIC_JWT_SECRET, {
          expiresIn: "60m",
        });

        res.status(200).json({
          message: "Logged in sucessfully",
          token,
        });
      }
    } else  {
      res.status(404).json({ message: "Params missing" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
