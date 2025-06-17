"use client";

import LessonContent from "@/components/lesson-content-renderer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Code,
  Lightbulb,
  MessageCircle,
  Play,
  RotateCcw,
  X,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { lessonData } from "../lesson-data";

// Sample lesson data for JavaScript

export default function JavaScriptLessonPage() {
  const params = useParams();
  const lessonId = parseInt(params.id as string);
  const lesson = lessonData[lessonId as keyof typeof lessonData];

  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [hoveredTerm, setHoveredTerm] = useState<string | null>(null);
  const [showCodeExample, setShowCodeExample] = useState(false);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const handleQuizSubmit = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto py-6'>
        <div className='flex items-center space-x-2 text-sm text-gray-600 mb-6'>
          <Link href='/courses' className='hover:text-blue-600'>
            কোর্স
          </Link>
          <ChevronRight className='w-4 h-4' />
          <Link href='/courses/javascript' className='hover:text-blue-600'>
            জাভাস্ক্রিপ্ট
          </Link>
          <ChevronRight className='w-4 h-4' />
          <span>{lesson.title}</span>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-3'>
            <div className='mb-8'>
              <Badge className='mb-3 bg-yellow-100 text-yellow-800'>
                {lesson.section}
              </Badge>
              <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                {lesson.title}
              </h1>
              <p className='text-gray-600'>⏱️ {lesson.duration}</p>
            </div>

            {/* Lesson Content */}
            <LessonContent content={lesson.content} />

            {/* Code Example */}
            {lesson.codeExample && (
              <Card className='mb-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'>
                <CardHeader>
                  <CardTitle className='flex items-center text-yellow-800'>
                    <Code className='w-5 h-5 mr-2' />
                    {lesson.codeExample.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!showCodeExample ? (
                    <div className='text-center py-4'>
                      <p className='text-yellow-700 mb-4'>
                        নিজে কোড লিখে অনুশীলন করুন
                      </p>
                      <Button
                        onClick={() => setShowCodeExample(true)}
                        className='bg-yellow-600 hover:bg-yellow-700'>
                        <Play className='w-4 h-4 mr-2' />
                        কোড দেখুন
                      </Button>
                    </div>
                  ) : (
                    <div className='space-y-4'>
                      <LessonContent content={lesson.codeExample.code} />
                      <div className='bg-yellow-100 p-3 rounded-lg'>
                        <p className='text-sm text-yellow-800'>
                          💡 <strong>টিপ:</strong> এই কোডটি আপনার ব্রাউজারের
                          Console এ কপি-পেস্ট করে চালিয়ে দেখুন!
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Quiz Section */}
            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='flex items-center'>
                  <MessageCircle className='w-5 h-5 mr-2 text-blue-600' />
                  কুইজ - আপনি কতটুকু বুঝেছেন?
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!showQuiz ? (
                  <div className='text-center py-6'>
                    <p className='text-gray-600 mb-4'>
                      লেসন শেষ করার পর কুইজ দিয়ে নিজেকে পরীক্ষা করুন
                    </p>
                    <Button
                      onClick={() => setShowQuiz(true)}
                      className='bg-blue-600 hover:bg-blue-700'>
                      কুইজ শুরু করুন
                    </Button>
                  </div>
                ) : (
                  <div className='space-y-4'>
                    <h3 className='text-lg font-semibold'>
                      {lesson.quiz.question}
                    </h3>

                    <div className='space-y-2'>
                      {lesson.quiz.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            !showResult && setSelectedAnswer(index)
                          }
                          disabled={showResult}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            showResult
                              ? index === lesson.quiz.correct
                                ? "bg-green-100 border-green-500 text-green-800"
                                : index === selectedAnswer &&
                                  index !== lesson.quiz.correct
                                ? "bg-red-100 border-red-500 text-red-800"
                                : "bg-gray-50 border-gray-200"
                              : selectedAnswer === index
                              ? "bg-blue-100 border-blue-500"
                              : "bg-white border-gray-200 hover:bg-gray-50"
                          }`}>
                          <div className='flex items-center'>
                            <span className='w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center text-xs font-bold'>
                              {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                            {showResult && index === lesson.quiz.correct && (
                              <CheckCircle className='w-5 h-5 ml-auto text-green-600' />
                            )}
                            {showResult &&
                              index === selectedAnswer &&
                              index !== lesson.quiz.correct && (
                                <X className='w-5 h-5 ml-auto text-red-600' />
                              )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {!showResult && selectedAnswer !== null && (
                      <Button
                        onClick={handleQuizSubmit}
                        className='bg-blue-600 hover:bg-blue-700'>
                        উত্তর জমা দিন
                      </Button>
                    )}

                    {showResult && (
                      <div className='mt-4 p-4 bg-blue-50 rounded-lg'>
                        <h4 className='font-semibold text-blue-800 mb-2'>
                          ব্যাখ্যা:
                        </h4>
                        <p className='text-blue-700'>
                          {lesson.quiz.explanation}
                        </p>
                        <Button
                          onClick={resetQuiz}
                          variant='outline'
                          className='mt-3'>
                          <RotateCcw className='w-4 h-4 mr-2' />
                          আবার চেষ্টা করুন
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className='flex justify-between'>
              <Button asChild variant='outline'>
                <Link href='/courses/javascript'>
                  <ChevronLeft className='w-4 h-4 mr-2' />
                  কোর্সে ফিরে যান
                </Link>
              </Button>
              <Button asChild className='bg-yellow-600 hover:bg-yellow-700'>
                <Link href='/courses/javascript/lessons/2'>
                  পরবর্তী লেসন
                  <ChevronRight className='w-4 h-4 ml-2' />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className='space-y-6'>
            {/* Table of Contents */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>এই লেসনে</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <a href='#' className='text-blue-600 hover:underline'>
                      জাভাস্ক্রিপ্ট কী?
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-blue-600 hover:underline'>
                      বাস্তব জীবনের উদাহরণ
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-blue-600 hover:underline'>
                      কী করা যায়?
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-blue-600 hover:underline'>
                      কেন শিখবেন?
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-blue-600 hover:underline'>
                      প্রথম কোড
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Glossary */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg flex items-center'>
                  <Lightbulb className='w-5 h-5 mr-2 text-yellow-600' />
                  শব্দকোষ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  {lesson.glossary.map((item, index) => (
                    <div key={index} className='relative'>
                      <button
                        className='text-left w-full'
                        onMouseEnter={() => setHoveredTerm(item.term)}
                        onMouseLeave={() => setHoveredTerm(null)}>
                        <span className='text-blue-600 font-medium border-b border-dotted border-blue-600 cursor-help'>
                          {item.term}
                        </span>
                      </button>
                      {hoveredTerm === item.term && (
                        <div className='absolute z-10 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg -top-2 left-0 transform -translate-y-full'>
                          {item.definition}
                          <div className='absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900'></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className='bg-yellow-50 border-yellow-200'>
              <CardHeader>
                <CardTitle className='text-lg text-yellow-800'>
                  💡 টিপস
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-yellow-700'>
                  <li>• F12 চেপে Console খুলে কোড টেস্ট করুন</li>
                  <li>• প্রতিদিন একটু একটু অনুশীলন করুন</li>
                  <li>• ভুল হলে ঘাবড়াবেন না, এটাই স্বাভাবিক</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mini Challenge */}
            <Card className='bg-green-50 border-green-200'>
              <CardHeader>
                <CardTitle className='text-lg text-green-800'>
                  🎯 চ্যালেঞ্জ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-green-700 mb-3'>
                  আপনার নাম এবং বয়স দিয়ে একটি ভেরিয়েবল তৈরি করুন এবং
                  console.log() দিয়ে প্রিন্ট করুন।
                </p>
                <Button
                  size='sm'
                  variant='outline'
                  className='border-green-300 text-green-700 hover:bg-green-100'>
                  সমাধান দেখুন
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
