import React from 'react';
import Layout from '../components/Layout';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Jose Thomaz',
      }}
    >
      <h1>About Page</h1>
      <p><b>Hello, I&apos;m Jose Thomaz 👋.</b></p>
      <p>
        I&apos;m a brazilian software engineer, student and a writer. I&apos;m currently working as a
        fullstack developer. I love to write about my studies and thoughts, because I feel that
        I can learn more by doing so.
      </p>
      <br />
      <p>
        In this website you will find articles written by me, and also a list of my favorite books and articles.
      </p>
      <br />

      <h2>
        Social Media
      </h2>

      <div className='flex flex-row mt-5'>
        <a href='https://twitter.com/thz00' className='mr-4' target='_blank' rel="noreferrer">
          <FiTwitter size={26} />
        </a>
        <a href='https://www.linkedin.com/in/jose-thomaz' className='mr-4' target='_blank' rel="noreferrer">
          <FiLinkedin size={26} />
        </a>
        <a href='https://github.com/josethz00' target='_blank' rel="noreferrer">
          <FiGithub size={26} />
        </a>
      </div>
    </Layout>
  );
};

export default About;
