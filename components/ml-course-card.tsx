import { Button } from "@/components/ui/button";

import { ArrowRight, Brain } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

export default function MachineLearningCourseCard() {
  return (
    <Card className='group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100'>
      <CardHeader className='pb-4'>
        <div className='flex items-center justify-between mb-4'>
          <div className='p-3 bg-blue-600 rounded-xl'>
            <Brain className='h-8 w-8 text-white' />
          </div>
          <span className='px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium'>
            জনপ্রিয়
          </span>
        </div>
        <CardTitle className='text-2xl text-gray-900 group-hover:text-blue-600 transition-colors'>
          মেশিন লার্নিং
        </CardTitle>
        <CardDescription className='text-gray-600 text-lg'>
          কৃত্রিম বুদ্ধিমত্তা শিখুন একদম শূন্য থেকে
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-3'>
          <h4 className='font-semibold text-gray-900'>যা শিখবেন:</h4>
          <ul className='space-y-2 text-gray-600'>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
              গণিতের ভিত্তি (সহজ করে)
            </li>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
              Python প্রোগ্রামিং
            </li>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
              ডেটা সায়েন্স
            </li>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
              AI মডেল তৈরি
            </li>
          </ul>
        </div>

        <div className='flex items-center justify-between pt-4'>
          <div className='text-sm text-gray-500'>১৫টি অধ্যায় • ৩-৪ মাস</div>
          <Button asChild className='bg-blue-600 hover:bg-blue-700 text-white'>
            <Link
              href='/courses/machine-learning'
              className='flex items-center'>
              শুরু করুন
              <ArrowRight className='w-4 h-4 ml-2' />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
