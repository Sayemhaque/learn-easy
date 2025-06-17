import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, TrendingUp, Zap, Target, BarChart3 } from "lucide-react"

export default function CalculusPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            গণিত ভিত্তি
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">ক্যালকুলাস</h1>
          <p className="text-xl text-muted-foreground">
            মেশিন লার্নিংয়ের অপটিমাইজেশনের হৃদয় হলো ক্যালকুলাস। গ্রেডিয়েন্ট ডিসেন্ট থেকে ব্যাকপ্রোপাগেশন - সবকিছুই ক্যালকুলাসের উপর ভিত্তি
            করে।
          </p>
        </div>

        {/* Why Important */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">কেন ক্যালকুলাস গুরুত্বপূর্ণ?</CardTitle>
          </CardHeader>
          <CardContent className="text-green-700 space-y-3">
            <p>মেশিন লার্নিংয়ে ক্যালকুলাসের প্রধান ব্যবহার:</p>
            <ul className="space-y-2 ml-4">
              <li>
                • <strong>অপটিমাইজেশন:</strong> কস্ট ফাংশন মিনিমাইজ করা
              </li>
              <li>
                • <strong>গ্রেডিয়েন্ট ডিসেন্ট:</strong> সবচেয়ে জনপ্রিয় অপটিমাইজেশন অ্যালগরিদম
              </li>
              <li>
                • <strong>ব্যাকপ্রোপাগেশন:</strong> নিউরাল নেটওয়ার্ক ট্রেনিং
              </li>
              <li>
                • <strong>চেইন রুল:</strong> কম্পোজিট ফাংশনের ডেরিভেটিভ
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-600">ডেরিভেটিভ এবং পার্শিয়াল ডেরিভেটিভ</CardTitle>
              </div>
              <CardDescription>ফাংশনের পরিবর্তনের হার এবং স্লোপ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ডেরিভেটিভের মূল ধারণা</li>
                  <li>• পাওয়ার রুল, প্রোডাক্ট রুল</li>
                  <li>• পার্শিয়াল ডেরিভেটিভ</li>
                  <li>• মাল্টিভেরিয়েবল ফাংশন</li>
                  <li>• জ্যামিতিক ব্যাখ্যা</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/mathematics/calculus/derivatives">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-600">গ্রেডিয়েন্ট এবং ডাইরেকশনাল ডেরিভেটিভ</CardTitle>
              </div>
              <CardDescription>মাল্টিভেরিয়েবল ফাংশনের সর্বোচ্চ পরিবর্তনের দিক</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• গ্রেডিয়েন্ট ভেক্টর</li>
                  <li>• ডাইরেকশনাল ডেরিভেটিভ</li>
                  <li>• গ্রেডিয়েন্টের জ্যামিতিক অর্থ</li>
                  <li>• কনট্যুর লাইন এবং লেভেল সেট</li>
                  <li>• গ্রেডিয়েন্ট ডিসেন্টের ভিত্তি</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/mathematics/calculus/gradient">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-600">চেইন রুল</CardTitle>
              </div>
              <CardDescription>কম্পোজিট ফাংশনের ডেরিভেটিভ - ব্যাকপ্রোপাগেশনের ভিত্তি</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• চেইন রুলের মূল নীতি</li>
                  <li>• কম্পোজিট ফাংশন</li>
                  <li>• মাল্টিভেরিয়েবল চেইন রুল</li>
                  <li>• ব্যাকপ্রোপাগেশনে প্রয়োগ</li>
                  <li>• কম্পিউটেশনাল গ্রাফ</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/mathematics/calculus/chain-rule">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-orange-600">অপটিমাইজেশন</CardTitle>
              </div>
              <CardDescription>ফাংশনের সর্বোচ্চ এবং সর্বনিম্ন মান খোঁজা</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ক্রিটিক্যাল পয়েন্ট</li>
                  <li>• সেকেন্ড ডেরিভেটিভ টেস্ট</li>
                  <li>• কনস্ট্রেইনড অপটিমাইজেশন</li>
                  <li>• ল্যাগ্রাঞ্জ মাল্টিপ্লায়ার</li>
                  <li>• গ্লোবাল vs লোকাল মিনিমা</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/mathematics/calculus/optimization">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Gradient Descent Special Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-blue-600">গ্রেডিয়েন্ট ডিসেন্ট</CardTitle>
            </div>
            <CardDescription>মেশিন লার্নিংয়ের সবচেয়ে গুরুত্বপূর্ণ অপটিমাইজেশন অ্যালগরিদম</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">মূল ধারণা:</h4>
              <p className="text-sm text-muted-foreground">
                গ্রেডিয়েন্ট ডিসেন্ট হলো একটি ইটারেটিভ অপটিমাইজেশন অ্যালগরিদম যা ফাংশনের লোকাল মিনিমাম খুঁজে বের করে।
              </p>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">অ্যালগরিদম:</h4>
              <div className="font-mono text-blue-700 text-sm space-y-1">
                <p>1. θ = initial_value</p>
                <p>2. while not converged:</p>
                <p> θ = θ - α × ∇f(θ)</p>
                <p> (α = learning rate)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">প্রকারভেদ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Batch Gradient Descent</li>
                  <li>• Stochastic Gradient Descent</li>
                  <li>• Mini-batch Gradient Descent</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">উন্নত ভার্সন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Adam Optimizer</li>
                  <li>• RMSprop</li>
                  <li>• AdaGrad</li>
                </ul>
              </div>
            </div>

            <Button asChild className="w-full">
              <Link href="/docs/mathematics/calculus/gradient-descent">
                গ্রেডিয়েন্ট ডিসেন্ট বিস্তারিত
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
                  <li>• উচ্চ মাধ্যমিক স্তরের অ্যালজেব্রা</li>
                  <li>• ফাংশনের ধারণা</li>
                  <li>• গ্রাফ এবং স্লোপ</li>
                  <li>• লিমিটের মৌলিক ধারণা</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">সহায়ক</h4>
                <ul className="space-y-1 text-sm">
                  <li>• ভেক্টর এবং ম্যাট্রিক্স</li>
                  <li>• Python প্রোগ্রামিং</li>
                  <li>• NumPy এবং Matplotlib</li>
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
                  <span>ডেরিভেটিভ এবং পার্শিয়াল ডেরিভেটিভ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ২
                  </div>
                  <span>গ্রেডিয়েন্ট এবং ডাইরেকশনাল ডেরিভেটিভ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৩
                  </div>
                  <span>চেইন রুল</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৪
                  </div>
                  <span>অপটিমাইজেশন</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৫
                  </div>
                  <span>গ্রেডিয়েন্ট ডিসেন্ট</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/mathematics/calculus/derivatives">
              ডেরিভেটিভ দিয়ে শুরু করুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/mathematics/statistics">পরিসংখ্যান শিখুন</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
