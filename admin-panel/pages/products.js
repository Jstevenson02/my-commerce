import Link from "next/link.js";
import Layout from "../components/layout";

export default function Products() {
  return (
    <Layout>
      <Link className="btn-primary" href={"/products/new"}>
        Add New Product{" "}
      </Link>
    </Layout>
  );
}
