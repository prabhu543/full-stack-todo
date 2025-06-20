import React from 'react';

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className='min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-blue-100 to-blue-300'>
			{children}
		</div>
	);
}
