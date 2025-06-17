import { BookOpen, Users, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            মেশিন লার্নিং ইঞ্জিনিয়ার
            <span className="block text-blue-600">বাংলা ডকুমেন্টেশন</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            মেশিন লার্নিং এবং ডিপ লার্নিং শেখার জন্য সম্পূর্ণ বাংলা গাইড। গণিত থেকে শুরু করে অ্যাডভান্সড এআই টেকনিক পর্যন্ত সবকিছু।
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/docs/introduction">শুরু করুন</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/roadmap">রোডম্যাপ দেখুন</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">৫০+</h3>
              <p className="text-gray-600">বিষয়</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">১০০০+</h3>
              <p className="text-gray-600">শিক্ষার্থী</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">৯৫%</h3>
              <p className="text-gray-600">সফলতার হার</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">বিনামূল্যে</h3>
              <p className="text-gray-600">সম্পূর্ণ কোর্স</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">মূল বিষয়সমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">গণিত ভিত্তি</CardTitle>
                <CardDescription>মেশিন লার্নিংয়ের জন্য প্রয়োজনীয় গণিত</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• লিনিয়ার অ্যালজেব্রা</li>
                  <li>• ক্যালকুলাস</li>
                  <li>• সম্ভাব্যতা ও পরিসংখ্যান</li>
                  <li>• ডিসক্রিট ম্যাথমেটিক্স</li>
                </ul>
                <Button asChild className="w-full mt-4" variant="outline">
                  <Link href="/docs/mathematics">বিস্তারিত দেখুন</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-600">মেশিন লার্নিং</CardTitle>
                <CardDescription>মূল ML অ্যালগরিদম এবং টেকনিক</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• সুপারভাইজড লার্নিং</li>
                  <li>• আনসুপারভাইজড লার্নিং</li>
                  <li>• রিইনফোর্সমেন্ট লার্নিং</li>
                  <li>• মডেল ইভ্যালুয়েশন</li>
                </ul>
                <Button asChild className="w-full mt-4" variant="outline">
                  <Link href="/docs/machine-learning">বিস্তারিত দেখুন</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-600">ডিপ লার্নিং</CardTitle>
                <CardDescription>নিউরাল নেটওয়ার্ক এবং অ্যাডভান্সড AI</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• নিউরাল নেটওয়ার্ক</li>
                  <li>• CNN এবং RNN</li>
                  <li>• ট্রান্সফরমার</li>
                  <li>• জেনারেটিভ AI</li>
                </ul>
                <Button asChild className="w-full mt-4" variant="outline">
                  <Link href="/docs/deep-learning">বিস্তারিত দেখুন</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-600">ডেটা সায়েন্স</CardTitle>
                <CardDescription>ডেটা প্রসেসিং এবং অ্যানালাইসিস</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ডেটা ক্লিনিং</li>
                  <li>• ফিচার ইঞ্জিনিয়ারিং</li>
                  <li>• ডেটা ভিজুয়ালাইজেশন</li>
                  <li>• EDA</li>
                </ul>
                <Button asChild className="w-full mt-4" variant="outline">
                  <Link href="/docs/data-science">বিস্তারিত দেখুন</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-600">প্রোগ্রামিং</CardTitle>
                <CardDescription>ML এর জন্য প্রয়োজনীয় প্রোগ্রামিং</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Python</li>
                  <li>• NumPy, Pandas</li>
                  <li>• Scikit-learn</li>
                  <li>• TensorFlow, PyTorch</li>
                </ul>
                <Button asChild className="w-full mt-4" variant="outline">
                  <Link href="/docs/programming">বিস্তারিত দেখুন</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-teal-600">MLOps</CardTitle>
                <CardDescription>প্রোডাকশন ML সিস্টেম</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• মডেল ডিপ্লয়মেন্ট</li>
                  <li>• মনিটরিং</li>
                  <li>• CI/CD</li>
                  <li>• স্কেলিং</li>
                </ul>
                <Button asChild className="w-full mt-4" variant="outline">
                  <Link href="/docs/mlops">বিস্তারিত দেখুন</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">আজই শুরু করুন আপনার ML জার্নি</h2>
          <p className="text-xl mb-8 opacity-90">বিনামূল্যে সম্পূর্ণ কোর্স এবং হ্যান্ডস-অন প্রজেক্ট</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/docs/introduction">এখনই শুরু করুন</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
