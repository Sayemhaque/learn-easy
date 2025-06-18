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
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Code2,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { htmlCourseStructure } from "./data";

export default function HTMLCourseComplete() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const totalLessons = htmlCourseStructure.reduce(
    (total, module) => total + module.lessons.length,
    0
  );
  const completedLessons = htmlCourseStructure.reduce(
    (total, module) =>
      total + module.lessons.filter((lesson) => lesson.completed).length,
    0
  );

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto py-12'>
        {/* Course Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            <Code2 className='w-4 h-4 mr-2' />
            HTML কোর্স
          </div>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            HTML - ওয়েব ডেভেলপমেন্টের ভিত্তি
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            শূন্য থেকে শুরু করে HTML এর সব কিছু শিখুন। ওয়েবসাইট তৈরির প্রথম
            ধাপ।
          </p>
        </div>

        {/* Course Stats */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto'>
          <Card>
            <CardContent className='p-6 text-center'>
              <BookOpen className='w-8 h-8 text-orange-600 mx-auto mb-2' />
              <div className='text-2xl font-bold text-gray-900'>
                {htmlCourseStructure.length}
              </div>
              <div className='text-sm text-gray-600'>মডিউল</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='p-6 text-center'>
              <CheckCircle className='w-8 h-8 text-orange-600 mx-auto mb-2' />
              <div className='text-2xl font-bold text-gray-900'>
                {totalLessons}
              </div>
              <div className='text-sm text-gray-600'>লেসন</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='p-6 text-center'>
              <Clock className='w-8 h-8 text-orange-600 mx-auto mb-2' />
              <div className='text-2xl font-bold text-gray-900'>৩-৪</div>
              <div className='text-sm text-gray-600'>মাস</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='p-6 text-center'>
              <Users className='w-8 h-8 text-orange-600 mx-auto mb-2' />
              <div className='text-2xl font-bold text-gray-900'>শুরুর</div>
              <div className='text-sm text-gray-600'>লেভেল</div>
            </CardContent>
          </Card>
        </div>

        {/* Course Modules */}
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8'>
            কোর্স মডিউলসমূহ
          </h2>
          <div className='space-y-4'>
            {htmlCourseStructure.map((module) => (
              <Card key={module.id} className='overflow-hidden'>
                <CardHeader
                  className='cursor-pointer hover:bg-gray-50 transition-colors'
                  onClick={() =>
                    setSelectedModule(
                      selectedModule === module.id ? null : module.id
                    )
                  }>
                  <div className='flex items-center justify-between'>
                    <div>
                      <CardTitle className='text-lg text-gray-900'>
                        {module.id}. {module.title}
                      </CardTitle>
                      <CardDescription className='mt-1'>
                        {module.description} • {module.duration}
                      </CardDescription>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge
                        variant='outline'
                        className='text-orange-600 border-orange-200'>
                        {module.lessons.length} লেসন
                      </Badge>
                      <ArrowRight
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          selectedModule === module.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>
                </CardHeader>

                {selectedModule === module.id && (
                  <CardContent className='pt-0'>
                    <div className='border-t pt-4'>
                      <div className='grid gap-3'>
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                            <div className='flex items-center space-x-3'>
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                  lesson.completed
                                    ? "bg-green-100 text-green-800"
                                    : "bg-orange-100 text-orange-800"
                                }`}>
                                {lesson.completed ? "✓" : lesson.id}
                              </div>
                              <span className='text-sm font-medium text-gray-900'>
                                {lesson.title}
                              </span>
                            </div>
                            <Button
                              size='sm'
                              variant={lesson.completed ? "outline" : "default"}
                              className={
                                lesson.completed
                                  ? ""
                                  : "bg-orange-600 hover:bg-orange-700"
                              }
                              asChild>
                              <Link href={`/courses/html/lessons/${lesson.id}`}>
                                {lesson.completed
                                  ? "পুনরায় দেখুন"
                                  : "শুরু করুন"}
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Course Features */}
        <div className='mt-16 max-w-6xl mx-auto'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
            কোর্সের বৈশিষ্ট্য
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='text-center'>
              <CardContent className='p-6'>
                <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Code2 className='w-6 h-6 text-orange-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  হ্যান্ডস-অন প্র্যাকটিস
                </h3>
                <p className='text-sm text-gray-600'>
                  প্রতিটি লেসনে কোড লিখে অনুশীলন করুন
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='p-6'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <CheckCircle className='w-6 h-6 text-blue-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  কুইজ এবং অ্যাসাইনমেন্ট
                </h3>
                <p className='text-sm text-gray-600'>
                  নিয়মিত পরীক্ষা করে শেখার মান যাচাই করুন
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='p-6'>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Star className='w-6 h-6 text-green-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  প্রজেক্ট বেসড লার্নিং
                </h3>
                <p className='text-sm text-gray-600'>
                  বাস্তব প্রজেক্ট তৈরি করে শিখুন
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Start Learning CTA */}
        <div className='mt-16 text-center'>
          <Card className='max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 border-orange-200'>
            <CardContent className='p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                আজই শুরু করুন HTML শেখা
              </h3>
              <p className='text-gray-600 mb-6'>
                বিনামূল্যে HTML শিখুন এবং আপনার ওয়েব ডেভেলপমেন্ট যাত্রা শুরু
                করুন
              </p>
              <Button
                size='lg'
                className='bg-orange-600 hover:bg-orange-700'
                asChild>
                <Link href='/courses/html/lessons/1'>
                  প্রথম লেসন শুরু করুন
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
