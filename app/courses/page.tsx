import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen, Brain, Clock, Code, Star, Users } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto py-12'>
        {/* Page Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            আমাদের কোর্স
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            বিনামূল্যে শিখুন প্রোগ্রামিং এবং মেশিন লার্নিং - সহজ বাংলায়, ধাপে
            ধাপে
          </p>
        </div>

        {/* Courses Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* JavaScript Course */}
          <Card className='opacity-70 disabled select-none group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-orange-100'>
            <CardHeader className='pb-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className='p-4 bg-yellow-600 rounded-xl'>
                  <Code className='h-10 w-10 text-white' />
                </div>
                <Badge className='bg-yellow-200 text-yellow-800 hover:bg-yellow-200'>
                  নতুন
                </Badge>
              </div>
              <CardTitle className='text-3xl text-gray-900 group-hover:text-yellow-600 transition-colors'>
                জাভাস্ক্রিপ্ট
              </CardTitle>
              <CardDescription className='text-gray-600 text-lg'>
                ওয়েব ডেভেলপমেন্টের জন্য সবচেয়ে জরুরি প্রোগ্রামিং ভাষা
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid grid-cols-3 gap-4 text-center'>
                <div className='p-3 bg-white rounded-lg'>
                  <Clock className='w-5 h-5 text-yellow-600 mx-auto mb-1' />
                  <div className='text-sm font-medium'>২-৩ মাস</div>
                </div>
                <div className='p-3 bg-white rounded-lg'>
                  <BookOpen className='w-5 h-5 text-yellow-600 mx-auto mb-1' />
                  <div className='text-sm font-medium'>১২ অধ্যায়</div>
                </div>
                <div className='p-3 bg-white rounded-lg'>
                  <Users className='w-5 h-5 text-yellow-600 mx-auto mb-1' />
                  <div className='text-sm font-medium'>শুরুর লেভেল</div>
                </div>
              </div>

              <div className='space-y-3'>
                <h4 className='font-semibold text-gray-900'>
                  কোর্সের বিষয়বস্তু:
                </h4>
                <div className='grid grid-cols-1 gap-2'>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full mr-3'></div>
                    জাভাস্ক্রিপ্টের মূল বিষয় (Variables, Functions)
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full mr-3'></div>
                    DOM ম্যানিপুলেশন এবং ইভেন্ট হ্যান্ডলিং
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full mr-3'></div>
                    Async/Await এবং Promises
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full mr-3'></div>
                    Modern JavaScript (ES6+)
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full mr-3'></div>
                    প্রজেক্ট: ইন্টারঅ্যাক্টিভ ওয়েবসাইট
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between pt-4 border-t border-yellow-200'>
                <div className='flex items-center space-x-1'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <span className='text-sm text-gray-600 ml-2'>(৪.৯/৫)</span>
                </div>
                <Button asChild className='bg-yellow-600 hover:bg-yellow-700'>
                  <Link href='/courses/javascript'>
                    শুরু করুন
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Machine Learning Course */}
          <Card className='group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100'>
            <CardHeader className='pb-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className='p-4 bg-blue-600 rounded-xl'>
                  <Brain className='h-10 w-10 text-white' />
                </div>
                <Badge className='bg-blue-200 text-blue-800 hover:bg-blue-200'>
                  জনপ্রিয়
                </Badge>
              </div>
              <CardTitle className='text-3xl text-gray-900 group-hover:text-blue-600 transition-colors'>
                মেশিন লার্নিং
              </CardTitle>
              <CardDescription className='text-gray-600 text-lg'>
                কৃত্রিম বুদ্ধিমত্তা এবং ডেটা সায়েন্স শিখুন একদম শূন্য থেকে
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid grid-cols-3 gap-4 text-center'>
                <div className='p-3 bg-white rounded-lg'>
                  <Clock className='w-5 h-5 text-blue-600 mx-auto mb-1' />
                  <div className='text-sm font-medium'>৩-৪ মাস</div>
                </div>
                <div className='p-3 bg-white rounded-lg'>
                  <BookOpen className='w-5 h-5 text-blue-600 mx-auto mb-1' />
                  <div className='text-sm font-medium'>১৫ অধ্যায়</div>
                </div>
                <div className='p-3 bg-white rounded-lg'>
                  <Users className='w-5 h-5 text-blue-600 mx-auto mb-1' />
                  <div className='text-sm font-medium'>শুরুর লেভেল</div>
                </div>
              </div>

              <div className='space-y-3'>
                <h4 className='font-semibold text-gray-900'>
                  কোর্সের বিষয়বস্তু:
                </h4>
                <div className='grid grid-cols-1 gap-2'>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
                    গণিতের ভিত্তি (লিনিয়ার অ্যালজেব্রা, পরিসংখ্যান)
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
                    Python প্রোগ্রামিং এবং ডেটা সায়েন্স
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
                    মেশিন লার্নিং অ্যালগরিদম
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
                    ডিপ লার্নিং এবং নিউরাল নেটওয়ার্ক
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
                    বাস্তব প্রজেক্ট এবং কেস স্টাডি
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between pt-4 border-t border-blue-200'>
                <div className='flex items-center space-x-1'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <span className='text-sm text-gray-600 ml-2'>(৪.৮/৫)</span>
                </div>
                <Button asChild className='bg-blue-600 hover:bg-blue-700'>
                  <Link href='/courses/machine-learning'>
                    শুরু করুন
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon */}
        <div className='mt-16 text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>শীঘ্রই আসছে</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <Card className='opacity-75'>
              <CardHeader>
                <CardTitle className='text-lg'>React.js</CardTitle>
                <CardDescription>Modern ওয়েব অ্যাপ্লিকেশন</CardDescription>
              </CardHeader>
            </Card>
            <Card className='opacity-75'>
              <CardHeader>
                <CardTitle className='text-lg'>Node.js</CardTitle>
                <CardDescription>ব্যাকএন্ড ডেভেলপমেন্ট</CardDescription>
              </CardHeader>
            </Card>
            <Card className='opacity-75'>
              <CardHeader>
                <CardTitle className='text-lg'>Data Science</CardTitle>
                <CardDescription>ডেটা অ্যানালাইসিস</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
