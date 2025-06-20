'use server';

import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function toggleTodoCompletion(formData: FormData) {
  const id = formData.get('id') as string;
  const complete = formData.get('complete') === 'true';
  const user = await currentUser();

  if (!user) throw new Error('Not authenticated');
  if (!id) throw new Error('No todo ID provided');

  // Toggle the completion status
  const updatedTodo = await prisma.todo.update({
    where: {
      id,
      userId: user.id,
    },
    data: {
      complete: !complete,
    },
  });

  // If the todo is now complete (after toggling)
  if (!complete) {
    // Add to history
    await prisma.history.create({
      data: {
        title: updatedTodo.title,
        userId: user.id,
      },
    });
    // Delete from todos
    await prisma.todo.delete({
      where: { id, userId: user.id },
    });
  }

  redirect('/dashboard');
  return updatedTodo;
}
