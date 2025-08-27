import React from "react";

export const metadata = {
  title: "About Page",
  description: "This is About Page",
};
const AboutPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>AboutPage</div>;
};

export default AboutPage;
