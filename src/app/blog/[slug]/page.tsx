import { Metadata } from "next";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ✅ FIXED generateMetadata
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;   // ✅ unwrap params
  const blog = await getBlog(slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      type: "article",
    },
  };
}

// ✅ FIXED Page Component
export default async function BlogDetail(
  { params }: { params: Promise<{ slug: string }> }
) {

  const { slug } = await params;   // ✅ unwrap params
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <h1>Blog not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <Link
            href="/blog"
            className="text-yellow-500 text-sm hover:underline mb-8 inline-block"
          >
            ← Back to Articles
          </Link>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[450px] object-cover rounded-3xl mb-12"
          />

          <h1 className="text-4xl md:text-5xl font-light mb-6">
            {blog.title}
          </h1>

          <p className="text-gray-500 text-sm mb-12">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>

          <article
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>
    </main>
  );
}