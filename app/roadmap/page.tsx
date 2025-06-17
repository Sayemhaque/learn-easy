"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { CheckCircle, Circle, Clock, ArrowRight } from "lucide-react"

const roadmapData = [
  {
    id: 1,
    title: "গণিত ভিত্তি",
    description: "ML এর জন্য প্রয়োজনীয় গণিত",
    duration: "২-৩ মাস",
    difficulty: "মধ্যম",
    topics: [
      { name: "লিনিয়ার অ্যালজেব্রা", completed: false },
      { name: "ক্যালকুলাস", completed: false },
      { name: "সম্ভাব্যতা ও পরিসংখ্যান", completed: false },
      { name: "ডিসক্রিট ম্যাথমেটিক্স", completed: false },
    ],
    color: "blue",
  },
  {
    id: 2,
    title: "প্রোগ্রামিং",
    description: "Python এবং ডেটা সায়েন্স টুলস",
    duration: "১-২ মাস",
    difficulty: "সহজ",
    topics: [
      { name: "Python বেসিক", completed: false },
      { name: "NumPy", completed: false },
      { name: "Pandas", completed: false },
      { name: "Matplotlib/Seaborn", completed: false },
      { name: "Jupyter Notebook", completed: false },
    ],
    color: "green",
  },
  {
    id: 3,
    title: "ডেটা সায়েন্স",
    description: "ডেটা প্রসেসিং এবং অ্যানালাইসিস",
    duration: "১-২ মাস",
    difficulty: "মধ্যম",
    topics: [
      { name: "ডেটা ক্লিনিং", completed: false },
      { name: "EDA (Exploratory Data Analysis)", completed: false },
      { name: "ফিচার ইঞ্জিনিয়ারিং", completed: false },
      { name: "ডেটা ভিজুয়ালাইজেশন", completed: false },
    ],
    color: "purple",
  },
  {
    id: 4,
    title: "মেশিন লার্নিং",
    description: "মূল ML অ্যালগরিদম এবং টেকনিক",
    duration: "২-৩ মাস",
    difficulty: "কঠিন",
    topics: [
      { name: "সুপারভাইজড লার্নিং", completed: false },
      { name: "আনসুপারভাইজড লার্নিং", completed: false },
      { name: "মডেল ইভ্যালুয়েশন", completed: false },
      { name: "হাইপারপ্যারামিটার টিউনিং", completed: false },
      { name: "এনসেম্বল মেথড", completed: false },
    ],
    color: "orange",
  },
  {
    id: 5,
    title: "ডিপ লার্নিং",
    description: "নিউরাল নেটওয়ার্ক এবং অ্যাডভান্সড AI",
    duration: "২-৩ মাস",
    difficulty: "কঠিন",
    topics: [
      { name: "নিউরাল নেটওয়ার্ক বেসিক", completed: false },
      { name: "CNN (কম্পিউটার ভিশন)", completed: false },
      { name: "RNN/LSTM (NLP)", completed: false },
      { name: "ট্রান্সফরমার", completed: false },
      { name: "TensorFlow/PyTorch", completed: false },
    ],
    color: "red",
  },
  {
    id: 6,
    title: "MLOps",
    description: "প্রোডাকশন ML সিস্টেম",
    duration: "১-২ মাস",
    difficulty: "কঠিন",
    topics: [
      { name: "মডেল ডিপ্লয়মেন্ট", completed: false },
      { name: "মনিটরিং", completed: false },
      { name: "CI/CD পাইপলাইন", completed: false },
      { name: "ডকার এবং কুবারনেটিস", completed: false },
    ],
    color: "teal",
  },
]

export default function RoadmapPage() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "সহজ":
        return "text-green-600 bg-green-100"
      case "মধ্যম":
        return "text-yellow-600 bg-yellow-100"
      case "কঠিন":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50",
      green: "border-green-200 bg-green-50",
      purple: "border-purple-200 bg-purple-50",
      orange: "border-orange-200 bg-orange-50",
      red: "border-red-200 bg-red-50",
      teal: "border-teal-200 bg-teal-50",
    }
    return colors[color as keyof typeof colors] || "border-gray-200 bg-gray-50"
  }

  const calculateProgress = (topics: any[]) => {
    const completed = topics.filter((topic) => topic.completed).length
    return (completed / topics.length) * 100
  }

  return (
    <div className="container max-w-6xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="mb-2">
            শেখার পথ
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">মেশিন লার্নিং ইঞ্জিনিয়ার রোডম্যাপ</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            শূন্য থেকে শুরু করে একজন দক্ষ ML ইঞ্জিনিয়ার হওয়ার জন্য ধাপে ধাপে গাইড। প্রতিটি পর্যায়ে আপনার অগ্রগতি ট্র্যাক করুন।
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              সামগ্রিক অগ্রগতি
              <Badge variant="outline">০% সম্পন্ন</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={0} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>শুরু</span>
              <span>ML ইঞ্জিনিয়ার</span>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap Phases */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">শেখার পর্যায়সমূহ</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {roadmapData.map((phase, index) => (
              <Card
                key={phase.id}
                className={`hover:shadow-lg transition-all cursor-pointer ${getColorClasses(phase.color)} ${
                  selectedPhase === phase.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-${phase.color}-600 text-white flex items-center justify-center font-bold text-sm`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{phase.title}</CardTitle>
                        <CardDescription className="mt-1">{phase.description}</CardDescription>
                      </div>
                    </div>
                    <Badge className={getDifficultyColor(phase.difficulty)}>{phase.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{phase.duration}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {phase.topics.filter((t) => t.completed).length}/{phase.topics.length} সম্পন্ন
                    </span>
                  </div>

                  <Progress value={calculateProgress(phase.topics)} className="h-2" />

                  {selectedPhase === phase.id && (
                    <div className="space-y-3 pt-4 border-t">
                      <h4 className="font-semibold">বিষয়সমূহ:</h4>
                      <div className="space-y-2">
                        {phase.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-2">
                            {topic.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <Circle className="h-4 w-4 text-gray-400" />
                            )}
                            <span className={`text-sm ${topic.completed ? "line-through text-muted-foreground" : ""}`}>
                              {topic.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="w-full mt-4">
                        <Link href={`/docs/${phase.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          শুরু করুন
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline View */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">সময়রেখা দৃশ্য</h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="space-y-8">
              {roadmapData.map((phase, index) => (
                <div key={phase.id} className="relative flex items-start space-x-6">
                  <div
                    className={`w-8 h-8 rounded-full bg-${phase.color}-600 text-white flex items-center justify-center font-bold text-sm relative z-10`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{phase.title}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge className={getDifficultyColor(phase.difficulty)}>{phase.difficulty}</Badge>
                            <Badge variant="outline">{phase.duration}</Badge>
                          </div>
                        </div>
                        <CardDescription>{phase.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Progress value={calculateProgress(phase.topics)} className="flex-1 mr-4" />
                          <Button asChild size="sm">
                            <Link href={`/docs/${phase.title.toLowerCase().replace(/\s+/g, "-")}`}>শুরু করুন</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800">শেখার টিপস</CardTitle>
          </CardHeader>
          <CardContent className="text-yellow-700 space-y-3">
            <ul className="space-y-2">
              <li>• প্রতিদিন ২-৩ ঘন্টা নিয়মিত অধ্যয়ন করুন</li>
              <li>• তত্ত্বের সাথে সাথে প্র্যাকটিক্যাল প্রজেক্ট করুন</li>
              <li>• কমিউনিটিতে যোগ দিন এবং অন্যদের সাথে শেয়ার করুন</li>
              <li>• একটি পর্যায় সম্পূর্ণ করার পর পরবর্তী পর্যায়ে যান</li>
              <li>• নিয়মিত রিভিশন করুন এবং নোট নিন</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">আজই শুরু করুন!</h2>
          <p className="text-muted-foreground">আপনার ML জার্নি শুরু করতে প্রস্তুত? প্রথম পর্যায় দিয়ে শুরু করুন।</p>
          <Button asChild size="lg">
            <Link href="/docs/mathematics">
              গণিত ভিত্তি দিয়ে শুরু করুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
