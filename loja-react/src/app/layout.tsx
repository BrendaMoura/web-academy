import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Loja WA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <main>
          <div className="container p-5">{children}</div>
        </main>
      </body>
    </html>
  );
}
