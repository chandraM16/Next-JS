import { notFound } from "next/navigation";
import React from "react";

interface ProductPageProps {
  // Add expected props here, for example:
  params: {
    productId: Promise<{ productId: string }> | string;
  };
}

const ProductPage = async (props: ProductPageProps) => {
  const productId = (await props.params).productId;

  if (+productId > 1000) {
    notFound(); // This will trigger the not-found page
    return null; // This line is optional, as notFound will redirect
  }
  return <div>{`ProductPage of product ${productId} `}</div>;
};

export default ProductPage;
