import Link from "next/link";
import React from "react";

const ProductListPage = () => {
  return (
    <>
      <div>ProductListPage</div>;
      <br />
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/product/1">Product 1</Link>
        </li>
        <li>
          <Link href="/product/2" replace>
            Product 2
          </Link>
        </li>
        <li>
          <Link href="/product/3">Product 3</Link>
        </li>
      </ul>
    </>
  );
};

export default ProductListPage;
