import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Clock, Users, Target } from "lucide-react"

export default function IntroductionPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            শুরুর পাঠ
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">মেশিন লার্নিং ইঞ্জিনিয়ার হওয়ার পথ</h1>
          <p className="text-xl text-muted-foreground">
            এই কোর্সে আপনি শিখবেন কিভাবে একজন দক্ষ মেশিন লার্নিং ইঞ্জিনিয়ার হতে হয়। গণিতের ভিত্তি থেকে শুরু করে অ্যাডভান্সড AI মডেল
            পর্যন্ত সবকিছু।
          </p>
        </div>

        {/* Course Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">সময়কাল</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">৬-১২ মাস</p>
              <p className="text-sm text-muted-foreground">দৈনিক ২-৩ ঘন্টা অধ্যয়ন</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <CardTitle className="text-lg">লেভেল</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">শুরুর থেকে</p>
              <p className="text-sm text-muted-foreground">কোন পূর্ব অভিজ্ঞতা প্রয়োজন নেই</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-lg">লক্ষ্য</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">চাকরি প্রস্তুতি</p>
              <p className="text-sm text-muted-foreground">ইন্ডাস্ট্রি রেডি স্কিল</p>
            </CardContent>
          </Card>
        </div>

        {/* What You'll Learn */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">আপনি যা শিখবেন</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">গণিতের ভিত্তি</CardTitle>
                <CardDescription>ML এর জন্য প্রয়োজনীয় গণিত</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">লিনিয়ার অ্যালজেব্রা</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">ক্যালকুলাস এবং অপটিমাইজেশন</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">সম্ভাব্যতা ও পরিসংখ্যান</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">ডিসক্রিট ম্যাথমেটিক্স</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">প্রোগ্রামিং স্কিল</CardTitle>
                <CardDescription>ML এর জন্য প্রয়োজনীয় প্রোগ্রামিং</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">Python প্রোগ্রামিং</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">NumPy, Pandas, Matplotlib</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">Scikit-learn</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">TensorFlow এবং PyTorch</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">মেশিন লার্নিং</CardTitle>
                <CardDescription>মূল ML অ্যালগরিদম এবং টেকনিক</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">সুপারভাইজড লার্নিং</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">আনসুপারভাইজড লার্নিং</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">রিইনফোর্সমেন্ট লার্নিং</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">মডেল ইভ্যালুয়েশন</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">ডিপ লার্নিং</CardTitle>
                <CardDescription>নিউরাল নেটওয়ার্ক এবং অ্যাডভান্সড AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm">নিউরাল নেটওয়ার্ক</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm">CNN এবং কম্পিউটার ভিশন</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm">RNN এবং NLP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm">ট্রান্সফরমার এবং LLM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">পূর্বশর্ত</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">প্রয়োজনীয়</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• মাধ্যমিক স্তরের গণিত</li>
                    <li>• কম্পিউটার ব্যবহারের মৌলিক জ্ঞান</li>
                    <li>• ইংরেজি পড়ার ক্ষমতা</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">সহায়ক (ঐচ্ছিক)</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• প্রোগ্রামিংয়ের পূর্ব অভিজ্ঞতা</li>
                    <li>• উচ্চ মাধ্যমিক গণিত</li>
                    <li>• পরিসংখ্যানের মৌলিক জ্ঞান</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Path */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">শেখার পথ</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 border rounded-lg">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                ১
              </div>
              <div>
                <h4 className="font-semibold">গণিতের ভিত্তি (২-৩ মাস)</h4>
                <p className="text-sm text-muted-foreground">লিনিয়ার অ্যালজেব্রা, ক্যালকুলাস, পরিসংখ্যান শিখুন</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 border rounded-lg">
              <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                ২
              </div>
              <div>
                <h4 className="font-semibold">প্রোগ্রামিং (১-২ মাস)</h4>
                <p className="text-sm text-muted-foreground">Python এবং ডেটা সায়েন্স লাইব্রেরি শিখুন</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 border rounded-lg">
              <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                ৩
              </div>
              <div>
                <h4 className="font-semibold">মেশিন লার্নিং (২-৩ মাস)</h4>
                <p className="text-sm text-muted-foreground">মূল ML অ্যালগরিদম এবং প্রজেক্ট</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 border rounded-lg">
              <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                ৪
              </div>
              <div>
                <h4 className="font-semibold">ডিপ লার্নিং (২-৩ মাস)</h4>
                <p className="text-sm text-muted-foreground">নিউরাল নেটওয়ার্ক এবং অ্যাডভান্সড টপিক</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 border rounded-lg">
              <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                ৫
              </div>
              <div>
                <h4 className="font-semibold">MLOps এবং প্রোডাকশন (১-২ মাস)</h4>
                <p className="text-sm text-muted-foreground">মডেল ডিপ্লয়মেন্ট এবং স্কেলিং</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/mathematics">
              গণিত ভিত্তি দিয়ে শুরু করুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/roadmap">সম্পূর্ণ রোডম্যাপ দেখুন</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
