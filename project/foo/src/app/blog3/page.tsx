import Link from "next/link";
import { posts } from "@/app/posts";

export default function Blog() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center">
        <div>
          <h1>블로그 목록</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog3/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}