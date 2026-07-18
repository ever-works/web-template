import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site.config';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');
  const staticRoutes = ['', '/about', '/pricing', '/contact', '/blog'].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
  const postRoutes = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : new Date()
  }));
  return [...staticRoutes, ...postRoutes];
}
