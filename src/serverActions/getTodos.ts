import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

const getTodos = async () => {
	const user = await currentUser();
	if (!user) {
		throw new Error('User not authenticated');
	}
	// Only fetch todos belonging to the current user
	return await prisma.todo.findMany({
		where: { userId: user.id },
		orderBy: { createdAt: 'desc' },
	});
};
export default getTodos;
