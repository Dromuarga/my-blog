import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-stone-700 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Eliza's blog</h1>
        </Link>
        <p className="text-slate-300">Welcome to my tech blog.</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <p>Developed by Eliza</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
