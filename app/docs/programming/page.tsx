import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Database, FileText, Zap, Brain, Settings } from "lucide-react"

export default function ProgrammingPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            প্রোগ্রামিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Python প্রোগ্রামিং</h1>
          <p className="text-xl text-muted-foreground">
            মেশিন লার্নিং এবং ডেটা সায়েন্সের জন্য Python - শূন্য থেকে এক্সপার্ট লেভেল পর্যন্ত সম্পূর্ণ গাইড।
          </p>
        </div>

        {/* Why Python */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">কেন Python শিখবেন?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-3">
            <p>Python হলো বর্তমান যুগের সবচেয়ে জনপ্রিয় প্রোগ্রামিং ভাষা, বিশেষ করে ডেটা সায়েন্স এবং ML এর জন্য:</p>
            <ul className="space-y-2 ml-4">
              <li>
                • <strong>সহজ সিনট্যাক্স:</strong> শেখা এবং লেখা সহজ
              </li>
              <li>
                • <strong>বিশাল লাইব্রেরি:</strong> NumPy, Pandas, Scikit-learn, TensorFlow
              </li>
              <li>
                • <strong>কমিউনিটি সাপোর্ট:</strong> বিশ্বব্যাপী বিশাল কমিউনিটি
              </li>
              <li>
                • <strong>ভার্সেটাইল:</strong> ওয়েব ডেভেলপমেন্ট থেকে AI পর্যন্ত সবকিছু
              </li>
              <li>
                • <strong>চাকরির সুযোগ:</strong> উচ্চ চাহিদা এবং ভাল বেতন
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-600">Python বেসিক</CardTitle>
              </div>
              <CardDescription>ভেরিয়েবল, ডেটা টাইপ, অপারেটর</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Python ইনস্টলেশন এবং সেটআপ</li>
                  <li>• ভেরিয়েবল এবং ডেটা টাইপ</li>
                  <li>• অপারেটর এবং এক্সপ্রেশন</li>
                  <li>• ইনপুট এবং আউটপুট</li>
                  <li>• কমেন্ট এবং ডকুমেন্টেশন</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/programming/python-basics">
                  শুরু করুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-600">কন্ট্রোল স্ট্রাকচার</CardTitle>
              </div>
              <CardDescription>শর্ত, লুপ এবং ডিসিশন মেকিং</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• if, elif, else স্টেটমেন্ট</li>
                  <li>• for এবং while লুপ</li>
                  <li>• break, continue, pass</li>
                  <li>• নেস্টেড কন্ট্রোল স্ট্রাকচার</li>
                  <li>• লজিক্যাল অপারেটর</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/programming/control-structures">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Database className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-600">ডেটা স্ট্রাকচার</CardTitle>
              </div>
              <CardDescription>লিস্ট, টিউপল, ডিকশনারি, সেট</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• লিস্ট এবং লিস্ট মেথড</li>
                  <li>• টিউপল এবং তার ব্যবহার</li>
                  <li>• ডিকশনারি এবং কী-ভ্যালু পেয়ার</li>
                  <li>• সেট এবং সেট অপারেশন</li>
                  <li>• লিস্ট কম্প্রিহেনশন</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/programming/data-structures">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Settings className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-orange-600">ফাংশন এবং মডিউল</CardTitle>
              </div>
              <CardDescription>কোড রিইউজেবিলিটি এবং অর্গানাইজেশন</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ফাংশন ডিফিনিশন এবং কল</li>
                  <li>• প্যারামিটার এবং আর্গুমেন্ট</li>
                  <li>• রিটার্ন ভ্যালু</li>
                  <li>• মডিউল এবং প্যাকেজ</li>
                  <li>• import স্টেটমেন্ট</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/programming/functions-modules">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-red-600" />
                <CardTitle className="text-red-600">অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং</CardTitle>
              </div>
              <CardDescription>ক্লাস, অবজেক্ট এবং ইনহেরিটেন্স</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ক্লাস এবং অবজেক্ট</li>
                  <li>• কনস্ট্রাক্টর এবং ডেস্ট্রাক্টর</li>
                  <li>• ইনহেরিটেন্স এবং পলিমরফিজম</li>
                  <li>• এনক্যাপসুলেশন</li>
                  <li>• ম্যাজিক মেথড</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/programming/oop">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-teal-600" />
                <CardTitle className="text-teal-600">ফাইল হ্যান্ডলিং এবং এরর</CardTitle>
              </div>
              <CardDescription>ফাইল অপারেশন এবং এক্সেপশন হ্যান্ডলিং</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">যা শিখবেন:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ফাইল রিড এবং রাইট</li>
                  <li>• CSV এবং JSON হ্যান্ডলিং</li>
                  <li>• try, except, finally</li>
                  <li>• কাস্টম এক্সেপশন</li>
                  <li>• ডিবাগিং টেকনিক</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link href="/docs/programming/file-handling">
                  বিস্তারিত পড়ুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Data Science Libraries */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">ডেটা সায়েন্স লাইব্রেরি</CardTitle>
          </CardHeader>
          <CardContent className="text-green-700 space-y-4">
            <p>মেশিন লার্নিংয়ের জন্য প্রয়োজনীয় Python লাইব্রেরিসমূহ:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Card className="bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-600">NumPy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• নিউমেরিক্যাল কম্পিউটিং</li>
                      <li>• অ্যারে অপারেশন</li>
                      <li>• ম্যাথমেটিক্যাল ফাংশন</li>
                      <li>• লিনিয়ার অ্যালজেব্রা</li>
                    </ul>
                    <Button asChild className="w-full mt-3" size="sm">
                      <Link href="/docs/programming/numpy">শিখুন</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-600">Pandas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• ডেটা ম্যানিপুলেশন</li>
                      <li>• DataFrame এবং Series</li>
                      <li>• ডেটা ক্লিনিং</li>
                      <li>• CSV, Excel হ্যান্ডলিং</li>
                    </ul>
                    <Button asChild className="w-full mt-3" size="sm">
                      <Link href="/docs/programming/pandas">শিখুন</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card className="bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-orange-600">Matplotlib</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• ডেটা ভিজুয়ালাইজেশন</li>
                      <li>• চার্ট এবং গ্রাফ</li>
                      <li>• প্লট কাস্টমাইজেশন</li>
                      <li>• সাবপ্লট এবং ফিগার</li>
                    </ul>
                    <Button asChild className="w-full mt-3" size="sm">
                      <Link href="/docs/programming/matplotlib">শিখুন</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-red-600">Scikit-learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• মেশিন লার্নিং অ্যালগরিদম</li>
                      <li>• মডেল ট্রেনিং এবং টেস্টিং</li>
                      <li>• ডেটা প্রিপ্রসেসিং</li>
                      <li>• মডেল ইভ্যালুয়েশন</li>
                    </ul>
                    <Button asChild className="w-full mt-3" size="sm">
                      <Link href="/docs/programming/scikit-learn">শিখুন</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Topics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">অ্যাডভান্সড টপিক</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold">প্রোগ্রামিং কনসেপ্ট:</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    •{" "}
                    <Link href="/docs/programming/decorators" className="text-blue-600 hover:underline">
                      ডেকোরেটর
                    </Link>
                  </li>
                  <li>
                    •{" "}
                    <Link href="/docs/programming/generators" className="text-blue-600 hover:underline">
                      জেনারেটর এবং ইটারেটর
                    </Link>
                  </li>
                  <li>
                    •{" "}
                    <Link href="/docs/programming/lambda" className="text-blue-600 hover:underline">
                      ল্যাম্বডা ফাংশন
                    </Link>
                  </li>
                  <li>
                    •{" "}
                    <Link href="/docs/programming/context-managers" className="text-blue-600 hover:underline">
                      কনটেক্সট ম্যানেজার
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">প্র্যাকটিক্যাল স্কিল:</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    •{" "}
                    <Link href="/docs/programming/web-scraping" className="text-blue-600 hover:underline">
                      ওয়েব স্ক্র্যাপিং
                    </Link>
                  </li>
                  <li>
                    •{" "}
                    <Link href="/docs/programming/apis" className="text-blue-600 hover:underline">
                      API ইন্টিগ্রেশন
                    </Link>
                  </li>
                  <li>
                    •{" "}
                    <Link href="/docs/programming/testing" className="text-blue-600 hover:underline">
                      ইউনিট টেস্টিং
                    </Link>
                  </li>
                  <li>
                    •{" "}
                    <Link href="/docs/programming/virtual-env" className="text-blue-600 hover:underline">
                      ভার্চুয়াল এনভায়রনমেন্ট
                    </Link>
                  </li>
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
              <p className="font-semibold">সুপারিশকৃত ক্রম (৪-৬ সপ্তাহ):</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ১
                  </div>
                  <span>Python বেসিক (১ সপ্তাহ)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ২
                  </div>
                  <span>কন্ট্রোল স্ট্রাকচার এবং ডেটা স্ট্রাকচার (১ সপ্তাহ)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৩
                  </div>
                  <span>ফাংশন এবং মডিউল (১ সপ্তাহ)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৪
                  </div>
                  <span>NumPy এবং Pandas (১ সপ্তাহ)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৫
                  </div>
                  <span>Matplotlib এবং ডেটা ভিজুয়ালাইজেশন (১ সপ্তাহ)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৬
                  </div>
                  <span>OOP এবং অ্যাডভান্সড টপিক (১ সপ্তাহ)</span>
                </div>
              </div>
            </div>
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
                  <li>• কম্পিউটারের মৌলিক জ্ঞান</li>
                  <li>• ইংরেজি পড়ার ক্ষমতা</li>
                  <li>• লজিক্যাল থিংকিং</li>
                  <li>• ধৈর্য এবং অনুশীলনের মানসিকতা</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">সহায়ক</h4>
                <ul className="space-y-1 text-sm">
                  <li>• গণিতের মৌলিক জ্ঞান</li>
                  <li>• অন্য কোন প্রোগ্রামিং ভাষার অভিজ্ঞতা</li>
                  <li>• কমান্ড লাইনের পরিচিতি</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/programming/python-basics">
              Python বেসিক দিয়ে শুরু করুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/mathematics">গণিত ভিত্তি শিখুন</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
