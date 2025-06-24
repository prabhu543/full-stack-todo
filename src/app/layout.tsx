import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/themeProvider';

const work_Sans = Work_Sans({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Todo Flow',
	description: 'Todo App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html
				lang='en'
				suppressHydrationWarning>
				<body className={`${work_Sans.className}`}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						<Navbar />
						<main>{children}</main>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
