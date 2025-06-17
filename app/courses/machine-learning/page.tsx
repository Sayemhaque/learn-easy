"use client"

import { useState } from "react"
import { BookOpen, Brain, ChevronRight, ChevronDown, Play, CheckCircle, Circle, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const courseStructure = [
  {
    id: 1,
    title: "গণিতের ভিত্তি",
    description: "ML এর জন্য প্রয়োজনীয় গণিত",
    duration: "২ সপ্তাহ",
    lessons: [
      { id: 1, title: "লিনিয়ার অ্যালজেব্রা - ভেক্টর এবং ম্যাট্রিক্স", completed: false },
      { id: 2, title: "ক্যালকুলাস - ডেরিভেটিভ এবং গ্রেডিয়েন্ট", completed: false },
      { id: 3, title: "পরিসংখ্যান - গড়, মিডিয়ান, স্ট্যান্ডার্ড ডেভিয়েশন", completed: false },
      { id: 4, title: "সম্ভাব্যতা - বেসিক প্রোবাবিলিটি", completed: false }
    ]
  },
  {
    id: 2,
    title: "Python প্রোগ্রামিং",
    description: "ML এর জন্য Python শেখা",
    duration: "৩ সপ্তাহ",
    lessons: [
      { id: 5, title: "Python বেসিক - ভেরিয়েবল, ডেটা টাইপ", completed: false },
      { id: 6, title: "লিস্ট, ডিকশনারি এবং ফাংশন", completed: false },
      { id: 7, title: "NumPy - অ্যারে এবং ম্যাথমেটিক্যাল অপারেশন", completed: false },
      { id: 8, title: "Pandas - ডেটা ম্যানিপুলেশন", completed: false },
      { id: 9, title: "Matplotlib - ডেটা ভিজুয়ালাইজেশন", completed: false }
    ]
  },
  {
    id: 3,
    title: "ডেটা সায়েন্স",
    description: "ডেটা প্রসেসিং এবং অ্যানালাইসিস",
    duration: "২ সপ্তাহ",
    lessons: [
      { id: 10, title: "ডেটা ক্লিনিং - মিসিং ভ্যালু হ্যান্ডলিং", completed: false },
      { id: 11, title: "EDA - Exploratory Data Analysis", completed: false },
      { id: 12, title: "ফিচার ইঞ্জিনিয়ারিং", completed: false },
      { id: 13, title: "ডেটা ভিজুয়ালাইজেশন টেকনিক", completed: false }
    ]
  },
  {
    id: 4,
    title: "মেশিন লার্নিং বেসিক",
    description: "ML এর মূল ধারণা",
    duration: "৩ সপ্তাহ",
    lessons: [
      { id: 14, title: "ML কী এবং কেন?", completed: false },
      { id: 15, title: "সুপারভাইজড vs আনসুপারভাইজড লার্নিং", completed: false },
      { id: 16, title: "লিনিয়ার রিগ্রেশন", completed: false },
      { id: 17, title: "লজিস্টিক রিগ্রেশন", completed: false },
      { id: 18, title: "ডিসিশন ট্রি", completed: false }
    ]
  },
  {
    id: 5,
    title: "অ্যাডভান্সড ML",
    description: "জটিল ML অ্যালগরিদম",
    duration: "৪ সপ্তাহ",
    lessons: [
      { id: 19, title: "র‍্যান্ডম ফরেস্ট", completed: false },
      { id: 20, title: "SVM - Support Vector Machine", completed: false },
      { id: 21, title: "K-Means ক্লাস্টারিং", completed: false },
      { id: 22, title: "মডেল ইভ্যালুয়েশন", completed: false },
      { id: 23, title: "হাইপারপ্যারামিটার টিউনিং", completed: false }
    ]
  },
  {
    id: 6,
    title: "ডিপ লার্নিং",
    description: "নিউরাল নেটওয়ার্ক",
    duration: "৪ সপ্তাহ",
    lessons: [
      { id: 24, title: "নিউরাল নেটওয়ার্ক বেসিক", completed: false },
      { id: 25, title: "TensorFlow এবং Keras", completed: false },
      { id: 26, title: "CNN - কম্পিউটার ভিশন", completed: false },
      { id: 27, title: "RNN - Natural Language Processing", completed: false },
      { id: 28, title: "প্রজেক্ট: ইমেজ ক্লাসিফিকেশন", completed: false }
    ]
  }
]

export default function MachineLearningCoursePage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([1])

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const totalLessons = courseStructure.reduce((total, section) => total + section.lessons.length, 0)
  const completedLessons = courseStructure.reduce((total, section) => 
    total + section.lessons.filter(lesson => lesson.completed).length, 0
  )

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

      <div className="container py-8">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/courses" className="hover:text-blue-600">কোর্স</Link>
            <ChevronRight className="w-4 h-4" />
            <span>মেশিন লার্নিং</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">মেশিন লার্নিং</h1>
                  <p className="text-gray-600">কৃত্রিম বুদ্ধিমত্তা শিখুন একদম শূন্য থেকে</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                এই কোর্সে আপনি শিখবেন কিভাবে মেশিন লার্নিং কাজ করে, কিভাবে ডেটা থেকে প্যাটার্ন খুঁজে বের করতে হয় এবং 
                কিভাবে AI মডেল তৈরি করতে হয়। সবকিছু সহজ বাংলায়, বাস্তব উদাহরণ দিয়ে।
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  <Clock className="w-4 h-4 mr-1" />
                  ৩-ৄ মাস
                </Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <Users className="w-4 h-4 mr-1" />
                  শুরুর লেভেল
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {totalLessons} টি লেসন
                </Badge>
              </div>

              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/courses/machine-learning/lessons/1">
                  <Play className="w-5 h-5 mr-2" />
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
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>সম্পন্ন</span>
                        <span>{completedLessons}/{totalLessons}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      আপনি এখনো শুরু করেননি। প্রথম লেসন দিয়ে শুরু করুন!
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">কোর্সের বিষয়বস্তু</h2>
            
            <div className="space-y-4">
              {courseStructure.map((section) => (
                <Card key={section.id} className="overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">{section.id}</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{section.title}</CardTitle>
                          <CardDescription>{section.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{section.duration}</Badge>
                        {expandedSections.includes(section.id) ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {expandedSections.includes(section.id) && (
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        {section.lessons.map((lesson) => (
                          <div key={lesson.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            {lesson.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-400" />
                            )}
                            <span className={`flex-1 ${lesson.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                              {lesson.title}
                            </span>
                            <Button 
                              asChild 
                              variant="ghost" 
                              size="sm"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <Link href={`/courses/machine-learning/lessons/${lesson.id}`}>
                                {lesson.completed ? 'পুনরায় দেখুন' : 'শুরু করুন'}
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

          <div className="space-y-6">
            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>যা শিখবেন</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">গণিতের ভিত্তি (সহজ করে)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">Python প্রোগ্রামিং</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">ডেটা সায়েন্স টুলস</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">ML অ্যালগরিদম</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">ডিপ লার্নিং</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">বাস্তব প্রজেক্ট</span>
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
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• মাধ্যমিক স্তরের গণিত</li>
                  <li>• কম্পিউটার ব্যবহারের মৌলিক জ্ঞান</li>
                  <li>• শেখার আগ্রহ এবং ধৈর্য</li>
                </ul>
                <p className="text-sm text-green-600 mt-3">
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
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Python</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Jupyter Notebook</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>NumPy, Pandas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Scikit-learn</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>TensorFlow</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}