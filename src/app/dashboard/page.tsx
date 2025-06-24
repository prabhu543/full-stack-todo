import Link from 'next/link';
import { Button } from '@/components/ui/button';
import deleteTodo from '@/serverActions/deleteTodo';
import { Input } from '@/components/ui/input';
import getTodos from '@/serverActions/getTodos';
import toggleTodoCompletion from '@/serverActions/toggleTodoCompletion';

export default async function Dashboard() {
	function StatusBadge({ complete }: { complete: boolean }) {
		return (
			<span
				className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
					complete
						? 'bg-green-100 text-green-700'
						: 'bg-yellow-100 text-yellow-700'
				}`}>
				{complete ? 'Completed' : 'Pending'}
			</span>
		);
	}

	const todos = await getTodos();

	return (
		<main className='p-4 py-10'>
			<Link href='/dashboard/history'>
				<Button variant='link'>History </Button>
			</Link>
			<section className='max-w-3xl mx-auto shadow-lg rounded-lg p-8 border-1 border-blue-500'>
				<header className='flex items-center justify-between mb-8'>
					<h1 className='text-2xl font-bold'>My Todos</h1>
					<Link href='/dashboard/new'>
						<Button variant='default'>+ New Todo</Button>
					</Link>
				</header>

				{todos.length === 0 ? (
					<div className='text-center text-gray-500 py-10'>
						No todos yet.{' '}
						<Link href='/dashboard/new'>
							<Button variant='link'>Create one!</Button>
						</Link>
					</div>
				) : (
					<ul className='space-y-4'>
						{todos.map(({ complete, title, id }) => (
							<li
								key={id}
								className={`flex items-center justify-between border-1 border-${
									complete
										? 'border-1 border-green-100'
										: 'border-1 border-yellow-500'
								} rounded p-4 shadow-sm hover:shadow transition`}>
								<div className='flex items-center justify-between w-full'>
									<div>
										<h3 className={`font-medium text-lg capitalize`}>{title}</h3>
										<StatusBadge complete={complete} />
									</div>
									<div className='flex gap-2'>
										{/* Toggle completion form */}
										<form action={toggleTodoCompletion}>
											<Input
												type='hidden'
												name='id'
												value={id}
											/>
											<Input
												type='hidden'
												name='complete'
												value={String(complete)}
											/>
											<Button
												type='submit'
												variant={complete ? 'secondary' : 'success'}>
												{complete ? 'Mark as Pending' : 'Mark as Completed'}
											</Button>
										</form>
										{/* Delete form */}
										<form action={deleteTodo}>
											<Input
												type='hidden'
												name='id'
												value={id}
											/>
											<Button variant='destructive'>Delete</Button>
										</form>
									</div>
								</div>
							</li>
						))}
					</ul>
				)}
			</section>
		</main>
	);
}
