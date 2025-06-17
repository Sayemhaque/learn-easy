import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function PythonBasicsPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            Python প্রোগ্রামিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Python বেসিক</h1>
          <p className="text-xl text-muted-foreground">
            Python প্রোগ্রামিংয়ের মূল ভিত্তি - ভেরিয়েবল, ডেটা টাইপ, অপারেটর এবং বেসিক সিনট্যাক্স।
          </p>
        </div>

        {/* Python Installation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Python ইনস্টলেশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Python শুরু করার আগে আপনার কম্পিউটারে Python ইনস্টল করতে হবে।</p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">ইনস্টলেশন ধাপ:</h4>
              <ol className="text-sm text-blue-700 space-y-1">
                <li>
                  1.{" "}
                  <a href="https://python.org" className="underline">
                    python.org
                  </a>{" "}
                  থেকে Python ডাউনলোড করুন
                </li>
                <li>2. আপনার অপারেটিং সিস্টেম অনুযায়ী ভার্সন বেছে নিন</li>
                <li>3. ইনস্টলার রান করুন এবং "Add Python to PATH" চেক করুন</li>
                <li>
                  4. কমান্ড প্রম্পটে <code className="bg-gray-200 px-1 rounded">python --version</code> টাইপ করে যাচাই করুন
                </li>
              </ol>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">প্রথম Python প্রোগ্রাম:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`# hello.py
print("হ্যালো, পৃথিবী!")
print("আমার প্রথম Python প্রোগ্রাম")

# আউটপুট:
# হ্যালো, পৃথিবী!
# আমার প্রথম Python প্রোগ্রাম`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Variables */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">ভেরিয়েবল (Variables)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ভেরিয়েবল হলো ডেটা স্টোর করার জন্য কন্টেইনার। Python এ ভেরিয়েবল ডিক্লেয়ার করা খুবই সহজ।</p>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">ভেরিয়েবলের নিয়ম:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• অক্ষর, সংখ্যা এবং আন্ডারস্কোর (_) ব্যবহার করা যায়</li>
                <li>• সংখ্যা দিয়ে শুরু করা যায় না</li>
                <li>• Case-sensitive (name এবং Name ভিন্ন)</li>
                <li>• Python keywords ব্যবহার করা যায় না</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">উদাহরণ:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`# ভেরিয়েবল তৈরি করা
name = "রহিম"
age = 25
height = 5.8
is_student = True

# ভেরিয়েবল প্রিন্ট করা
print("নাম:", name)
print("বয়স:", age)
print("উচ্চতা:", height)
print("ছাত্র কিনা:", is_student)

# একসাথে একাধিক ভেরিয়েবল
x, y, z = 10, 20, 30
print(x, y, z)  # 10 20 30`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Data Types */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">ডেটা টাইপ (Data Types)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Python এ বিভিন্ন ধরনের ডেটা টাইপ রয়েছে। Python অটোমেটিক্যালি ডেটা টাইপ নির্ধারণ করে।</p>

            {/* Numeric Types */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. নিউমেরিক টাইপ</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">int (পূর্ণ সংখ্যা)</h5>
                  <pre className="text-sm bg-gray-800 text-green-400 p-2 rounded">
                    {`age = 25
count = -10
big_number = 1000000`}
                  </pre>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">float (দশমিক)</h5>
                  <pre className="text-sm bg-gray-800 text-green-400 p-2 rounded">
                    {`price = 99.99
temperature = -5.5
pi = 3.14159`}
                  </pre>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">complex (জটিল)</h5>
                  <pre className="text-sm bg-gray-800 text-green-400 p-2 rounded">
                    {`z1 = 3 + 4j
z2 = complex(2, 5)
print(z1.real)  # 3.0`}
                  </pre>
                </div>
              </div>
            </div>

            {/* String Type */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. স্ট্রিং (String)</h4>
              <p>টেক্সট ডেটা স্টোর করার জন্য ব্যবহার হয়।</p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">স্ট্রিং তৈরি করা:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# বিভিন্ন উপায়ে স্ট্রিং তৈরি
name = "আহমেদ"
message = 'হ্যালো ওয়ার্ল্ড'
long_text = """এটি একটি
বহু লাইনের
টেক্সট"""

# স্ট্রিং কনক্যাটেনেশন
first_name = "মোহাম্মদ"
last_name = "রহিম"
full_name = first_name + " " + last_name
print(full_name)  # মোহাম্মদ রহিম

# f-string (ফরম্যাটেড স্ট্রিং)
age = 30
message = f"আমার বয়স {age} বছর"
print(message)  # আমার বয়স 30 বছর`}
                </pre>
              </div>
            </div>

            {/* Boolean Type */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. বুলিয়ান (Boolean)</h4>
              <p>True বা False মান স্টোর করে।</p>

              <div className="bg-red-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# বুলিয়ান ভ্যালু
is_active = True
is_completed = False

# তুলনার ফলাফল
x = 10
y = 20
result = x > y  # False
print(result)

# বুলিয়ান অপারেশন
print(True and False)  # False
print(True or False)   # True
print(not True)        # False`}
                </pre>
              </div>
            </div>

            {/* Type Checking */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">ডেটা টাইপ চেক করা:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`# type() ফাংশন ব্যবহার করে
name = "রহিম"
age = 25
height = 5.8

print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(height))  # <class 'float'>

# isinstance() ফাংশন
print(isinstance(age, int))     # True
print(isinstance(name, str))    # True
print(isinstance(height, int))  # False`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Operators */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">অপারেটর (Operators)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>অপারেটর ব্যবহার করে ভেরিয়েবল এবং ভ্যালুর উপর বিভিন্ন অপারেশন করা যায়।</p>

            {/* Arithmetic Operators */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. গাণিতিক অপারেটর</h4>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <code>+</code> যোগ
                  </div>
                  <div>
                    <code>-</code> বিয়োগ
                  </div>
                  <div>
                    <code>*</code> গুণ
                  </div>
                  <div>
                    <code>/</code> ভাগ
                  </div>
                  <div>
                    <code>//</code> ফ্লোর ডিভিশন
                  </div>
                  <div>
                    <code>%</code> মডুলো
                  </div>
                  <div>
                    <code>**</code> পাওয়ার
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# গাণিতিক অপারেশন
a = 10
b = 3

print(a + b)   # 13 (যোগ)
print(a - b)   # 7  (বিয়োগ)
print(a * b)   # 30 (গুণ)
print(a / b)   # 3.333... (ভাগ)
print(a // b)  # 3  (ফ্লোর ডিভিশন)
print(a % b)   # 1  (ভাগশেষ)
print(a ** b)  # 1000 (10 এর 3 পাওয়ার)`}
                </pre>
              </div>
            </div>

            {/* Comparison Operators */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. তুলনামূলক অপারেটর</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <code>==</code> সমান
                  </div>
                  <div>
                    <code>!=</code> অসমান
                  </div>
                  <div>
                    <code>{">"}</code> বড়
                  </div>
                  <div>
                    <code>{"<"}</code> ছোট
                  </div>
                  <div>
                    <code>{">="}</code> বড় বা সমান
                  </div>
                  <div>
                    <code>{"<="}</code> ছোট বা সমান
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# তুলনামূলক অপারেশন
x = 10
y = 20

print(x == y)   # False
print(x != y)   # True
print(x > y)    # False
print(x < y)    # True
print(x >= 10)  # True
print(y <= 15)  # False`}
                </pre>
              </div>
            </div>

            {/* Logical Operators */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. লজিক্যাল অপারেটর</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <code>and</code> এবং
                  </div>
                  <div>
                    <code>or</code> অথবা
                  </div>
                  <div>
                    <code>not</code> না
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# লজিক্যাল অপারেশন
age = 25
has_license = True

# and অপারেটর
can_drive = age >= 18 and has_license
print(can_drive)  # True

# or অপারেটর
is_weekend = True
is_holiday = False
can_relax = is_weekend or is_holiday
print(can_relax)  # True

# not অপারেটর
is_working = not can_relax
print(is_working)  # False`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input and Output */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">ইনপুট এবং আউটপুট</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ইউজার থেকে ইনপুট নেওয়া এবং আউটপুট দেখানো।</p>

            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">print() ফাংশন:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`# বিভিন্ন উপায়ে প্রিন্ট করা
print("হ্যালো ওয়ার্ল্ড")
print("নাম:", "রহিম", "বয়স:", 25)
print("নাম: {} বয়স: {}".format("করিম", 30))
print(f"নাম: {'সালিম'} বয়স: {35}")

# বিশেষ প্যারামিটার
print("A", "B", "C", sep="-")      # A-B-C
print("লাইন ১", end=" ")
print("লাইন ২")                    # লাইন ১ লাইন ২`}
              </pre>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">input() ফাংশন:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`# ইউজার থেকে ইনপুট নেওয়া
name = input("আপনার নাম লিখুন: ")
print(f"হ্যালো, {name}!")

# সংখ্যা ইনপুট নেওয়া
age_str = input("আপনার বয়স লিখুন: ")
age = int(age_str)  # স্ট্রিং থেকে ইন্টিজারে কনভার্ট
print(f"আপনার বয়স {age} বছর")

# একসাথে কনভার্ট করা
height = float(input("আপনার উচ্চতা (ফুট): "))
print(f"আপনার উচ্চতা {height} ফুট")`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Comments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-indigo-600">কমেন্ট (Comments)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>কমেন্ট ব্যবহার করে কোডের ব্যাখ্যা লেখা যায়। এটি কোড রান করার সময় এক্সিকিউট হয় না।</p>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`# এটি একটি সিঙ্গেল লাইন কমেন্ট
name = "রহিম"  # ভেরিয়েবলের পাশেও কমেন্ট লেখা যায়

"""
এটি একটি মাল্টি-লাইন কমেন্ট
এখানে একাধিক লাইনে
ব্যাখ্যা লেখা যায়
"""

'''
এভাবেও মাল্টি-লাইন
কমেন্ট লেখা যায়
'''

# কমেন্ট ব্যবহারের ভাল অভ্যাস:
# 1. কোডের উদ্দেশ্য ব্যাখ্যা করা
# 2. জটিল লজিক বুঝানো
# 3. TODO নোট রাখা`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Practice Exercise */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800">অনুশীলনী</CardTitle>
          </CardHeader>
          <CardContent className="text-yellow-700 space-y-4">
            <p className="font-semibold">নিচের প্রোগ্রামগুলো লিখে অনুশীলন করুন:</p>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">১. ক্যালকুলেটর প্রোগ্রাম:</h4>
                <p className="text-sm">দুটি সংখ্যা ইনপুট নিয়ে যোগ, বিয়োগ, গুণ, ভাগ করে ফলাফল দেখান।</p>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">২. তাপমাত্রা কনভার্টার:</h4>
                <p className="text-sm">সেলসিয়াস থেকে ফারেনহাইট এবং ফারেনহাইট থেকে সেলসিয়াসে রূপান্তর।</p>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">৩. বয়স ক্যালকুলেটর:</h4>
                <p className="text-sm">জন্ম সাল ইনপুট নিয়ে বর্তমান বয়স হিসাব করুন।</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/programming">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Python প্রোগ্রামিং মূল পাতা
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/programming/control-structures">
              কন্ট্রোল স্ট্রাকচার শিখুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
