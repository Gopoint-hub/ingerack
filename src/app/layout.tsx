import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Somos Ingenieros Fabricantes de Rack para Bodegas en Chile",
  description:
    "Entregamos tu rack para bodegas pequeñas o grandes, desde 3 semanas, desarmamos, transportamos, montamos, optimizamos costos por escala, garantía mín. 2 años",
  icons: {
    icon: "/images/ingerack-ico.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jost.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
