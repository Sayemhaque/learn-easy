"use client"

import { useState } from "react"
import { BookOpen, Code, ChevronRight, ChevronLeft, CheckCircle, X, RotateCcw, Lightbulb, MessageCircle, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"

// Sample lesson data for JavaScript
const lessonData = {
  1: {
    title: "জাভাস্ক্রিপ্ট কী এবং কেন?",
    section: "জাভাস্ক্রিপ্ট বেসিক",
    duration: "১০ মিনিট",
    content: `
# জাভাস্ক্রিপ্ট কী এবং কেন?

## জাভাস্ক্রিপ্ট কী?

জাভাস্ক্রিপ্ট হলো একটি প্রোগ্রামিং ভাষা যা ওয়েবসাইটকে জীবন্ত করে তোলে। 

**সহজ ভাষায়:** HTML দিয়ে ওয়েবসাইটের কাঠামো তৈরি হয়, CSS দিয়ে সাজানো হয়, আর জাভাস্ক্রিপ্ট দিয়ে এটাকে ইন্টারঅ্যাক্টিভ করা হয়।

## বাস্তব জীবনের উদাহরণ

একটি বাড়ির সাথে তুলনা করলে:
- **HTML = বাড়ির কাঠামো** (দেয়াল, দরজা, জানালা)
- **CSS = রং এবং সাজসজ্জা** (পেইন্ট, ফার্নিচার)
- **JavaScript = বৈদ্যুতিক সিস্টেম** (লাইট, ফ্যান, এয়ার কন্ডিশনার)

## জাভাস্ক্রিপ্ট দিয়ে কী করা যায়?

### ওয়েবসাইটে:
- বাটনে ক্লিক করলে কিছু ঘটানো
- ফর্ম ভ্যালিডেশন (সঠিক তথ্য দেওয়া হয়েছে কিনা চেক করা)
- অ্যানিমেশন এবং ইফেক্ট
- ডেটা লোড করা (যেমন: ফেসবুকে নতুন পোস্ট দেখানো)

### অন্যান্য জায়গায়:
- মোবাইল অ্যাপ (React Native)
- ডেস্কটপ অ্যাপ (Electron)
- সার্ভার (Node.js)
- গেম ডেভেলপমেন্ট

## কেন জাভাস্ক্রিপ্ট শিখবেন?

1. **সহজ শুরু:** অন্য ভাষার চেয়ে শেখা সহজ
2. **চাকরির সুযোগ:** সবচেয়ে বেশি চাহিদা
3. **ভার্সেটাইল:** ওয়েব থেকে মোবাইল সব জায়গায় ব্যবহার
4. **বিশাল কমিউনিটি:** সাহায্য পাওয়া সহজ

## প্রথম জাভাস্ক্রিপ্ট কোড

\`\`\`javascript
// এটি একটি কমেন্ট - ব্রাউজার এটা দেখবে না
alert("হ্যালো, আমি জাভাস্ক্রিপ্ট!");

// ভেরিয়েবল তৈরি করা
let name = "রহিম";
let age = 25;

// কনসোলে প্রিন্ট করা
console.log("নাম: " + name);
console.log("বয়স: " + age);
\`\`\`

## কোথায় জাভাস্ক্রিপ্ট লিখবেন?

1. **ব্রাউজারের Console:** F12 চেপে Developer Tools খুলুন
2. **HTML ফাইলে:** \`<script>\` ট্যাগের মধ্যে
3. **আলাদা .js ফাইলে:** সবচেয়ে ভাল পদ্ধতি

## মনে রাখার বিষয়

- জাভাস্ক্রিপ্ট **case-sensitive** (বড় ছোট হাতের অক্ষর আলাদা)
- প্রতি লাইনের শেষে **semicolon (;)** দেওয়া ভাল
- **console.log()** দিয়ে যেকোনো কিছু প্রিন্ট করতে পারেন
    `,
    quiz: {
      question: "জাভাস্ক্রিপ্ট দিয়ে কী করা যায় না?",
      options: [
        "ওয়েবসাইটে ইন্টারঅ্যাকশন যোগ করা",
        "মোবাইল অ্যাপ বানানো", 
        "কম্পিউটারের হার্ডওয়্যার সরাসরি কন্ট্রোল করা",
        "সার্ভার সাইড প্রোগ্রামিং"
      ],
      correct: 2,
      explanation: "জাভাস্ক্রিপ্ট দিয়ে কম্পিউটারের হার্ডওয়্যার সরাসরি কন্ট্রোল করা যায় না। এটি একটি high-level ভাষা যা security এর জন্য hardware access সীমিত রাখে।"
    },
    glossary: [
      { term: "JavaScript", definition: "একটি প্রোগ্রামিং ভাষা যা ওয়েবসাইটকে ইন্টারঅ্যাক্টিভ করে তোলে" },
      { term: "Console", definition: "ব্রাউজারের একটি টুল যেখানে জাভাস্ক্রিপ্ট কোড লিখে টেস্ট করা যায়" },
      { term: "Variable", definition: "ডেটা সংরক্ষণ করার জন্য ব্যবহৃত কন্টেইনার" }
    ],
    codeExample: {
      title: "চেষ্টা করে দেখুন",
      code: `// আপনার নাম দিয়ে একটি ভেরিয়েবল তৈরি করুন
let myName = "আপনার নাম এখানে লিখুন";

// এটি কনসোলে প্রিন্ট করুন
console.log("আমার নাম: " + myName);

// একটি সাধারণ গণনা
let num1 = 10;
let num2 = 5;
let result = num1 + num2;

console.log(num1 + " + " + num2 + " = " + result);`
    }
  }
}

export default function JavaScriptLessonPage() {
  const params = useParams()
  const lessonId = parseInt(params.id as string)
  const lesson = lessonData[lessonId as keyof typeof lessonData]
  
  const [showQuiz, setShowQuiz] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hoveredTerm, setHoveredTerm] = useState<string | null>(null)
  const [showCodeExample, setShowCodeExample] = useState(false)

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
          <Link href="/courses/javascript" className="hover:text-blue-600">জাভাস্ক্রিপ্ট</Link>
          <ChevronRight className="w-4 h-4" />
          <span>{lesson.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Lesson Header */}
            <div className="mb-8">
              <Badge className="mb-3 bg-yellow-100 text-yellow-800">{lesson.section}</Badge>
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
                      .replace(/```javascript\n([\s\S]*?)\n```/g, '<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto"><code class="text-sm">$1</code></pre>')
                      .replace(/```\n([\s\S]*?)\n```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code class="text-sm">$1</code></pre>')
                      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h1>')
                      .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold text-gray-800 mb-3 mt-6">$1</h2>')
                      .replace(/^### (.*$)/gm, '<h3 class="text-lg font-medium text-gray-700 mb-2 mt-4">$3</h3>')
                      .replace(/^\- (.*$)/gm, '<li class="ml-4">$1</li>')
                      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-4">$2</li>')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/^(?!<[h|l|p|c])(.*$)/gm, '<p class="mb-4">$1</p>')
                  }} 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Code Example */}
            {lesson.codeExample && (
              <Card className="mb-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-800">
                    <Code className="w-5 h-5 mr-2" />
                    {lesson.codeExample.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!showCodeExample ? (
                    <div className="text-center py-4">
                      <p className="text-yellow-700 mb-4">নিজে কোড লিখে অনুশীলন করুন</p>
                      <Button 
                        onClick={() => setShowCodeExample(true)}
                        className="bg-yellow-600 hover:bg-yellow-700"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        কোড দেখুন
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{lesson.codeExample.code}</code>
                      </pre>
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          💡 <strong>টিপ:</strong> এই কোডটি আপনার ব্রাউজারের Console এ কপি-পেস্ট করে চালিয়ে দেখুন!
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

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
                <Link href="/courses/javascript">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  কোর্সে ফিরে যান
                </Link>
              </Button>
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                <Link href="/courses/javascript/lessons/2">
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
                  <li><a href="#" className="text-blue-600 hover:underline">জাভাস্ক্রিপ্ট কী?</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">বাস্তব জীবনের উদাহরণ</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">কী করা যায়?</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">কেন শিখবেন?</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">প্রথম কোড</a></li>
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
                  <li>• F12 চেপে Console খুলে কোড টেস্ট করুন</li>
                  <li>• প্রতিদিন একটু একটু অনুশীলন করুন</li>
                  <li>• ভুল হলে ঘাবড়াবেন না, এটাই স্বাভাবিক</li>
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
                  আপনার নাম এবং বয়স দিয়ে একটি ভেরিয়েবল তৈরি করুন এবং console.log() দিয়ে প্রিন্ট করুন।
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