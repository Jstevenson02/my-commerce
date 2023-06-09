import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    }
    res.json(await Product.find());
  }

  if (method === "POST") {
    const { name, description, price } = req.body;

    const productDoc = await Product.create({
      name,
      description,
      price,
    });

    res.json(productDoc);
  }

  if (method === "PUT") {
    const { name, description, price, _id } = req.body;

    await Product.updateOne({ _id }, { name, description, price });

    res.json(true);
  }
}
