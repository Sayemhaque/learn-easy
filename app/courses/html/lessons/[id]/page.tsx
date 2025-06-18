"use client";

import LessonContent from "@/components/lesson-content-renderer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Code2,
  Lightbulb,
  MessageCircle,
  Play,
  RotateCcw,
  X,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const htmlLessonData = {
  1: {
    title: "HTML কী এবং কেন?",
    section: "HTML বেসিক",
    duration: "১৫ মিনিট",
    content: `
# HTML কী এবং কেন?

## HTML কী?

HTML এর পূর্ণরূপ হলো **HyperText Markup Language**। এটি ওয়েবসাইট তৈরির মূল ভাষা।

**সহজ ভাষায়:** HTML দিয়ে ওয়েবসাইটের কাঠামো তৈরি করা হয়। যেমন একটি বাড়ির কাঠামো - দেয়াল, দরজা, জানালা।

## বাস্তব জীবনের উদাহরণ

একটি বইয়ের সাথে তুলনা করলে:
- **HTML = বইয়ের কাঠামো** (অধ্যায়, পৃষ্ঠা, শিরোনাম)
- **CSS = বইয়ের ডিজাইন** (ফন্ট, রং, লেআউট)
- **JavaScript = বইয়ের ইন্টারঅ্যাক্টিভ অংশ** (পপআপ, অ্যানিমেশন)

## HTML দিয়ে কী করা যায়?

### ওয়েবসাইটে:
- টেক্সট এবং শিরোনাম যোগ করা
- ছবি এবং ভিডিও দেখানো
- লিংক তৈরি করা
- ফর্ম বানানো (যোগাযোগ ফর্ম, সাইনআপ ফর্ম)
- তালিকা এবং টেবিল তৈরি করা

### HTML এর বৈশিষ্ট্য:
- সহজ শেখা যায়
- সব ব্রাউজারে কাজ করে
- বিনামূল্যে ব্যবহার করা যায়
- ওয়েব ডেভেলপমেন্টের ভিত্তি

## কেন HTML শিখবেন?

1. **ওয়েব ডেভেলপমেন্টের ভিত্তি:** সব ওয়েবসাইট HTML দিয়ে তৈরি
2. **সহজ শুরু:** প্রোগ্রামিং জ্ঞান ছাড়াই শেখা যায়
3. **চাকরির সুযোগ:** ওয়েব ডেভেলপারদের চাহিদা বেশি
4. **সৃজনশীলতা:** নিজের আইডিয়া ওয়েবে প্রকাশ করুন

## প্রথম HTML কোড

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>আমার প্রথম ওয়েবপেজ</title>
</head>
<body>
    <h1>স্বাগতম!</h1>
    <p>এটি আমার প্রথম HTML পেজ।</p>
</body>
</html>
\`\`\`

## HTML কোড লিখবেন কোথায়?

1. **নোটপ্যাড:** সবচেয়ে সহজ উপায়
2. **VS Code:** প্রফেশনাল এডিটর
3. **অনলাইন এডিটর:** CodePen, JSFiddle
4. **ব্রাউজার:** সরাসরি টেস্ট করা যায়

## মনে রাখার বিষয়

- HTML **case-insensitive** (বড় ছোট হাতের অক্ষর একই)
- সব ট্যাগ **< >** এর মধ্যে লিখতে হয়
- বেশিরভাগ ট্যাগের **শুরু এবং শেষ** আছে
- **ইন্ডেন্টেশন** ব্যবহার করে কোড সুন্দর রাখুন
    `,
    quiz: {
      question: "HTML এর পূর্ণরূপ কী?",
      options: [
        "HyperText Markup Language",
        "HyperText Making Language",
        "HighText Markup Language",
        "HyperText Modern Language",
      ],
      correct: 0,
      explanation:
        "HTML এর পূর্ণরূপ হলো HyperText Markup Language। এটি ওয়েবপেজ তৈরির জন্য ব্যবহৃত মার্কআপ ভাষা।",
    },
    glossary: [
      {
        term: "HTML",
        definition: "HyperText Markup Language - ওয়েবপেজ তৈরির মূল ভাষা",
      },
      {
        term: "Tag",
        definition: "HTML এলিমেন্ট যা < > চিহ্নের মধ্যে লেখা হয়",
      },
      {
        term: "Markup",
        definition: "টেক্সটকে কাঠামোবদ্ধ করার পদ্ধতি",
      },
    ],
    codeExample: {
      title: "আপনার প্রথম HTML পেজ তৈরি করুন",
      code: `
\`\`\`html

<!DOCTYPE html>
<html>
<head>
    <title>আমার নাম</title>
</head>
<body>
    <h1>আমার নাম [আপনার নাম]</h1>
    <p>আমি HTML শিখছি!</p>
    <p>এটি আমার প্রথম ওয়েবপেজ।</p>
</body>
</html>

\`\`\`
`,
    },
  },
  2: {
    title: "HTML ডকুমেন্ট স্ট্রাকচার",
    section: "HTML বেসিক",
    duration: "২০ মিনিট",
    content: `
# HTML ডকুমেন্ট স্ট্রাকচার

প্রতিটি HTML ডকুমেন্টের একটি নির্দিষ্ট কাঠামো আছে। এটি বুঝা খুবই গুরুত্বপূর্ণ।

## মূল কাঠামো

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <!-- এখানে মেটা তথ্য থাকে -->
</head>
<body>
    <!-- এখানে দৃশ্যমান কন্টেন্ট থাকে -->
</body>
</html>
\`\`\`

## প্রতিটি অংশের ব্যাখ্যা

### 1. DOCTYPE Declaration
\`\`\`html
<!DOCTYPE html>
\`\`\`
- ব্রাউজারকে বলে এটি HTML5 ডকুমেন্ট
- সবসময় প্রথম লাইনে লিখতে হয়
- এটি একটি ট্যাগ নয়, একটি নির্দেশনা

### 2. HTML Element
\`\`\`html
<html>
    <!-- সব কন্টেন্ট এখানে -->
</html>
\`\`\`
- পুরো ডকুমেন্টের রুট এলিমেন্ট
- সব অন্যান্য এলিমেন্ট এর ভিতরে থাকে

### 3. Head Section
\`\`\`html
<head>
    <title>পেজের শিরোনাম</title>
    <meta charset="UTF-8">
</head>
\`\`\`
- পেজের মেটা তথ্য থাকে
- ব্রাউজারে দেখা যায় না
- SEO এবং ব্রাউজার সেটিংসের জন্য গুরুত্বপূর্ণ

### 4. Body Section
\`\`\`html
<body>
    <h1>শিরোনাম</h1>
    <p>প্যারাগ্রাফ</p>
</body>
</html>
\`\`\`
- দৃশ্যমান সব কন্টেন্ট এখানে
- ইউজার যা দেখে তা এখানে থাকে
    `,
    quiz: {
      question: "HTML ডকুমেন্টের কোন অংশে দৃশ্যমান কন্টেন্ট থাকে?",
      options: ["head", "body", "html", "title"],
      correct: 1,
      explanation:
        "body ট্যাগের মধ্যে সব দৃশ্যমান কন্টেন্ট থাকে যা ইউজার ব্রাউজারে দেখতে পায়।",
    },
    glossary: [
      {
        term: "DOCTYPE",
        definition:
          "ব্রাউজারকে HTML ভার্সন সম্পর্কে জানানোর জন্য ব্যবহৃত ডিক্লারেশন",
      },
      {
        term: "Head",
        definition: "HTML ডকুমেন্টের মেটা তথ্য সংরক্ষণের অংশ",
      },
      {
        term: "Body",
        definition: "HTML ডকুমেন্টের দৃশ্যমান কন্টেন্ট সংরক্ষণের অংশ",
      },
    ],
    codeExample: {
      title: "সম্পূর্ণ HTML স্ট্রাকচার তৈরি করুন",
      code: `
\`\`\`html      
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>আমার পোর্টফোলিও</title>
    <meta name="description" content="আমার ব্যক্তিগত ওয়েবসাইট">
</head>
<body>
    <!-- এখানে আপনার কন্টেন্ট লিখুন -->
    <h1>আমার নাম</h1>
    <p>আমি একজন ওয়েব ডেভেলপার।</p>
    
    <!-- কমেন্ট: এভাবে নোট লিখতে পারেন -->
</body>
</html>
\`\`\`
`,
    },
  },
};

export default function HTMLLessonPage() {
  const params = useParams();
  const lessonId = Number.parseInt(params.id as string);
  const lesson = htmlLessonData[lessonId as keyof typeof htmlLessonData];

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
          <Link href='/courses/html' className='hover:text-blue-600'>
            HTML
          </Link>
          <ChevronRight className='w-4 h-4' />
          <span>{lesson.title}</span>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-3'>
            <div className='mb-8'>
              <Badge className='mb-3 bg-orange-100 text-orange-800'>
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
              <Card className='mb-8 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200'>
                <CardHeader>
                  <CardTitle className='flex items-center text-orange-800'>
                    <Code2 className='w-5 h-5 mr-2' />
                    {lesson.codeExample.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!showCodeExample ? (
                    <div className='text-center py-4'>
                      <p className='text-orange-700 mb-4'>
                        নিজে কোড লিখে অনুশীলন করুন
                      </p>
                      <Button
                        onClick={() => setShowCodeExample(true)}
                        className='bg-orange-600 hover:bg-orange-700'>
                        <Play className='w-4 h-4 mr-2' />
                        কোড দেখুন
                      </Button>
                    </div>
                  ) : (
                    <div className='space-y-4'>
                      <LessonContent content={lesson.codeExample.code} />
                      <div className='bg-orange-100 p-3 rounded-lg'>
                        <p className='text-sm text-orange-800'>
                          💡 <strong>টিপ:</strong> এই কোডটি একটি .html ফাইলে সেভ
                          করে ব্রাউজারে খুলে দেখুন!
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
                <Link href='/courses/html'>
                  <ChevronLeft className='w-4 h-4 mr-2' />
                  কোর্সে ফিরে যান
                </Link>
              </Button>
              <Button asChild className='bg-orange-600 hover:bg-orange-700'>
                <Link href='/courses/html/lessons/2'>
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
                      HTML কী?
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
            <Card className='bg-orange-50 border-orange-200'>
              <CardHeader>
                <CardTitle className='text-lg text-orange-800'>
                  💡 টিপস
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-orange-700'>
                  <li>• VS Code ব্যবহার করে HTML লিখুন</li>
                  <li>• প্রতিদিন একটু একটু অনুশীলন করুন</li>
                  <li>• ব্রাউজারে টেস্ট করে দেখুন</li>
                  <li>• HTML Validator দিয়ে কোড চেক করুন</li>
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
                  একটি HTML পেজ তৈরি করুন যাতে আপনার নাম, একটি শিরোনাম এবং একটি
                  প্যারাগ্রাফ থাকবে।
                </p>
                <Button
                  size='sm'
                  variant='outline'
                  className='border-green-300 text-green-700 hover:bg-green-100'>
                  সমাধান দেখুন
                </Button>
              </CardContent>
            </Card>

            {/* HTML Validator */}
            <Card className='bg-blue-50 border-blue-200'>
              <CardHeader>
                <CardTitle className='text-lg text-blue-800'>
                  🔍 HTML ভ্যালিডেটর
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-blue-700 mb-3'>
                  আপনার HTML কোড সঠিক কিনা চেক করুন
                </p>
                <Button
                  size='sm'
                  variant='outline'
                  className='border-blue-300 text-blue-700 hover:bg-blue-100'>
                  ভ্যালিডেটর ব্যবহার করুন
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
