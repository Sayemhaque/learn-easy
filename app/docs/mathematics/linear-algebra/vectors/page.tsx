import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function VectorsPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            লিনিয়ার অ্যালজেব্রা
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">ভেক্টর এবং ভেক্টর অপারেশন</h1>
          <p className="text-xl text-muted-foreground">
            ভেক্টর হলো লিনিয়ার অ্যালজেব্রার মূল ভিত্তি। এটি দিক এবং মাত্রা উভয়ই প্রকাশ করে।
          </p>
        </div>

        {/* What is a Vector */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">ভেক্টর কী?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              ভেক্টর হলো একটি গাণিতিক বস্তু যার <strong>মাত্রা (magnitude)</strong> এবং <strong>দিক (direction)</strong> উভয়ই
              আছে।
            </p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">উদাহরণ:</h4>
              <div className="space-y-2 text-blue-700">
                <p>
                  • <strong>বেগ:</strong> ৫০ কিমি/ঘন্টা উত্তর দিকে
                </p>
                <p>
                  • <strong>বল:</strong> ১০ নিউটন পূর্ব দিকে
                </p>
                <p>
                  • <strong>স্থানচ্যুতি:</strong> ৩ মিটার উপরের দিকে
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">২D ভেক্টর:</h4>
                <p className="text-sm text-gray-600 mb-2">v = [3, 4]</p>
                <p className="text-sm">x-অক্ষে ৩ একক, y-অক্ষে ৪ একক</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">৩D ভেক্টর:</h4>
                <p className="text-sm text-gray-600 mb-2">v = [2, -1, 5]</p>
                <p className="text-sm">x=২, y=-১, z=৫</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vector Operations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">ভেক্টর অপারেশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Vector Addition */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. ভেক্টর যোগ</h4>
              <p>দুটি ভেক্টর যোগ করতে তাদের সংশ্লিষ্ট উপাদানগুলো যোগ করি।</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">উদাহরণ:</h5>
                <div className="space-y-2 text-green-700 font-mono">
                  <p>a = [2, 3]</p>
                  <p>b = [1, 4]</p>
                  <p>a + b = [2+1, 3+4] = [3, 7]</p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python কোড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import numpy as np

a = np.array([2, 3])
b = np.array([1, 4])
result = a + b
print(result)  # [3 7]`}
                </pre>
              </div>
            </div>

            {/* Vector Subtraction */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. ভেক্টর বিয়োগ</h4>
              <p>ভেক্টর বিয়োগও একইভাবে উপাদান অনুযায়ী করা হয়।</p>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">উদাহরণ:</h5>
                <div className="space-y-2 text-red-700 font-mono">
                  <p>a = [5, 8]</p>
                  <p>b = [2, 3]</p>
                  <p>a - b = [5-2, 8-3] = [3, 5]</p>
                </div>
              </div>
            </div>

            {/* Scalar Multiplication */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. স্কেলার গুণ</h4>
              <p>একটি সংখ্যা (স্কেলার) দিয়ে ভেক্টর গুণ করলে ভেক্টরের প্রতিটি উপাদান সেই সংখ্যা দিয়ে গুণ হয়।</p>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">উদাহরণ:</h5>
                <div className="space-y-2 text-purple-700 font-mono">
                  <p>v = [3, 4]</p>
                  <p>k = 2</p>
                  <p>k × v = 2 × [3, 4] = [6, 8]</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dot Product */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">ডট প্রোডাক্ট (Dot Product)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ডট প্রোডাক্ট দুটি ভেক্টরের মধ্যে একটি স্কেলার মান তৈরি করে। এটি ML এ খুবই গুরুত্বপূর্ণ।</p>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">সূত্র:</h4>
              <p className="font-mono text-purple-700">a · b = a₁×b₁ + a₂×b₂ + ... + aₙ×bₙ</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">উদাহরণ:</h5>
                <div className="space-y-1 font-mono text-sm">
                  <p>a = [2, 3, 1]</p>
                  <p>b = [1, 4, 2]</p>
                  <p>a · b = 2×1 + 3×4 + 1×2</p>
                  <p> = 2 + 12 + 2 = 16</p>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-2 rounded">
                  {`a = np.array([2, 3, 1])
b = np.array([1, 4, 2])
dot_product = np.dot(a, b)
print(dot_product)  # 16`}
                </pre>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">ML এ ব্যবহার:</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• নিউরাল নেটওয়ার্কে ওয়েট এবং ইনপুটের গুণ</li>
                <li>• কসাইন সিমিলারিটি হিসাব</li>
                <li>• লিনিয়ার রিগ্রেশনে প্রেডিকশন</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Vector Norm */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">ভেক্টর নর্ম (Vector Norm)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ভেক্টর নর্ম হলো ভেক্টরের দৈর্ঘ্য বা মাত্রা। এটি সবসময় একটি ধনাত্মক সংখ্যা।</p>

            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">L2 নর্ম (Euclidean Norm):</h4>
                <p className="font-mono text-orange-700 mb-2">||v|| = √(v₁² + v₂² + ... + vₙ²)</p>
                <div className="text-orange-700">
                  <p>
                    <strong>উদাহরণ:</strong> v = [3, 4]
                  </p>
                  <p>||v|| = √(3² + 4²) = √(9 + 16) = √25 = 5</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">L1 নর্ম (Manhattan Norm):</h4>
                <p className="font-mono text-blue-700 mb-2">||v||₁ = |v₁| + |v₂| + ... + |vₙ|</p>
                <div className="text-blue-700">
                  <p>
                    <strong>উদাহরণ:</strong> v = [3, -4]
                  </p>
                  <p>||v||₁ = |3| + |-4| = 3 + 4 = 7</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Python কোড:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`import numpy as np

v = np.array([3, 4])

# L2 norm
l2_norm = np.linalg.norm(v)
print(f"L2 norm: {l2_norm}")  # 5.0

# L1 norm
l1_norm = np.linalg.norm(v, ord=1)
print(f"L1 norm: {l1_norm}")  # 7.0`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Unit Vector */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">ইউনিট ভেক্টর (Unit Vector)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ইউনিট ভেক্টর হলো এমন ভেক্টর যার দৈর্ঘ্য ১। যেকোনো ভেক্টরকে তার নর্ম দিয়ে ভাগ করলে ইউনিট ভেক্টর পাওয়া যায়।</p>

            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">সূত্র:</h4>
              <p className="font-mono text-teal-700">û = v / ||v||</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">উদাহরণ:</h5>
                <div className="space-y-1 font-mono text-sm">
                  <p>v = [6, 8]</p>
                  <p>||v|| = √(6² + 8²) = 10</p>
                  <p>û = [6/10, 8/10] = [0.6, 0.8]</p>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-2 rounded">
                  {`v = np.array([6, 8])
unit_v = v / np.linalg.norm(v)
print(unit_v)  # [0.6 0.8]`}
                </pre>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">কেন গুরুত্বপূর্ণ?</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• নরমালাইজেশনে ব্যবহার</li>
                <li>• দিক নির্দেশনায় সহায়ক</li>
                <li>• কসাইন সিমিলারিটি হিসাবে</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Vector Projection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-indigo-600">ভেক্টর প্রজেকশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ভেক্টর প্রজেকশন হলো একটি ভেক্টরের অন্য একটি ভেক্টরের উপর ছায়া।</p>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">সূত্র:</h4>
              <p className="font-mono text-indigo-700">proj_b(a) = ((a · b) / (b · b)) × b</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">উদাহরণ:</h4>
              <div className="space-y-2 font-mono text-sm">
                <p>a = [3, 4], b = [1, 0]</p>
                <p>a · b = 3×1 + 4×0 = 3</p>
                <p>b · b = 1×1 + 0×0 = 1</p>
                <p>proj_b(a) = (3/1) × [1, 0] = [3, 0]</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">ML এ ব্যবহার:</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• PCA তে ডেটা প্রজেকশন</li>
                <li>• ফিচার এক্সট্র্যাকশন</li>
                <li>• ডাইমেনশনালিটি রিডাকশন</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/mathematics/linear-algebra">
              <ArrowLeft className="mr-2 h-4 w-4" />
              লিনিয়ার অ্যালজেব্রা মূল পাতা
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/mathematics/linear-algebra/matrices">
              ম্যাট্রিক্স শিখুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
