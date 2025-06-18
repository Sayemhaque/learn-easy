import { Button } from "@/components/ui/button";

import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function JavaScriptCourseCard() {
  return (
    <Card className='group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-orange-100'>
      <CardHeader className='pb-4'>
        <div className='flex items-center justify-between mb-4'>
          <div className='p-3 bg-yellow-600 rounded-xl'>
            <Code className='h-8 w-8 text-white' />
          </div>
          <span className='px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium'>
            নতুন
          </span>
        </div>
        <CardTitle className='text-2xl text-gray-900 group-hover:text-yellow-600 transition-colors'>
          জাভাস্ক্রিপ্ট
        </CardTitle>
        <CardDescription className='text-gray-600 text-lg'>
          ওয়েব ডেভেলপমেন্টের জন্য সবচেয়ে জরুরি ভাষা
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-3'>
          <h4 className='font-semibold text-gray-900'>যা শিখবেন:</h4>
          <ul className='space-y-2 text-gray-600'>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-yellow-600 rounded-full mr-3'></div>
              JS এর মূল বিষয়
            </li>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-yellow-600 rounded-full mr-3'></div>
              DOM ম্যানিপুলেশন
            </li>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-yellow-600 rounded-full mr-3'></div>
              Async Programming
            </li>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-yellow-600 rounded-full mr-3'></div>
              Modern JS (ES6+)
            </li>
          </ul>
        </div>

        <div className='flex items-center justify-between pt-4'>
          <div className='text-sm text-gray-500'>১২টি অধ্যায় • ২-৩ মাস</div>
          <Button asChild className='bg-yellow-600 hover:bg-yellow-700'>
            <Link href='/courses/javascript'>
              শুরু করুন
              <ArrowRight className='w-4 h-4 ml-2' />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
