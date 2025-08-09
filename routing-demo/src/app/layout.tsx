import { ReactNode } from "react";
const metadata = {
  title: "Nextjs",
  description: "Learning new things",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
