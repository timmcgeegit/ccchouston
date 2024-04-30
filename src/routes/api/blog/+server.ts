// ccchouston/src/routes/api/blog/+server.ts
import fs from 'fs/promises';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const filePath = 'src/content/blog/posts.json';

export const GET: RequestHandler = async ({ url }) => {
  const id = url.searchParams.get('id');
  if (id) {
    const data = await fs.readFile(filePath, 'utf-8');
    const posts = JSON.parse(data);
    const post = posts.find((p) => p.id === parseInt(id));
    if (post) {
      return json(post);
    } else {
      return json({ message: 'Blog post not found' }, { status: 404 });
    }
  } else {
    const data = await fs.readFile(filePath, 'utf-8');
    const posts = JSON.parse(data);
    return json(posts);
  }
};

export const POST: RequestHandler = async ({ request }) => {
  const post = await request.json();
  const data = await fs.readFile(filePath, 'utf-8');
  const posts = JSON.parse(data);
  const newPost = { ...post, id: posts.length + 1 };
  posts.push(newPost);
  await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
  return json(newPost);
};

export const PUT: RequestHandler = async ({ request }) => {
  const updatedPost = await request.json();
  const data = await fs.readFile(filePath, 'utf-8');
  const posts = JSON.parse(data);
  const index = posts.findIndex((p) => p.id === updatedPost.id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost };
    await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
  }
  return json(updatedPost);
};

export const DELETE: RequestHandler = async ({ request }) => {
  const { id } = await request.json();
  const data = await fs.readFile(filePath, 'utf-8');
  const posts = JSON.parse(data);
  const updatedPosts = posts.filter((p) => p.id !== id);
  await fs.writeFile(filePath, JSON.stringify(updatedPosts, null, 2));
  return json({ message: 'Blog post deleted' });
};