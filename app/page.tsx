import { BookOpen, Brain, Code, Zap, Users, Award, ArrowRight, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">শিখন</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">
              কোর্স
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              আমাদের সম্পর্কে
            </Link>
            <Button asChild>
              <Link href="/courses">শুরু করুন</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            ১০০% বিনামূল্যে • বাংলায় • সহজ ভাষায়
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              প্রোগ্রামিং শিখুন
            </span>
            <br />
            <span className="text-gray-700">সহজ বাংলায়</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            মেশিন লার্নিং এবং জাভাস্ক্রিপ্ট শিখুন একদম শূন্য থেকে। 
            <br className="hidden md:block" />
            সহজ ভাষায়, বাস্তব উদাহরণ দিয়ে, ধাপে ধাপে।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              <Link href="/courses">
                <Play className="w-5 h-5 mr-2" />
                এখনই শুরু করুন
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/courses">
                কোর্স দেখুন
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">২০+</div>
              <div className="text-gray-600">অধ্যায়</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">১০০+</div>
              <div className="text-gray-600">উদাহরণ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">৫০+</div>
              <div className="text-gray-600">কুইজ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">বিনামূল্যে</div>
              <div className="text-gray-600">সম্পূর্ণ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Courses */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">আমাদের কোর্স</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              প্রতিটি কোর্স তৈরি করা হয়েছে সহজ ভাষায়, যাতে যে কেউ বুঝতে পারে
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Machine Learning Course */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-600 rounded-xl">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                    জনপ্রিয়
                  </span>
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  মেশিন লার্নিং
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  কৃত্রিম বুদ্ধিমত্তা শিখুন একদম শূন্য থেকে
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">যা শিখবেন:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      গণিতের ভিত্তি (সহজ করে)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Python প্রোগ্রামিং
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      ডেটা সায়েন্স
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      AI মডেল তৈরি
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-gray-500">
                    ১৫টি অধ্যায় • ৩-৪ মাস
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/courses/machine-learning">
                      শুরু করুন
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JavaScript Course */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-orange-100">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-yellow-600 rounded-xl">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">
                    নতুন
                  </span>
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-yellow-600 transition-colors">
                  জাভাস্ক্রিপ্ট
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  ওয়েব ডেভেলপমেন্টের জন্য সবচেয়ে জরুরি ভাষা
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">যা শিখবেন:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                      JS এর মূল বিষয়
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                      DOM ম্যানিপুলেশন
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                      Async Programming
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                      Modern JS (ES6+)
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-gray-500">
                    ১২টি অধ্যায় • ২-৩ মাস
                  </div>
                  <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                    <Link href="/courses/javascript">
                      শুরু করুন
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">কেন আমাদের প্ল্যাটফর্ম?</h2>
            <p className="text-xl text-gray-600">আমরা বিশ্বাস করি শেখা হওয়া উচিত সহজ এবং মজার</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">সহজ বাংলায়</h3>
              <p className="text-gray-600">
                জটিল বিষয়গুলো সহজ ভাষায় ব্যাখ্যা করা হয়েছে, যাতে সবাই বুঝতে পারে
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ইন্টারঅ্যাক্টিভ</h3>
              <p className="text-gray-600">
                কুইজ, চ্যালেঞ্জ এবং বাস্তব উদাহরণ দিয়ে শেখা আরও মজার
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 group-hover:bg-purple-200 transition-colors">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">সবার জন্য</h3>
              <p className="text-gray-600">
                একদম শুরু থেকে অ্যাডভান্স লেভেল পর্যন্ত - সবার জন্য কিছু না কিছু আছে
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">আজই শুরু করুন আপনার শেখার যাত্রা</h2>
          <p className="text-xl mb-8 opacity-90">
            হাজারো মানুষ ইতিমধ্যে শিখছে। আপনিও যোগ দিন আমাদের সাথে।
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="/courses">
              <Play className="w-5 h-5 mr-2" />
              বিনামূল্যে শুরু করুন
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">শিখন</span>
              </div>
              <p className="text-gray-400">
                বাংলায় প্রোগ্রামিং শেখার সবচেয়ে সহজ প্ল্যাটফর্ম
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">কোর্স</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/courses/machine-learning" className="hover:text-white transition-colors">মেশিন লার্নিং</Link></li>
                <li><Link href="/courses/javascript" className="hover:text-white transition-colors">জাভাস্ক্রিপ্ট</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">সাহায্য</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">যোগাযোগ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">আমাদের মিশন</h4>
              <p className="text-gray-400 text-sm">
                প্রযুক্তি শিক্ষাকে সবার কাছে পৌঁছে দেওয়া, সহজ বাংলায়
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; ২০২৪ শিখন। সকল অধিকার সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  )
}