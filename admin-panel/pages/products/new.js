import { useState } from "react";
import Layout from "../../components/layout";
import axios from "axios";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct() {
    const data = { title, description, price };
    await axios.post("/api/products", data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
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
    </Layout>
  );
}
