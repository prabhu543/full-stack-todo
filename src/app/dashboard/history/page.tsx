import Link from 'next/link';
import { Button } from '@/components/ui/button';
import history from '@/serverActions/history';

export default async function History() {
	const completedTodos = await history();

	return (
		<main className='p-4 bg-gradient-to-br from-gray-100 to-gray-300 py-10'>
			<Link href='/dashboard'>
				<Button variant='link'>Back to Dashboard</Button>
			</Link>
			<section className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8'>
				<header className='flex items-center justify-between mb-8'>
					<h1 className='text-2xl font-bold text-gray-900'>
						Completed Todos History
					</h1>
				</header>
				{completedTodos.length === 0 ? (
					<div className='text-center text-gray-500 py-10'>
						No completed todos yet.
					</div>
				) : (
					<ul className='space-y-4'>
						{completedTodos.map(({ id, title, completedAt }) => (
							<li
								key={id}
								className='bg-gray-50 rounded p-4 shadow-sm'>
								<div className='flex items-center justify-between'>
									<span className='font-medium text-lg text-gray-800'>
										{title}
									</span>
									<span className='text-xs text-gray-400'>
										Completed on {new Date(completedAt).toLocaleDateString()}
									</span>
								</div>
							</li>
						))}
					</ul>
				)}
			</section>
		</main>
	);
}
