"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Circle,
  Clock,
  Code,
  Play,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const courseStructure = [
  {
    id: 1,
    title: "জাভাস্ক্রিপ্ট পরিচিতি",
    description: "শুরু থেকে জাভাস্ক্রিপ্ট শেখা",
    duration: "১ সপ্তাহ",
    lessons: [
      { id: 1, title: "জাভাস্ক্রিপ্ট কী এবং কেন?", completed: false },
      { id: 2, title: "Hello World এবং Console", completed: false },
      { id: 3, title: "ভেরিয়েবল (var, let, const)", completed: false },
      { id: 4, title: "কমেন্ট এবং কোড ফরম্যাটিং", completed: false },
    ],
  },
  {
    id: 2,
    title: "ডেটা টাইপ এবং অপারেটর",
    description: "JS এর ভিত্তি",
    duration: "১ সপ্তাহ",
    lessons: [
      {
        id: 5,
        title: "প্রিমিটিভ টাইপ (Number, String, Boolean)",
        completed: false,
      },
      { id: 6, title: "নাল, আনডিফাইন্ড, টাইপ অফ", completed: false },
      { id: 7, title: "অপারেটর (Arithmetic, Logical)", completed: false },
      { id: 8, title: "কনভার্সন এবং কনক্যাটেনেশন", completed: false },
    ],
  },
  {
    id: 3,
    title: "কন্ডিশন এবং লুপ",
    description: "প্রোগ্রামের নিয়ন্ত্রণ",
    duration: "১ সপ্তাহ",
    lessons: [
      { id: 9, title: "if/else এবং switch", completed: false },
      { id: 10, title: "for, while এবং do...while", completed: false },
      { id: 11, title: "break এবং continue", completed: false },
      { id: 12, title: "প্রজেক্ট: সংখ্যা অনুমান খেলা", completed: false },
    ],
  },
  {
    id: 4,
    title: "ফাংশন এবং স্কোপ",
    description: "কোড রিইউজ এবং স্ট্রাকচার",
    duration: "২ সপ্তাহ",
    lessons: [
      { id: 13, title: "ফাংশন ঘোষণা এবং কল", completed: false },
      { id: 14, title: "প্যারামিটার, রিটার্ন, ডিফল্ট", completed: false },
      { id: 15, title: "স্কোপ এবং Hoisting", completed: false },
      { id: 16, title: "Arrow Function", completed: false },
    ],
  },
  {
    id: 5,
    title: "অ্যারে এবং অবজেক্ট",
    description: "JS ডেটা স্ট্রাকচার",
    duration: "২ সপ্তাহ",
    lessons: [
      { id: 17, title: "অ্যারে তৈরি, এক্সেস", completed: false },
      { id: 18, title: "map, filter, reduce", completed: false },
      { id: 19, title: "অবজেক্ট প্রপার্টি, মেথড", completed: false },
      { id: 20, title: "for...in এবং for...of", completed: false },
    ],
  },
  {
    id: 6,
    title: "প্রজেক্ট ১: কুইজ অ্যাপ",
    description: "বেসিক JS দিয়ে অ্যাপ বানানো",
    duration: "১ সপ্তাহ",
    lessons: [
      { id: 21, title: "UI তৈরি", completed: false },
      { id: 22, title: "লজিক ইমপ্লিমেন্ট", completed: false },
      { id: 23, title: "Result এবং Reset", completed: false },
    ],
  },
  {
    id: 7,
    title: "DOM ম্যানিপুলেশন",
    description: "HTML এলিমেন্ট নিয়ন্ত্রণ",
    duration: "২ সপ্তাহ",
    lessons: [
      { id: 24, title: "DOM কী এবং Structure", completed: false },
      { id: 25, title: "Element সিলেকশন", completed: false },
      { id: 26, title: "InnerHTML, classList", completed: false },
      { id: 27, title: "ইভেন্ট হ্যান্ডলার", completed: false },
    ],
  },
  {
    id: 8,
    title: "প্রজেক্ট ২: ইন্টারঅ্যাক্টিভ টু-ডু লিস্ট",
    description: "ইউজার ইনপুট এবং DOM",
    duration: "১ সপ্তাহ",
    lessons: [
      { id: 28, title: "ইনপুট থেকে টাস্ক যোগ", completed: false },
      { id: 29, title: "মার্ক এজ ডান / ডিলিট", completed: false },
      { id: 30, title: "লোকাল স্টোরেজ ব্যবহার", completed: false },
    ],
  },
  {
    id: 9,
    title: "Asynchronous JavaScript",
    description: "Async কোড হ্যান্ডলিং",
    duration: "২ সপ্তাহ",
    lessons: [
      { id: 31, title: "setTimeout, setInterval", completed: false },
      { id: 32, title: "Callback এবং Callback Hell", completed: false },
      { id: 33, title: "Promises", completed: false },
      { id: 34, title: "Async/Await", completed: false },
    ],
  },
  {
    id: 10,
    title: "প্রজেক্ট ৩: Weather App (API ফেচ)",
    description: "API রিকুয়েস্ট এবং রেসপন্স",
    duration: "১ সপ্তাহ",
    lessons: [
      { id: 35, title: "API ফেচ করা", completed: false },
      { id: 36, title: "ডেটা শো করা", completed: false },
      { id: 37, title: "ইউজার ইনপুট থেকে ডেটা", completed: false },
    ],
  },
  {
    id: 11,
    title: "ফাংশনাল প্রোগ্রামিং",
    description: "ডিক্লারেটিভ স্টাইল এবং ইমিউটেবিলিটি",
    duration: "১ সপ্তাহ",
    lessons: [
      { id: 38, title: "Pure Function", completed: false },
      { id: 39, title: "Higher-Order Functions", completed: false },
      { id: 40, title: "Closure এবং Currying", completed: false },
    ],
  },
  {
    id: 12,
    title: "Object-Oriented JS",
    description: "JS ক্লাস এবং ইনহেরিটেন্স",
    duration: "২ সপ্তাহ",
    lessons: [
      { id: 41, title: "Constructor Function", completed: false },
      { id: 42, title: "Prototype এবং this", completed: false },
      { id: 43, title: "ES6 Class", completed: false },
      { id: 44, title: "Inheritance", completed: false },
    ],
  },
  {
    id: 13,
    title: "JS Design Patterns",
    description: "Reusable কোড স্ট্রাকচার",
    duration: "২ সপ্তাহ",
    lessons: [
      { id: 45, title: "Module Pattern", completed: false },
      { id: 46, title: "Factory Pattern", completed: false },
      { id: 47, title: "Singleton এবং Observer", completed: false },
    ],
  },
  {
    id: 14,
    title: "প্রজেক্ট ৪: Expense Tracker",
    description: "Real-world Class-based অ্যাপ",
    duration: "১ সপ্তাহ",
    lessons: [
      { id: 48, title: "Add, Remove, Filter", completed: false },
      { id: 49, title: "OOP ব্যবহার", completed: false },
      { id: 50, title: "স্টোরেজ ও ফর্ম ভ্যালিডেশন", completed: false },
    ],
  },
];

export default function JavaScriptCoursePage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const totalLessons = courseStructure.reduce(
    (total, section) => total + section.lessons.length,
    0
  );
  const completedLessons = courseStructure.reduce(
    (total, section) =>
      total + section.lessons.filter((lesson) => lesson.completed).length,
    0
  );

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto py-8'>
        {/* Course Header */}
        <div className='mb-8'>
          <div className='flex items-center space-x-2 text-sm text-gray-600 mb-4'>
            <Link href='/courses' className='hover:text-blue-600'>
              কোর্স
            </Link>
            <ChevronRight className='w-4 h-4' />
            <span>জাভাস্ক্রিপ্ট</span>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
              <div className='flex items-center space-x-3 mb-4'>
                <div className='p-3 bg-yellow-600 rounded-xl'>
                  <Code className='h-8 w-8 text-white' />
                </div>
                <div>
                  <h1 className='text-4xl font-bold text-gray-900'>
                    জাভাস্ক্রিপ্ট
                  </h1>
                  <p className='text-gray-600'>
                    ওয়েব ডেভেলপমেন্টের জন্য সবচেয়ে জরুরি ভাষা
                  </p>
                </div>
              </div>

              <p className='text-lg text-gray-700 mb-6'>
                জাভাস্ক্রিপ্ট হলো ওয়েবের ভাষা। এই কোর্সে আপনি শিখবেন কিভাবে
                ইন্টারঅ্যাক্টিভ ওয়েবসাইট তৈরি করতে হয়, কিভাবে ডেটা নিয়ে কাজ
                করতে হয় এবং কিভাবে modern web applications বানাতে হয়। সবকিছু
                সহজ বাংলায়, বাস্তব উদাহরণ দিয়ে।
              </p>

              <div className='flex flex-wrap gap-4 mb-6'>
                <Badge className='bg-yellow-100 text-yellow-800 hover:bg-yellow-100'>
                  <Clock className='w-4 h-4 mr-1' />
                  ২-৩ মাস
                </Badge>
                <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>
                  <Users className='w-4 h-4 mr-1' />
                  শুরুর লেভেল
                </Badge>
                <Badge className='bg-purple-100 text-purple-800 hover:bg-purple-100'>
                  <BookOpen className='w-4 h-4 mr-1' />
                  {totalLessons} টি লেসন
                </Badge>
              </div>

              <Button
                asChild
                size='lg'
                className='bg-yellow-600 hover:bg-yellow-700'>
                <Link href='/courses/javascript/lessons/1'>
                  <Play className='w-5 h-5 mr-2' />
                  কোর্স শুরু করুন
                </Link>
              </Button>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>আপনার অগ্রগতি</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div>
                      <div className='flex justify-between text-sm mb-2'>
                        <span>সম্পন্ন</span>
                        <span>
                          {completedLessons}/{totalLessons}
                        </span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div
                          className='bg-yellow-600 h-2 rounded-full transition-all duration-300'
                          style={{
                            width: `${
                              (completedLessons / totalLessons) * 100
                            }%`,
                          }}></div>
                      </div>
                    </div>
                    <div className='text-sm text-gray-600'>
                      আপনি এখনো শুরু করেননি। প্রথম লেসন দিয়ে শুরু করুন!
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
              কোর্সের বিষয়বস্তু
            </h2>

            <div className='space-y-4'>
              {courseStructure.map((section) => (
                <Card key={section.id} className='overflow-hidden'>
                  <CardHeader
                    className='cursor-pointer hover:bg-gray-50 transition-colors'
                    onClick={() => toggleSection(section.id)}>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center'>
                          <span className='text-yellow-600 font-semibold text-sm'>
                            {section.id}
                          </span>
                        </div>
                        <div>
                          <CardTitle className='text-lg'>
                            {section.title}
                          </CardTitle>
                          <CardDescription>
                            {section.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Badge variant='outline'>{section.duration}</Badge>
                        {expandedSections.includes(section.id) ? (
                          <ChevronDown className='w-5 h-5 text-gray-400' />
                        ) : (
                          <ChevronRight className='w-5 h-5 text-gray-400' />
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  {expandedSections.includes(section.id) && (
                    <CardContent className='pt-0'>
                      <div className='space-y-2'>
                        {section.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors'>
                            {lesson.completed ? (
                              <CheckCircle className='w-5 h-5 text-green-600' />
                            ) : (
                              <Circle className='w-5 h-5 text-gray-400' />
                            )}
                            <span
                              className={`flex-1 ${
                                lesson.completed
                                  ? "text-gray-500 line-through"
                                  : "text-gray-700"
                              }`}>
                              {lesson.title}
                            </span>
                            <Button
                              asChild
                              variant='ghost'
                              size='sm'
                              className='text-yellow-600 hover:text-yellow-700'>
                              <Link
                                href={`/courses/javascript/lessons/${lesson.id}`}>
                                {lesson.completed
                                  ? "পুনরায় দেখুন"
                                  : "শুরু করুন"}
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div className='space-y-6'>
            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>যা শিখবেন</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-3'>
                  <li className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-green-600 mt-0.5' />
                    <span className='text-sm'>JavaScript এর মূল বিষয়</span>
                  </li>
                  <li className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-green-600 mt-0.5' />
                    <span className='text-sm'>DOM ম্যানিপুলেশন</span>
                  </li>
                  <li className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-green-600 mt-0.5' />
                    <span className='text-sm'>Event Handling</span>
                  </li>
                  <li className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-green-600 mt-0.5' />
                    <span className='text-sm'>Async Programming</span>
                  </li>
                  <li className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-green-600 mt-0.5' />
                    <span className='text-sm'>Modern ES6+ Features</span>
                  </li>
                  <li className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-green-600 mt-0.5' />
                    <span className='text-sm'>Real Projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle>পূর্বশর্ত</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• HTML এর মৌলিক জ্ঞান</li>
                  <li>• CSS এর বেসিক ধারণা</li>
                  <li>• কম্পিউটার ব্যবহারের দক্ষতা</li>
                </ul>
                <p className='text-sm text-green-600 mt-3'>
                  ✅ প্রোগ্রামিংয়ের পূর্ব অভিজ্ঞতা প্রয়োজন নেই!
                </p>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card>
              <CardHeader>
                <CardTitle>যে টুলস ব্যবহার করবেন</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2 text-sm'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full'></div>
                    <span>ওয়েব ব্রাউজার (Chrome/Firefox)</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full'></div>
                    <span>VS Code (Text Editor)</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full'></div>
                    <span>Developer Tools</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full'></div>
                    <span>CodePen (Online Editor)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className='bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'>
              <CardHeader>
                <CardTitle className='text-yellow-800'>🚀 প্রজেক্ট</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2 text-sm text-yellow-700'>
                  <div>• ইন্টারঅ্যাক্টিভ টু-ডু লিস্ট</div>
                  <div>• ওয়েদার অ্যাপ</div>
                  <div>• ক্যালকুলেটর</div>
                  <div>• ইমেজ গ্যালারি</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
