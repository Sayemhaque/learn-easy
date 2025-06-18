import { BookOpen } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <BookOpen className='h-6 w-6 text-blue-400' />
              <span className='text-xl font-bold'>শিখন</span>
            </div>
            <p className='text-gray-400'>
              বাংলায় প্রোগ্রামিং শেখার সবচেয়ে সহজ প্ল্যাটফর্ম
            </p>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>কোর্স</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <Link
                  href='/courses/machine-learning'
                  className='hover:text-white transition-colors'>
                  মেশিন লার্নিং
                </Link>
              </li>
              <li>
                <Link
                  href='/courses/javascript'
                  className='hover:text-white transition-colors'>
                  জাভাস্ক্রিপ্ট
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>সাহায্য</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <Link
                  href='/faq'
                  className='hover:text-white transition-colors'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-white transition-colors'>
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>আমাদের মিশন</h4>
            <p className='text-gray-400 text-sm'>
              প্রযুক্তি শিক্ষাকে সবার কাছে পৌঁছে দেওয়া, সহজ বাংলায়
            </p>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>&copy; ২০২৪ শিখন। সকল অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
