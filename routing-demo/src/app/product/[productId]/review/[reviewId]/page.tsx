import React from "react";

const ProductReviewPage = async (props: {
  params: Promise<{ productId: string | string; reviewId: string }>;
}) => {
    const { productId, reviewId } = await props.params;
    console.log(props.params);
    console.log(typeof props.params);
  return (
    <div>{`ProductReviewPage of ${productId} with review id ${reviewId}`}</div>
  );
};

export default ProductReviewPage;
