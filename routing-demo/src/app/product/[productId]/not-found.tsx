"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ProductNotFoundPage = () => {
  const pathName = usePathname(); //
  console.log("pathName", pathName); // This will log the current pathname, useful for debugging
  return <div>ProductNotFoundPage</div>;
};

export default ProductNotFoundPage;
