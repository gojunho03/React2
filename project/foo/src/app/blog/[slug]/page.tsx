import { posts } from "@/app/posts";

export default function Post({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <h1>게시글을 찾을 수 없습니다</h1>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}