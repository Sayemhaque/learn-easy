import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, TrendingUp, BarChart3 } from "lucide-react"

export default function MathematicsPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            গণিত ভিত্তি
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">মেশিন লার্নিংয়ের জন্য গণিত</h1>
          <p className="text-xl text-muted-foreground">
            মেশিন লার্নিং বুঝতে এবং কার্যকরভাবে প্রয়োগ করতে যে গণিতের বিষয়গুলো জানা প্রয়োজন।
          </p>
        </div>

        {/* Overview */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">কেন গণিত গুরুত্বপূর্ণ?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700">
            <p>
              মেশিন লার্নিং অ্যালগরিদমগুলো মূলত গাণিতিক ফাংশন এবং অপটিমাইজেশনের উপর ভিত্তি করে তৈরি। গণিতের ভিত্তি না থাকলে আপনি শুধু
              টুল ব্যবহার করতে পারবেন, কিন্তু সমস্যা সমাধান এবং নতুন পদ্ধতি উদ্ভাবন করতে পারবেন না।
            </p>
          </CardContent>
        </Card>

        {/* Main Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Calculator className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-600">লিনিয়ার অ্যালজেব্রা</CardTitle>
              </div>
              <CardDescription>ভেক্টর, ম্যাট্রিক্স এবং তাদের অপারেশন</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ভেক্টর এবং ভেক্টর অপারেশন</li>
                  <li>• ম্যাট্রিক্স এবং ম্যাট্রিক্স গুণ</li>
                  <li>• আইগেনভ্যালু এবং আইগেনভেক্টর</li>
                  <li>• সিঙ্গুলার ভ্যালু ডিকম্পোজিশন (SVD)</li>
                  <li>• প্রিন্সিপাল কম্পোনেন্ট অ্যানালাইসিস (PCA)</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>ব্যবহার:</strong> ডেটা ট্রান্সফরমেশন, ডাইমেনশনালিটি রিডাকশন, নিউরাল নেটওয়ার্কের ওয়েট ম্যাট্রিক্স
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/mathematics/linear-algebra">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-600">ক্যালকুলাস</CardTitle>
              </div>
              <CardDescription>ডেরিভেটিভ, গ্রেডিয়েন্ট এবং অপটিমাইজেশন</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ডেরিভেটিভ এবং পার্শিয়াল ডেরিভেটিভ</li>
                  <li>• গ্রেডিয়েন্ট এবং ডাইরেকশনাল ডেরিভেটিভ</li>
                  <li>• চেইন রুল</li>
                  <li>• অপটিমাইজেশন (ম্যাক্সিমা/মিনিমা)</li>
                  <li>• ল্যাগ্রাঞ্জ মাল্টিপ্লায়ার</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>ব্যবহার:</strong> গ্রেডিয়েন্ট ডিসেন্ট, ব্যাকপ্রোপাগেশন, কস্ট ফাংশন অপটিমাইজেশন
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/mathematics/calculus">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-600">সম্ভাব্যতা ও পরিসংখ্যান</CardTitle>
              </div>
              <CardDescription>ডেটা বিশ্লেষণ এবং অনিশ্চয়তা পরিমাপ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• প্রোবাবিলিটি ডিস্ট্রিবিউশন</li>
                  <li>• বেইজ থিওরেম</li>
                  <li>• হাইপোথিসিস টেস্টিং</li>
                  <li>• কনফিডেন্স ইন্টারভাল</li>
                  <li>• রিগ্রেশন অ্যানালাইসিস</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-700">
                  <strong>ব্যবহার:</strong> বেইজিয়ান ইনফারেন্স, A/B টেস্টিং, মডেল ইভ্যালুয়েশন, আনসার্টেইনটি কোয়ান্টিফিকেশন
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/mathematics/statistics">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-orange-600">ডিসক্রিট ম্যাথমেটিক্স</CardTitle>
              </div>
              <CardDescription>গ্রাফ থিওরি, কম্বিনেটরিক্স এবং লজিক</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• গ্রাফ থিওরি</li>
                  <li>• কম্বিনেটরিক্স</li>
                  <li>• সেট থিওরি</li>
                  <li>• বুলিয়ান অ্যালজেব্রা</li>
                  <li>• ইনফরমেশন থিওরি</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>ব্যবহার:</strong> গ্রাফ নিউরাল নেটওয়ার্ক, ডিসিশন ট্রি, ফিচার সিলেকশন, এনট্রপি ক্যালকুলেশন
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/mathematics/discrete">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Learning Resources */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">শেখার রিসোর্স</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">বই</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• "Mathematics for Machine Learning" - Deisenroth, Faisal, Ong</li>
                  <li>• "Linear Algebra Done Right" - Sheldon Axler</li>
                  <li>• "Introduction to Statistical Learning" - James, Witten</li>
                  <li>• "Pattern Recognition and Machine Learning" - Bishop</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">অনলাইন কোর্স</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Khan Academy - Linear Algebra</li>
                  <li>• 3Blue1Brown - Essence of Linear Algebra</li>
                  <li>• MIT OpenCourseWare - Calculus</li>
                  <li>• Coursera - Mathematics for Machine Learning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Practice Problems */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800">অনুশীলনী</CardTitle>
          </CardHeader>
          <CardContent className="text-yellow-700">
            <p className="mb-4">
              প্রতিটি বিষয়ের জন্য আমরা হ্যান্ডস-অন অনুশীলনী এবং Python কোড উদাহরণ প্রদান করেছি। তত্ত্বের সাথে সাথে প্র্যাকটিক্যাল প্রয়োগও
              শিখুন।
            </p>
            <Button asChild variant="outline" className="border-yellow-300 text-yellow-800 hover:bg-yellow-100">
              <Link href="/docs/mathematics/exercises">অনুশীলনী দেখুন</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/mathematics/linear-algebra">
              লিনিয়ার অ্যালজেব্রা দিয়ে শুরু করুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/programming">প্রোগ্রামিং শিখুন</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
