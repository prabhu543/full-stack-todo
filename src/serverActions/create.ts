'use server';

import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export async function createTodo(formData: FormData) {
  const user = await currentUser();
  if (!user) throw new Error("Not signed in!");

  const title = formData.get('title') as string;

  await prisma.todo.create({
    data: {
      title,
      complete: false,
      userId: user.id, // Clerk user ID
    },
  });

  redirect('/dashboard');
}
