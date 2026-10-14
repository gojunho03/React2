import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/">Home</Link> &nbsp;
          {/* Prefetching: when the link is hovered or enters the viewport */}
          <Link href="/blog">Blog</Link> &nbsp;
          <Link href="/blog2">Blog2</Link> &nbsp;
          <Link href="/blog3">Blog3</Link> &nbsp;
          {/* No prefetching */}
          <a href="/contact">Contact</a>
        </nav>
        {children}
      </body>
    </html>
  );
}