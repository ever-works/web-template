import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

export interface Post extends PostMeta {
  content: string;
}

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ? String(data.date) : '',
    author: data.author ?? '',
    content
  };
}

/** All posts, newest first. Read at build time (static generation). */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { content: _content, ...meta } = readPost(f);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  try {
    return readPost(`${slug}.md`);
  } catch {
    return null;
  }
}

export function formatDate(date: string): string {
  if (!date) return '';
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
