import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({
  name: currentName,
  description: currentdDescrition,
  price: currentPrice,
}) {
  const [name, setName] = useState(currentName || "");
  const [description, setDescription] = useState(currentdDescrition || "");
  const [price, setPrice] = useState(currentPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function createProduct(e) {
    e.preventDefault();
    const data = { name, description, price };
    await axios.post("/api/products", data);
    setGoToProducts(true);
  }

  if (goToProducts === true) {
    router.push("/products");
  }

  return (
    <form onSubmit={createProduct}>
      <label>Product Name</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="product name"
      ></input>

      <label>Description</label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="description"
      ></textarea>

      <label>Price</label>
      <input
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        placeholder="product price"
      ></input>
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
