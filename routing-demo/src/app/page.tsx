import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Chandan's Next JS Practice",
    template: "%s | Chandan's Next JS Practice",
  },
  description: "This is Home Page",
};

const Home = () => {
  return (
    <div>
      Home Page
      <Link href="/about">About Page</Link>
      <Link href="/product">Product List Page</Link>
    </div>
  );
};

export default Home;
