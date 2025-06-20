'use server';

import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const deleteTodo = async (formData: FormData) => {
	const id = formData.get('id') as string;
	const user = await currentUser();

	if (!id) {
		throw new Error('No todo ID provided');
	}
	if (!user) {
		throw new Error('User not authenticated');
	}

	await prisma.todo.delete({
		where: {
			id,
			userId: user.id,
		},
	});

	redirect('/dashboard');
};

export default deleteTodo;
