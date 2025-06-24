import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs';
import React from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
	return (
		<header className='fixed top-0 w-full flex justify-between items-center px-6 p-4'>
			<h3>logo</h3>
			<div className='flex gap-4'>
				<ModeToggle />
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
