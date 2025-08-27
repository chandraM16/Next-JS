import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";

interface ProductPageProps {
  // Add expected props here, for example:
  params: {
    productId: Promise<{ productId: string }> | string;
  };
}

// export const generateMetadata = async ({
//   params,
// }: ProductPageProps): Promise<Metadata> => {
//   const id = (await params).productId;
//   // you can make an API call here
//   return {
//     title: `Product ${id}`,
//   };
// };
export const generateMetadata = ({ params }: ProductPageProps): Metadata => {
  const id = params.productId;
  // you can make an API call here
  return {
    title: `Product ${id}`,
  };
};

const ProductPage = async (props: ProductPageProps) => {
  const productId = (await props.params).productId;

  if (+productId > 1000) {
    notFound(); // This will trigger the not-found page
    return null; // This line is optional, as notFound will redirect
  }
  return <div>{`ProductPage of product ${productId} `}</div>;
};

export default ProductPage;
