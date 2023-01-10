import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import path from 'path';
import Layout from '../../components/Layout';
import { getPostsByTag } from '../../lib/api';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

type TagPageProps = {
  posts: PostType[];
};

const TagPage = ({ posts }: TagPageProps): JSX.Element => {
  const router = useRouter();

  return (
    <Layout>
      <h1>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">Posts tagged with </span>
        <span className="text-2xl font-bold text-blue-400 dark:text-blue-400">#{router.query.tag}</span>
      </h1>
      {posts.map((post) => (
        <article key={post.slug} className="mt-12 rounded-md bg-black/5 dark:bg-white/5 p-4 hover:bg-[#f5f5f5] dark:hover:bg-[#1a1a1a]">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          {post.tags && (
            <ul className="flex flex-wrap mb-2 -ml-1 text-sm text-gray-500 dark:text-gray-400">
              {post.tags.map((tag) => (
                <li key={tag} className="ml-1 text-gray">
                  <Link as={`/tags/${tag}`} href={`/tags/[tag]`}>
                    <a className="hover:text-blue-400 dark:hover:text-blue-400">
                      #{tag}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <p className="mb-3">{post.description}</p>
        </article>
      ))}
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getPostsByTag(params.tag as string, ['date', 'description', 'slug', 'title', 'tags']);

  return {
    props: { posts },
  };
};

export const getStaticPaths: GetStaticPaths<{ tag: string }> = async () => {
  const tags = postFilePaths
    // Read markdown file as string
    .map((
      p // Read markdown file as string
    ) => fs.readFileSync(path.join(POSTS_PATH, p), 'utf8'))
    // Parse markdown frontmatter
    .map((p) => matter(p).data as PostType)
    // Get tags from frontmatter
    .map((p) => p.tags)
    // Flatten array
    .reduce((acc, current) => acc.concat(current), [])
    // Remove duplicate tags
    .filter((value, index, originalArray) => originalArray.indexOf(value) === index);
  
  return {
    paths: tags.map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
};

export default TagPage;