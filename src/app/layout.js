import "./globals.css";

export const metadata = {
  title: "ZAMAN Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
