import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Welcome to my blog! Here I write about my studies and thoughts:</p>
      <ul className="list-disc pl-4 my-6">
        <li>Software Engineering</li>
        <li className="mt-2">Computer Science</li>
        <li className="mt-2">Economics</li>
        <li className="mt-2">Philosophy</li>
        <li className="mt-2">Databases</li>
      </ul>

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
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'tags']);

  return {
    props: { posts },
  };
};

export default Index;
