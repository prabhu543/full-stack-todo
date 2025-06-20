import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

const history = async () => {
	const user = await currentUser();

	return await prisma.history.findMany({
		where: { userId: user?.id },
		orderBy: { completedAt: 'desc' },
	});
};

export default history;
