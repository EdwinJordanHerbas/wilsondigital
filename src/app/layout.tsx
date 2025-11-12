import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WilsonDigital | Agencia y Restauración",
  description:
    "Plataforma digital para restaurantes y negocios locales — web, reservas, promociones y gestión visual de contenido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col bg-white text-slate-900 antialiased`}
      >
        {/* Header */}
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="container-page h-16 flex items-center justify-between">
            <div className="text-lg font-bold tracking-tight">
              WilsonDigital
            </div>
            <nav className="hidden sm:flex gap-6 text-sm text-slate-600">
              <a href="#carta" className="hover:text-slate-900">
                Carta
              </a>
              <a href="#promos" className="hover:text-slate-900">
                Promociones
              </a>
              <a href="#reservas" className="hover:text-slate-900">
                Reservas
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200">
          <div className="container-page py-8 text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} WilsonDigital — Edwin Futuro Millonario 
          </div>
        </footer>
      </body>
    </html>
  );
}
