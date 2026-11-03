import { NextApiRequest, NextApiResponse } from 'next';
import readingTime from 'reading-time';

import { Post } from '../../../models/Post';

/**
 * Serverless funciton for /api/posts.
 * Fetches posts from DEV.to with given params.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const id = String(req.query.id);
    if (!isValidId(id)) {
      res.status(400).send('Invalid id.');
      return;
    }
    const post = await getPostById(id);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).send('Internal Server Error.');
  }
};

/**
 * Retrieves a list of articles from DEV.to for matching query params.
 * @param param of type {@link GetPostsProps}.
 */
export const isValidId = (id: string): boolean => /^\d+$/.test(id);

export async function getPostById(id: string): Promise<Post> {
  // The id ends up in a URL requested with our API key attached, so only
  // plain numeric ids are allowed (no path segments).
  if (!isValidId(id)) {
    throw new Error('Invalid post id');
  }
  console.log('\nGetting post by id', id);
  const headers = new Headers();
  if (process.env.DEV_TO_TOKEN) {
    headers.append('api-key', process.env.DEV_TO_TOKEN);
  }

  const url = `https://dev.to/api/articles/${id}`;

  console.log(url);

  const response = await fetch(url, {
    headers
  });
  if (!response.ok) {
    throw new Error(`DEV.to request failed: ${response.status}`);
  }
  const post: Post = await response.json();

  // This endpoints give tag_list as string,
  // So populating it from tags which is an array.
  post.tag_list = post.tags;

  post.readingTime = readingTime(post.body_markdown).text;

  return post;
}
