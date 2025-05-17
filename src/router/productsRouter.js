import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


const productRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// โหลด products.json
let products = [];
try {
  const data = await fs.readFile(path.join(__dirname, '../data/products.json'), 'utf-8');
  const jsonData = JSON.parse(data);
  products = jsonData.products;
} catch (error) {
  console.error("❌ Failed to load products.json:", error);
}

// Routes
productRouter.get("/", (req, res) => {
  res.render("products", { products });
});

productRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).send("Product not found");
  res.render("product", { product });
});

export default productRouter;
