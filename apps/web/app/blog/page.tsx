import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { getAllPosts, formatDate } from '@/lib/blog';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Blog',
  description: `News, updates, and stories from the ${siteConfig.name} team.`
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <section data-component="blog-list" className="py-24 sm:py-28">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mt-4 text-muted-foreground">
          News, product updates, and stories from the {siteConfig.name} team.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-muted-foreground">No posts yet — check back soon.</p>
        ) : (
          <div className="mt-12 space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                  {post.author && ` · ${post.author}`}
                </div>
                <h2 className="mt-2 text-xl font-semibold group-hover:text-primary">{post.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
