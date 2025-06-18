import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export default function HTMLCourseCard() {
  return (
    <Card className='group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-100'>
      <CardHeader className='pb-4'>
        <div className='flex items-center justify-between mb-4'>
          <div className='p-3 bg-orange-600 rounded-xl'>
            <Code2 className='h-8 w-8 text-white' />
          </div>
          <span className='px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium'>
            নতুন
          </span>
        </div>
        <CardTitle className='text-2xl text-gray-900 group-hover:text-orange-600 transition-colors'>
          HTML
        </CardTitle>
        <CardDescription className='text-gray-600 text-lg'>
          ওয়েব ডেভেলপমেন্টের ভিত্তি এবং কাঠামো
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-3'>
          <h4 className='font-semibold text-gray-900'>যা শিখবেন:</h4>
          <ul className='space-y-2 text-gray-600'>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-orange-600 rounded-full mr-3'></div>
              HTML এর মূল বিষয়
            </li>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-orange-600 rounded-full mr-3'></div>
              সিমান্টিক HTML5
            </li>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-orange-600 rounded-full mr-3'></div>
              ফর্ম এবং মাল্টিমিডিয়া
            </li>
            <li className='flex items-center'>
              <div className='w-2 h-2 bg-orange-600 rounded-full mr-3'></div>
              SEO এবং অ্যাক্সেসিবিলিটি
            </li>
          </ul>
        </div>

        <div className='flex items-center justify-between pt-4'>
          <div className='text-sm text-gray-500'>14 অধ্যায় • 3-4 মাস</div>
          <Button asChild className='bg-orange-600 hover:bg-orange-700'>
            <Link href='/courses/html'>
              শুরু করুন
              <ArrowRight className='w-4 h-4 ml-2' />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
