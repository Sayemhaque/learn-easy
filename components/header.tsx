"use client";

import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='container mx-auto flex h-16 items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <BookOpen className='h-8 w-8 text-blue-600' />
          <Link href='/'>
            <span className='text-2xl font-bold text-gray-900'>
              আমার কোডিং স্কুল{" "}
            </span>
          </Link>
        </div>
        <nav className='hidden md:flex items-center space-x-6'>
          <Link
            href='/courses'
            className='text-gray-600 hover:text-blue-600 transition-colors'>
            কোর্স
          </Link>
          <Link
            href='/about'
            className='text-gray-600 hover:text-blue-600 transition-colors'>
            আমাদের সম্পর্কে
          </Link>
          <Button asChild>
            <Link href='/courses'>শুরু করুন</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
