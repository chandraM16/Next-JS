import React from "react";

const DocCommonPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  console.log("DocCommonPage params:", slug);
  return <div>DocCommonPage</div>;
};

export default DocCommonPage;
