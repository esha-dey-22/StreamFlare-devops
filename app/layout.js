export const metadata = {
  title: "StreamFlare",
  description: "Online entertainment hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}