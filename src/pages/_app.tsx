import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Link from 'next/link';

/**
 *
 * @param param0
 * @returns
 */
function MyApp({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useState<'dark' | 'light'>('dark');

	/**
	 * Function to switch theme
	 */
	function switchTheme(): void {
		if (theme === 'dark') setTheme('light');
		else setTheme('dark');
	}

	return (
		<div className={`container ${theme}`}>
			<header className="header">
				<Link href="/">
					<h3>José Thomaz</h3>
				</Link>
				<div>
					<Icon
						icon={theme === 'dark' ? 'bi:moon-stars-fill' : 'bi:sun-fill'}
						fontSize={24}
						className="switchThemeIcon"
						onClick={switchTheme}
					/>
				</div>
			</header>
			<Component {...pageProps} />
			<footer className="footer">
				<p>
					{new Date().getFullYear()} - {''}
				</p>
				<div className="footerIcons">
					<Icon icon="academicons:stackoverflow" fontSize={25} />
					<Icon icon="ant-design:github-filled" fontSize={25} />
					<Icon icon="ant-design:twitter-outlined" fontSize={25} />
					<Icon icon="ant-design:linkedin-filled" fontSize={25} />
				</div>
			</footer>
		</div>
	);
}

export default MyApp;
