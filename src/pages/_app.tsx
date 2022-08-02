import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Icon } from '@iconify/react';
import { useState } from 'react';

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
				<h3>José Thomaz</h3>
				<div>
					<Icon
						icon={theme === 'dark' ? 'bi:moon-stars-fill' : 'bi:sun-fill'}
						fontSize={24}
						className="styles.switchThemeIcon"
						onClick={switchTheme}
					/>
				</div>
			</header>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
