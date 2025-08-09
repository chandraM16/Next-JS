import React from "react";

interface ProductPageProps {
  // Add expected props here, for example:
  params: {
    productId: Promise<{ productId: string }> | string;
  };
}

const ProductPage = async (props: ProductPageProps) => {
  const productId = (await props.params).productId;
  return <div>{`ProductPage of product ${productId} `}</div>;
};

export default ProductPage;
