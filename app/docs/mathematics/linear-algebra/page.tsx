import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, TrendingUp, BarChart3 } from "lucide-react"

export default function LinearAlgebraPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            গণিত ভিত্তি
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">লিনিয়ার অ্যালজেব্রা</h1>
          <p className="text-xl text-muted-foreground">
            মেশিন লার্নিংয়ের হৃদয় হলো লিনিয়ার অ্যালজেব্রা। ভেক্টর, ম্যাট্রিক্স এবং তাদের অপারেশনগুলো বুঝুন।
          </p>
        </div>

        {/* Why Important */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">কেন লিনিয়ার অ্যালজেব্রা গুরুত্বপূর্ণ?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-3">
            <p>মেশিন লার্নিংয়ে প্রায় সব কিছুই ভেক্টর এবং ম্যাট্রিক্স দিয়ে প্রকাশ করা হয়:</p>
            <ul className="space-y-2 ml-4">
              <li>
                • <strong>ডেটা:</strong> প্রতিটি ডেটা পয়েন্ট একটি ভেক্টর
              </li>
              <li>
                • <strong>ফিচার:</strong> সব ফিচার মিলে একটি ম্যাট্রিক্স
              </li>
              <li>
                • <strong>ওয়েট:</strong> নিউরাল নেটওয়ার্কের ওয়েট ম্যাট্রিক্স
              </li>
              <li>
                • <strong>ট্রান্সফরমেশন:</strong> ডেটা পরিবর্তনের জন্য ম্যাট্রিক্স অপারেশন
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Calculator className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-600">ভেক্টর এবং ভেক্টর অপারেশন</CardTitle>
              </div>
              <CardDescription>ভেক্টরের মৌলিক ধারণা এবং গাণিতিক অপারেশন</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ভেক্টর কী এবং কেন ব্যবহার করি</li>
                  <li>• ভেক্টর যোগ, বিয়োগ, গুণ</li>
                  <li>• ডট প্রোডাক্ট এবং ক্রস প্রোডাক্ট</li>
                  <li>• ভেক্টর নর্ম এবং ইউনিট ভেক্টর</li>
                  <li>• ভেক্টর প্রজেকশন</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/mathematics/linear-algebra/vectors">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-600">ম্যাট্রিক্স এবং ম্যাট্রিক্স অপারেশন</CardTitle>
              </div>
              <CardDescription>ম্যাট্রিক্সের গুণ, ইনভার্স এবং অন্যান্য অপারেশন</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ম্যাট্রিক্স কী এবং প্রকারভেদ</li>
                  <li>• ম্যাট্রিক্স যোগ, বিয়োগ, গুণ</li>
                  <li>• ট্রান্সপোজ এবং ইনভার্স</li>
                  <li>• ডিটারমিন্যান্ট</li>
                  <li>• র‍্যাঙ্ক এবং নাল স্পেস</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/mathematics/linear-algebra/matrices">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-600">আইগেনভ্যালু এবং আইগেনভেক্টর</CardTitle>
              </div>
              <CardDescription>ম্যাট্রিক্সের বিশেষ বৈশিষ্ট্য এবং ML এ প্রয়োগ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• আইগেনভ্যালু এবং আইগেনভেক্টর কী</li>
                  <li>• কিভাবে হিসাব করতে হয়</li>
                  <li>• জ্যামিতিক ব্যাখ্যা</li>
                  <li>• PCA তে ব্যবহার</li>
                  <li>• ডাইমেনশনালিটি রিডাকশন</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/mathematics/linear-algebra/eigenvalues">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-orange-600">সিঙ্গুলার ভ্যালু ডিকম্পোজিশন (SVD)</CardTitle>
              </div>
              <CardDescription>ম্যাট্রিক্স ফ্যাক্টরাইজেশনের শক্তিশালী টেকনিক</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• SVD কী এবং কেন গুরুত্বপূর্ণ</li>
                  <li>• U, Σ, V ম্যাট্রিক্সের অর্থ</li>
                  <li>• ইমেজ কম্প্রেশনে ব্যবহার</li>
                  <li>• রেকমেন্ডেশন সিস্টেমে প্রয়োগ</li>
                  <li>• নয়েজ রিডাকশন</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/mathematics/linear-algebra/svd">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* PCA Special Section */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-purple-600">প্রিন্সিপাল কম্পোনেন্ট অ্যানালাইসিস (PCA)</CardTitle>
            </div>
            <CardDescription>ডাইমেনশনালিটি রিডাকশনের সবচেয়ে জনপ্রিয় টেকনিক</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">যা শিখবেন:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• PCA এর মূল ধারণা</li>
                  <li>• কোভেরিয়েন্স ম্যাট্রিক্স</li>
                  <li>• প্রিন্সিপাল কম্পোনেন্ট খোঁজা</li>
                </ul>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ভেরিয়েন্স এক্সপ্লেইনড</li>
                  <li>• ডেটা ভিজুয়ালাইজেশন</li>
                  <li>• ফিচার সিলেকশন</li>
                </ul>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg">
              <p className="text-sm text-purple-700">
                <strong>বাস্তব প্রয়োগ:</strong> ইমেজ প্রসেসিং, জিনোমিক্স, ফাইন্যান্স, এবং যেকোনো হাই-ডাইমেনশনাল ডেটা অ্যানালাইসিসে PCA
                ব্যবহার করা হয়।
              </p>
            </div>
            <Button asChild className="w-full">
              <Link href="/docs/mathematics/linear-algebra/pca">
                PCA বিস্তারিত শিখুন
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Prerequisites */}
        <Card>
          <CardHeader>
            <CardTitle>পূর্বশর্ত</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">প্রয়োজনীয়</h4>
                <ul className="space-y-1 text-sm">
                  <li>• মাধ্যমিক স্তরের বীজগণিত</li>
                  <li>• সমীকরণ সমাধানের ধারণা</li>
                  <li>• গ্রাফ এবং কো-অর্ডিনেট সিস্টেম</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">সহায়ক</h4>
                <ul className="space-y-1 text-sm">
                  <li>• ত্রিকোণমিতির মৌলিক ধারণা</li>
                  <li>• Python প্রোগ্রামিং</li>
                  <li>• NumPy লাইব্রেরি</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800">শেখার ক্রম</CardTitle>
          </CardHeader>
          <CardContent className="text-yellow-700">
            <div className="space-y-3">
              <p className="font-semibold">সুপারিশকৃত ক্রম:</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ১
                  </div>
                  <span>ভেক্টর এবং ভেক্টর অপারেশন</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ২
                  </div>
                  <span>ম্যাট্রিক্স এবং ম্যাট্রিক্স অপারেশন</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৩
                  </div>
                  <span>আইগেনভ্যালু এবং আইগেনভেক্টর</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৪
                  </div>
                  <span>সিঙ্গুলার ভ্যালু ডিকম্পোজিশন (SVD)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৫
                  </div>
                  <span>প্রিন্সিপাল কম্পোনেন্ট অ্যানালাইসিস (PCA)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/mathematics/linear-algebra/vectors">
              ভেক্টর দিয়ে শুরু করুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/mathematics/calculus">ক্যালকুলাস শিখুন</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
