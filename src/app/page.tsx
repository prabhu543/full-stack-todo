import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 via-purple-100 to-blue-100">
      <section className="text-center max-w-xl px-6 py-12 bg-white bg-opacity-80 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4 drop-shadow">
          Welcome to TodoFlow!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Effortlessly manage your daily tasks.<br />
          Stay organized, productive, and focused with your personal todo dashboard.
        </p>
        <Link href="/dashboard">
          <Button
            variant="default"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full shadow-md transition"
          >
            Go to Dashboard
          </Button>
        </Link>
      </section>
      <footer className="mt-10 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} TodoFlow. All rights reserved.
      </footer>
    </main>
  );
};

export default Page;
