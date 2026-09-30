import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <Link href="/about">Go to About</Link>
    </div>
  );
}