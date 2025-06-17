import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function MatricesPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            লিনিয়ার অ্যালজেব্রা
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">ম্যাট্রিক্স এবং ম্যাট্রিক্স অপারেশন</h1>
          <p className="text-xl text-muted-foreground">
            ম্যাট্রিক্স হলো সংখ্যার একটি আয়তাকার বিন্যাস। ML এ ডেটা এবং ট্রান্সফরমেশন উভয়ই ম্যাট্রিক্স দিয়ে প্রকাশ করা হয়।
          </p>
        </div>

        {/* What is a Matrix */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">ম্যাট্রিক্স কী?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ম্যাট্রিক্স হলো সংখ্যার একটি আয়তাকার সারণি যা সারি (row) এবং কলাম (column) এ সাজানো থাকে।</p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">উদাহরণ - ২×৩ ম্যাট্রিক্স:</h4>
              <div className="font-mono text-blue-700 text-center">
                <p>A = [1 2 3]</p>
                <p> [4 5 6]</p>
              </div>
              <p className="text-blue-700 mt-2">২ টি সারি, ৩ টি কলাম</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">ML এ ব্যবহার:</h4>
                <ul className="text-sm space-y-1">
                  <li>• ডেটাসেট (প্রতি সারি = একটি নমুনা)</li>
                  <li>• ইমেজ (পিক্সেল ভ্যালু)</li>
                  <li>• নিউরাল নেটওয়ার্কের ওয়েট</li>
                  <li>• ট্রান্সফরমেশন</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">ম্যাট্রিক্সের প্রকার:</h4>
                <ul className="text-sm space-y-1">
                  <li>• স্কয়ার ম্যাট্রিক্স (n×n)</li>
                  <li>• আইডেন্টিটি ম্যাট্রিক্স</li>
                  <li>• জিরো ম্যাট্রিক্স</li>
                  <li>• ডায়াগোনাল ম্যাট্রিক্স</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Matrix Operations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">ম্যাট্রিক্স অপারেশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Matrix Addition */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. ম্যাট্রিক্স যোগ</h4>
              <p>একই আকারের দুটি ম্যাট্রিক্সের সংশ্লিষ্ট উপাদানগুলো যোগ করা হয়।</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">উদাহরণ:</h5>
                <div className="font-mono text-green-700">
                  <p>A = [1 2] B = [5 6]</p>
                  <p> [3 4] [7 8]</p>
                  <p></p>
                  <p>A + B = [1+5 2+6] = [6 8]</p>
                  <p> [3+7 4+8] [10 12]</p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python কোড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
result = A + B
print(result)
# [[ 6  8]
#  [10 12]]`}
                </pre>
              </div>
            </div>

            {/* Matrix Multiplication */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. ম্যাট্রিক্স গুণ</h4>
              <p>ম্যাট্রিক্স গুণ একটু জটিল। A এর কলাম সংখ্যা = B এর সারি সংখ্যা হতে হবে।</p>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">নিয়ম:</h5>
                <p className="text-purple-700 mb-2">C[i,j] = A এর i-তম সারি এবং B এর j-তম কলামের ডট প্রোডাক্ট</p>
                <div className="font-mono text-purple-700">
                  <p>A(2×3) × B(3×2) = C(2×2)</p>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">উদাহরণ:</h5>
                <div className="font-mono text-red-700 text-sm">
                  <p>A = [1 2 3] B = [7 8]</p>
                  <p> [4 5 6] [9 10]</p>
                  <p> [11 12]</p>
                  <p></p>
                  <p>C[0,0] = 1×7 + 2×9 + 3×11 = 7 + 18 + 33 = 58</p>
                  <p>C[0,1] = 1×8 + 2×10 + 3×12 = 8 + 20 + 36 = 64</p>
                  <p></p>
                  <p>C = [58 64]</p>
                  <p> [139 154]</p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python কোড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`A = np.array([[1, 2, 3], [4, 5, 6]])
B = np.array([[7, 8], [9, 10], [11, 12]])

# Matrix multiplication
C = np.dot(A, B)
# অথবা
C = A @ B

print(C)
# [[ 58  64]
#  [139 154]]`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transpose */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">ট্রান্সপোজ (Transpose)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ম্যাট্রিক্সের ট্রান্সপোজ মানে সারি এবং কলাম অদলবদল করা। A^T দিয়ে প্রকাশ করা হয়।</p>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">উদাহরণ:</h4>
              <div className="font-mono text-purple-700">
                <p>A = [1 2 3]</p>
                <p> [4 5 6]</p>
                <p></p>
                <p>A^T = [1 4]</p>
                <p> [2 5]</p>
                <p> [3 6]</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-2 rounded">
                  {`A = np.array([[1, 2, 3], 
              [4, 5, 6]])
A_T = A.T
print(A_T)`}
                </pre>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">ব্যবহার:</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• লিনিয়ার রিগ্রেশনে</li>
                  <li>• কোভেরিয়েন্স ম্যাট্রিক্স</li>
                  <li>• সিমেট্রিক ম্যাট্রিক্স তৈরি</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Matrix Inverse */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">ম্যাট্রিক্স ইনভার্স</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ম্যাট্রিক্স ইনভার্স হলো এমন একটি ম্যাট্রিক্স যা মূল ম্যাট্রিক্সের সাথে গুণ করলে আইডেন্টিটি ম্যাট্রিক্স পাওয়া যায়।</p>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">শর্ত:</h4>
              <ul className="text-orange-700 space-y-1">
                <li>• ম্যাট্রিক্স অবশ্যই স্কয়ার হতে হবে</li>
                <li>• ডিটারমিন্যান্ট শূন্য হতে পারবে না</li>
                <li>• A × A⁻¹ = I (আইডেন্টিটি ম্যাট্রিক্স)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">২×২ ম্যাট্রিক্সের ইনভার্স:</h4>
              <div className="font-mono text-sm">
                <p>A = [a b]</p>
                <p> [c d]</p>
                <p></p>
                <p>A⁻¹ = (1/det(A)) × [ d -b]</p>
                <p> [-c a]</p>
                <p></p>
                <p>যেখানে det(A) = ad - bc</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">উদাহরণ:</h5>
                <div className="font-mono text-blue-700 text-sm">
                  <p>A = [2 1]</p>
                  <p> [1 1]</p>
                  <p></p>
                  <p>det(A) = 2×1 - 1×1 = 1</p>
                  <p></p>
                  <p>A⁻¹ = [1 -1]</p>
                  <p> [-1 2]</p>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-2 rounded">
                  {`A = np.array([[2, 1], 
              [1, 1]])
A_inv = np.linalg.inv(A)
print(A_inv)

# যাচাই
I = A @ A_inv
print(I)  # Identity matrix`}
                </pre>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">ML এ ব্যবহার:</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• লিনিয়ার রিগ্রেশনের সমাধান</li>
                <li>• সিস্টেম অফ ইকুয়েশন সমাধান</li>
                <li>• কোভেরিয়েন্স ম্যাট্রিক্স ইনভার্স</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Determinant */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">ডিটারমিন্যান্ট</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ডিটারমিন্যান্ট একটি স্কেলার মান যা ম্যাট্রিক্সের কিছু গুরুত্বপূর্ণ বৈশিষ্ট্য প্রকাশ করে।</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-2">২×২ ম্যাট্রিক্স:</h4>
                <div className="font-mono text-teal-700">
                  <p>A = [a b]</p>
                  <p> [c d]</p>
                  <p></p>
                  <p>det(A) = ad - bc</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">৩×৩ ম্যাট্রিক্স:</h4>
                <div className="font-mono text-blue-700 text-sm">
                  <p>কোফ্যাক্টর এক্সপানশন</p>
                  <p>ব্যবহার করতে হয়</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Python কোড:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`A = np.array([[2, 1], 
              [1, 1]])

det_A = np.linalg.det(A)
print(f"Determinant: {det_A}")  # 1.0

# ৩×৩ ম্যাট্রিক্স
B = np.array([[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]])
det_B = np.linalg.det(B)
print(f"Determinant: {det_B}")  # 0.0 (singular)`}
              </pre>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">গুরুত্ব:</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• det = 0 মানে ম্যাট্রিক্স সিঙ্গুলার (ইনভার্স নেই)</li>
                <li>• det {">"} 0 মানে ওরিয়েন্টেশন সংরক্ষিত</li>
                <li>• {"|det|"} = ভলিউম স্কেলিং ফ্যাক্টর</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Rank and Null Space */}
        <Card>
          <CardHeader>
            <CardTitle className="text-indigo-600">র‍্যাঙ্ক এবং নাল স্পেস</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">র‍্যাঙ্ক (Rank):</h4>
                <ul className="text-indigo-700 space-y-1 text-sm">
                  <li>• লিনিয়ারলি ইন্ডিপেন্ডেন্ট সারি/কলামের সংখ্যা</li>
                  <li>• ম্যাট্রিক্সের "কার্যকর" ডাইমেনশন</li>
                  <li>• ফুল র‍্যাঙ্ক = ইনভার্টিবল</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">নাল স্পেস:</h4>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Ax = 0 এর সমাধান</li>
                  <li>• ম্যাট্রিক্স যে ভেক্টরগুলোকে শূন্যে পাঠায়</li>
                  <li>• ডাইমেনশনালিটি রিডাকশনে গুরুত্বপূর্ণ</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Python কোড:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`A = np.array([[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]])

# Rank calculation
rank = np.linalg.matrix_rank(A)
print(f"Rank: {rank}")  # 2

# SVD for null space
U, s, Vt = np.linalg.svd(A)
null_space = Vt[rank:, :].T
print("Null space:")
print(null_space)`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/mathematics/linear-algebra/vectors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ভেক্টর অপারেশন
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/mathematics/linear-algebra/eigenvalues">
              আইগেনভ্যালু শিখুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
