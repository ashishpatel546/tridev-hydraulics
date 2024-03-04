import fs, { write, writeFile } from "fs";
import path from "path";
import multer from "multer";
import formidable from "formidable";
import jwt from "jsonwebtoken";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public"); 
  },
  filename: function (req, file, cb) {
    cb(null, "test.jpg"); // Adjust filename as needed
  },
});

// const upload = multer({
//   storage: storage,
// });
const upload = multer({
  dest: 'public/'
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const data = json.parse(req.body)
  const file = req.body.file;
  if (!file) {
    return res.status(400).json({ error: 'No file provided' });
  }

  const fileName = file.name;
  const filePath = path.join(process.cwd(), 'public', fileName);

  try {
    await fs.promises.writeFile(filePath, file);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving file:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }


  try {
    upload.single("image")(req, res, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Internal Server Error", error: err });
      }

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      return res.status(200).json({ message: "File uploaded successfully" });
    });

    const filePath = path.join(
      process.cwd(),
      "/app/productData/equipmentData.json"
    );
    const data = fs.readFileSync(filePath, "utf8");
    let products = JSON.parse(data);

    const newProduct = req.body;
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
    } catch (error) {
      res.status(401).join({ message: "Token expired" });
    }

    const index = products.findIndex((product) => product.id === newProduct.id);

    if (index !== -1) {
      const oldData = products[index];
      newProduct.img = oldData.img;
      products[index] = newProduct;
      const updatedData = JSON.stringify(products, null, 2);
      fs.writeFileSync(filePath, updatedData, "utf8");

      res.status(200).json({ message: "Product updated successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
