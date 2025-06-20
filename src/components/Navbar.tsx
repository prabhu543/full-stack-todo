import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs';
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
	return (
		<header className='fixed top-0 w-full flex justify-between items-center px-6 p-4 bg-gradient-to-br from-blue-100 to-blue-300'>
			<h3>logo</h3>
			<div className='flex gap-4'>
				<SignedOut>
					<SignInButton>
						<Button variant='outline'>Sign In</Button>
					</SignInButton>
					<SignUpButton>
						<Button variant='default'>Sign Up</Button>
					</SignUpButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</header>
	);
};

export default Navbar;
