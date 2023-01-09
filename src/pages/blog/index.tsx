import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Blog.module.css';

/**
 *
 * @returns {JSX.Element}
 */
function Blog(): JSX.Element {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>

			<main className={styles.mainContainer}>
				<h1>Blog</h1>
				<div className={styles.blogCardSection}>
					<div className={styles.blogCard}>
						<img
							src="https://images.unsplash.com/photo-1658808183977-e13990f808e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=100"
							alt=""
						/>
						<div>
							<h2>Some post</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							<span>JOSÉ THOMAZ - MAY 2022</span>
						</div>
					</div>
					<div className={styles.blogCard}>
						<img
							src="https://images.unsplash.com/photo-1658808183977-e13990f808e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=100"
							alt=""
						/>
						<div>
							<h2>Some post</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							<span>JOSÉ THOMAZ - MAY 2022</span>
						</div>
					</div>
					<div className={styles.blogCard}>
						<img
							src="https://images.unsplash.com/photo-1658808183977-e13990f808e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=100"
							alt=""
						/>
						<div>
							<h2>Some post</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							<span>JOSÉ THOMAZ - MAY 2022</span>
						</div>
					</div>
					<div className={styles.blogCard}>
						<img
							src="https://images.unsplash.com/photo-1658808183977-e13990f808e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=100"
							alt=""
						/>
						<div>
							<h2>Some post</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							<span>JOSÉ THOMAZ - MAY 2022</span>
						</div>
					</div>

					<p className={styles.seeMoreBlogposts}>
						See more posts{' '}
						<Link href="/">
							<b>here &rarr;</b>
						</Link>
					</p>
				</div>
			</main>
		</>
	);
}

export default Blog;
