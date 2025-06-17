"use client"

import { useState } from "react"
import { BookOpen, Brain, ChevronRight, ChevronLeft, CheckCircle, X, RotateCcw, Lightbulb, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"

// Sample lesson data - in real app this would come from a database
const lessonData = {
  1: {
    title: "লিনিয়ার অ্যালজেব্রা - ভেক্টর এবং ম্যাট্রিক্স",
    section: "গণিতের ভিত্তি",
    duration: "১৫ মিনিট",
    content: `
# ভেক্টর এবং ম্যাট্রিক্স - সহজ ভাষায়

## ভেক্টর কী?

ভেক্টর হলো সংখ্যার একটি তালিকা। যেমন আপনার বাড়ির ঠিকানা লিখতে গেলে আপনি লিখেন:
- বাড়ি নম্বর: ১২৩
- রোড নম্বর: ৫
- এলাকা: ধানমন্ডি

এটাকে আমরা একটি ভেক্টর হিসেবে লিখতে পারি: [১২৩, ৫, "ধানমন্ডি"]

## বাস্তব জীবনে ভেক্টর

একটি ছাত্রের নম্বর:
- গণিত: ৮৫
- ইংরেজি: ৯০  
- বিজ্ঞান: ৭৮

এটি একটি ভেক্টর: [৮৫, ৯০, ৭৮]

## ম্যাট্রিক্স কী?

ম্যাট্রিক্স হলো ভেক্টরের একটি সংগ্রহ। যেমন একটি ক্লাসের সব ছাত্রের নম্বর:

\`\`\`
রহিম:  [৮৫, ৯০, ৭৮]
করিম:  [৯২, ৮৮, ৮৫]
সালিম: [৭৮, ৮৫, ৯০]
\`\`\`

এটি একটি ৩×৩ ম্যাট্রিক্স।

## কেন এটা গুরুত্বপূর্ণ?

মেশিন লার্নিংয়ে:
- প্রতিটি ডেটা পয়েন্ট একটি ভেক্টর
- পুরো ডেটাসেট একটি ম্যাট্রিক্স
- সব গণনা ভেক্টর এবং ম্যাট্রিক্স দিয়ে হয়

## Python এ ভেক্টর

\`\`\`python
import numpy as np

# একটি ভেক্টর তৈরি
student_marks = np.array([85, 90, 78])
print("ছাত্রের নম্বর:", student_marks)

# ভেক্টর যোগ
student1 = np.array([85, 90, 78])
student2 = np.array([92, 88, 85])
total = student1 + student2
print("মোট নম্বর:", total)
\`\`\`

## মনে রাখার টিপস

1. **ভেক্টর = একটি তালিকা** (যেমন: একজনের নম্বর)
2. **ম্যাট্রিক্স = তালিকার তালিকা** (যেমন: সবার নম্বর)
3. **ML এ সব ডেটা ভেক্টর/ম্যাট্রিক্স আকারে থাকে**
    `,
    quiz: {
      question: "একটি ভেক্টর কী?",
      options: [
        "সংখ্যার একটি তালিকা",
        "একটি গাণিতিক সূত্র", 
        "একটি প্রোগ্রামিং ভাষা",
        "একটি কম্পিউটার প্রোগ্রাম"
      ],
      correct: 0,
      explanation: "ভেক্টর হলো সংখ্যার একটি তালিকা বা অ্যারে। যেমন [১, ২, ৩] একটি ভেক্টর।"
    },
    glossary: [
      { term: "ভেক্টর", definition: "সংখ্যার একটি তালিকা বা অ্যারে" },
      { term: "ম্যাট্রিক্স", definition: "ভেক্টরের একটি সংগ্রহ, সারি এবং কলামে সাজানো" },
      { term: "NumPy", definition: "Python এর একটি লাইব্রেরি যা ভেক্টর এবং ম্যাট্রিক্স নিয়ে কাজ করে" }
    ]
  }
}

export default function LessonPage() {
  const params = useParams()
  const lessonId = parseInt(params.id as string)
  const lesson = lessonData[lessonId as keyof typeof lessonData]
  
  const [showQuiz, setShowQuiz] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hoveredTerm, setHoveredTerm] = useState<string | null>(null)

  if (!lesson) {
    return <div>Lesson not found</div>
  }

  const handleQuizSubmit = () => {
    setShowResult(true)
  }

  const resetQuiz = () => {
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">শিখন</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">
              কোর্স
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              আমাদের সম্পর্কে
            </Link>
          </nav>
        </div>
      </header>

      <div className="container py-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/courses" className="hover:text-blue-600">কোর্স</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/courses/machine-learning" className="hover:text-blue-600">মেশিন লার্নিং</Link>
          <ChevronRight className="w-4 h-4" />
          <span>{lesson.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Lesson Header */}
            <div className="mb-8">
              <Badge className="mb-3">{lesson.section}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
              <p className="text-gray-600">⏱️ {lesson.duration}</p>
            </div>

            {/* Lesson Content */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ 
                    __html: lesson.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/```python\n([\s\S]*?)\n```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code class="text-sm">$1</code></pre>')
                      .replace(/```\n([\s\S]*?)\n```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code class="text-sm">$1</code></pre>')
                      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h1>')
                      .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold text-gray-800 mb-3 mt-6">$1</h2>')
                      .replace(/^### (.*$)/gm, '<h3 class="text-lg font-medium text-gray-700 mb-2 mt-4">$1</h3>')
                      .replace(/^\- (.*$)/gm, '<li class="ml-4">$1</li>')
                      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-4">$2</li>')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/^(?!<[h|l|p|c])(.*$)/gm, '<p class="mb-4">$1</p>')
                  }} 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quiz Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                  কুইজ - আপনি কতটুকু বুঝেছেন?
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!showQuiz ? (
                  <div className="text-center py-6">
                    <p className="text-gray-600 mb-4">লেসন শেষ করার পর কুইজ দিয়ে নিজেকে পরীক্ষা করুন</p>
                    <Button onClick={() => setShowQuiz(true)} className="bg-blue-600 hover:bg-blue-700">
                      কুইজ শুরু করুন
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{lesson.quiz.question}</h3>
                    
                    <div className="space-y-2">
                      {lesson.quiz.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => !showResult && setSelectedAnswer(index)}
                          disabled={showResult}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            showResult
                              ? index === lesson.quiz.correct
                                ? 'bg-green-100 border-green-500 text-green-800'
                                : index === selectedAnswer && index !== lesson.quiz.correct
                                ? 'bg-red-100 border-red-500 text-red-800'
                                : 'bg-gray-50 border-gray-200'
                              : selectedAnswer === index
                              ? 'bg-blue-100 border-blue-500'
                              : 'bg-white border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center text-xs font-bold">
                              {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                            {showResult && index === lesson.quiz.correct && (
                              <CheckCircle className="w-5 h-5 ml-auto text-green-600" />
                            )}
                            {showResult && index === selectedAnswer && index !== lesson.quiz.correct && (
                              <X className="w-5 h-5 ml-auto text-red-600" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {!showResult && selectedAnswer !== null && (
                      <Button onClick={handleQuizSubmit} className="bg-blue-600 hover:bg-blue-700">
                        উত্তর জমা দিন
                      </Button>
                    )}

                    {showResult && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">ব্যাখ্যা:</h4>
                        <p className="text-blue-700">{lesson.quiz.explanation}</p>
                        <Button 
                          onClick={resetQuiz} 
                          variant="outline" 
                          className="mt-3"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          আবার চেষ্টা করুন
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button asChild variant="outline">
                <Link href="/courses/machine-learning">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  কোর্সে ফিরে যান
                </Link>
              </Button>
              <Button asChild>
                <Link href="/courses/machine-learning/lessons/2">
                  পরবর্তী লেসন
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Table of Contents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">এই লেসনে</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-blue-600 hover:underline">ভেক্টর কী?</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">বাস্তব জীবনে ভেক্টর</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">ম্যাট্রিক্স কী?</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Python এ ভেক্টর</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">মনে রাখার টিপস</a></li>
                </ul>
              </CardContent>
            </Card>

            {/* Glossary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
                  শব্দকোষ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lesson.glossary.map((item, index) => (
                    <div key={index} className="relative">
                      <button
                        className="text-left w-full"
                        onMouseEnter={() => setHoveredTerm(item.term)}
                        onMouseLeave={() => setHoveredTerm(null)}
                      >
                        <span className="text-blue-600 font-medium border-b border-dotted border-blue-600 cursor-help">
                          {item.term}
                        </span>
                      </button>
                      {hoveredTerm === item.term && (
                        <div className="absolute z-10 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg -top-2 left-0 transform -translate-y-full">
                          {item.definition}
                          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-800">💡 টিপস</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• ভেক্টরকে একটি তালিকা হিসেবে ভাবুন</li>
                  <li>• বাস্তব উদাহরণ দিয়ে অনুশীলন করুন</li>
                  <li>• Python কোড নিজে লিখে দেখুন</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mini Challenge */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">🎯 চ্যালেঞ্জ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-700 mb-3">
                  আপনার পরিবারের সদস্যদের বয়স নিয়ে একটি ভেক্টর তৈরি করুন এবং গড় বয়স বের করুন।
                </p>
                <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                  সমাধান দেখুন
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}