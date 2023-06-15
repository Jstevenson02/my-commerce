import Link from "next/link.js";
import Layout from "./components/layout";

export default function Products() {
  return (
    <Layout>
      <Link
        className="text-white bg-purple-600 p-1 rounded-md"
        href={"/products/new"}
      >
        Add New Product{" "}
      </Link>
    </Layout>
  );
}
