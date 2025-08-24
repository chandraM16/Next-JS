import { ReactNode } from "react";
const metadata = {
  title: "Nextjs",
  description: "Learning new things",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <header
          style={{
            background: "black",
            color: "white",
          }}
        >
          <h2>Heading 1</h2>
        </header>
        {children}
      </body>
      <footer style={{ background: "beige", color: "black" }}>
        <h2>Footer</h2>
      </footer>
    </html>
  );
}
