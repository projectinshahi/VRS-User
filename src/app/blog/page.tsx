import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  createdAt: string;
}

export const metadata: Metadata = {
  title: "Real Estate Blog | VRS Real Invest",
  description:
    "Explore premium real estate insights, luxury investment strategies, and expert market analysis from VRS Real Invest.",
};

async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog`,
      { cache: "no-store" }
    );

    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      <Navbar />

      <main className="flex-1 ">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            {/* Hero */}
            <div className="text-center mb-16">
              <div className="w-10 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
              <h1 className="text-3xl md:text-5xl font-light tracking-wide leading-tight">
                Market Insights & Investment Intelligence
              </h1>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                Expert perspectives, strategic investment insights, and
                premium real estate analysis tailored for sophisticated investors.
              </p>
            </div>

            {/* Blog Grid */}
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group block border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md hover:border-yellow-500/40 transition duration-500"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>

                      <h2 className="text-lg font-light mb-3 group-hover:text-yellow-500 transition">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <span className="text-yellow-500 text-sm font-medium tracking-wide">
                        Continue Reading →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[40vh] text-gray-500 text-sm">
                No blog articles available.
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}