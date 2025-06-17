import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FunctionsModulesPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            Python প্রোগ্রামিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">ফাংশন এবং মডিউল</h1>
          <p className="text-xl text-muted-foreground">
            কোড রিইউজেবিলিটি এবং অর্গানাইজেশনের জন্য ফাংশন এবং মডিউল ব্যবহার।
          </p>
        </div>

        {/* Overview */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">কেন ফাংশন ব্যবহার করবেন?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-3">
            <ul className="space-y-2 ml-4">
              <li>• <strong>কোড রিইউজ:</strong> একবার লিখে বারবার ব্যবহার</li>
              <li>• <strong>মডুলারিটি:</strong> বড় প্রোগ্রামকে ছোট অংশে ভাগ করা</li>
              <li>• <strong>ডিবাগিং সহজ:</strong> সমস্যা খুঁজে বের করা সহজ</li>
              <li>• <strong>কোড পড়া সহজ:</strong> প্রোগ্রাম বুঝতে সুবিধা</li>
              <li>• <strong>টিম ওয়ার্ক:</strong> একাধিক ব্যক্তি একসাথে কাজ করতে পারে</li>
            </ul>
          </CardContent>
        </Card>

        {/* Basic Functions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">ফাংশনের মূল বিষয়</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Function Definition */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. ফাংশন ডিফিনিশন এবং কল</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# সাধারণ ফাংশন
def greet():
    print("আসসালামু আলাইকুম!")
    print("আপনাকে স্বাগতম!")

# ফাংশন কল করা
greet()
greet()  # একাধিকবার কল করা যায়

# প্যারামিটার সহ ফাংশন
def greet_person(name):
    print(f"হ্যালো, {name}!")
    print("আপনি কেমন আছেন?")

# ফাংশন কল করা
greet_person("রহিম")
greet_person("করিম")

# একাধিক প্যারামিটার
def introduce(name, age, city):
    print(f"আমার নাম {name}")
    print(f"আমার বয়স {age} বছর")
    print(f"আমি {city} থেকে এসেছি")

introduce("সালিম", 25, "ঢাকা")

# রিটার্ন ভ্যালু সহ ফাংশন
def add_numbers(a, b):
    result = a + b
    return result

# ফাংশনের রিটার্ন ভ্যালু ব্যবহার করা
sum_result = add_numbers(10, 20)
print(f"যোগফল: {sum_result}")

# সরাসরি প্রিন্ট করা
print(f"৫ + ৭ = {add_numbers(5, 7)}")`}
                </pre>
              </div>
            </div>

            {/* Function Parameters */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. ফাংশন প্যারামিটার</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# ডিফল্ট প্যারামিটার
def greet_with_title(name, title="ভাই"):
    print(f"আসসালামু আলাইকুম, {name} {title}!")

greet_with_title("রহিম")        # ডিফল্ট title ব্যবহার হবে
greet_with_title("ফাতিমা", "আপা")  # কাস্টম title

# কীওয়ার্ড আর্গুমেন্ট
def create_profile(name, age, city="ঢাকা", profession="ছাত্র"):
    print(f"নাম: {name}")
    print(f"বয়স: {age}")
    print(f"শহর: {city}")
    print(f"পেশা: {profession}")
    print("-" * 20)

# বিভিন্ন উপায়ে কল করা
create_profile("আলী", 22)
create_profile("সারা", 25, city="চট্টগ্রাম")
create_profile(name="করিম", age=30, profession="ইঞ্জিনিয়ার")

# *args - অনির্দিষ্ট সংখ্যক আর্গুমেন্ট
def calculate_sum(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(calculate_sum(1, 2, 3))           # 6
print(calculate_sum(10, 20, 30, 40))    # 100
print(calculate_sum(5))                 # 5

# **kwargs - অনির্দিষ্ট সংখ্যক কীওয়ার্ড আর্গুমেন্ট
def print_info(**info):
    print("তথ্য:")
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="রহিম", age=25, city="ঢাকা")
print_info(product="ল্যাপটপ", price=50000, brand="Dell")`}
                </pre>
              </div>
            </div>

            {/* Return Values */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. রিটার্ন ভ্যালু</h4>

              <div className="bg-purple-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# একাধিক ভ্যালু রিটার্ন করা
def calculate_circle(radius):
    area = 3.14159 * radius * radius
    circumference = 2 * 3.14159 * radius
    return area, circumference

# একাধিক ভ্যালু রিসিভ করা
area, circumference = calculate_circle(5)
print(f"ক্ষেত্রফল: {area:.2f}")
print(f"পরিধি: {circumference:.2f}")

# টিউপল হিসেবে রিসিভ করা
result = calculate_circle(3)
print(f"ফলাফল: {result}")

# শর্তাধীন রিটার্ন
def check_grade(marks):
    if marks >= 80:
        return "A+", "চমৎকার"
    elif marks >= 70:
        return "A", "ভাল"
    elif marks >= 60:
        return "B", "গড়"
    elif marks >= 40:
        return "C", "পাস"
    else:
        return "F", "ফেল"

grade, comment = check_grade(85)
print(f"গ্রেড: {grade}, মন্তব্য: {comment}")

# None রিটার্ন (কিছু রিটার্ন না করলে)
def print_message(msg):
    print(msg)
    # কোন return statement নেই

result = print_message("হ্যালো")
print(f"রিটার্ন ভ্যালু: {result}")  # None

# Early return
def divide_numbers(a, b):
    if b == 0:
        return "ভাগ করা যাবে না (শূন্য দিয়ে ভাগ)"
    
    return a / b

print(divide_numbers(10, 2))  # 5.0
print(divide_numbers(10, 0))  # ভাগ করা যাবে না`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Functions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">অ্যাডভান্সড ফাংশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Local vs Global Variables */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. লোকাল এবং গ্লোবাল ভেরিয়েবল</h4>

              <div className="bg-orange-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# গ্লোবাল ভেরিয়েবল
global_var = "আমি গ্লোবাল"

def test_scope():
    # লোকাল ভেরিয়েবল
    local_var = "আমি লোকাল"
    print(f"ফাংশনের ভিতরে: {global_var}")
    print(f"ফাংশনের ভিতরে: {local_var}")

test_scope()
print(f"ফাংশনের বাইরে: {global_var}")
# print(local_var)  # Error হবে - লোকাল ভেরিয়েবল বাইরে অ্যাক্সেস করা যায় না

# গ্লোবাল ভেরিয়েবল মডিফাই করা
counter = 0

def increment():
    global counter
    counter += 1
    print(f"Counter: {counter}")

increment()  # Counter: 1
increment()  # Counter: 2
print(f"বাইরে counter: {counter}")  # 2

# নেস্টেড ফাংশন
def outer_function(x):
    def inner_function(y):
        return x + y
    
    return inner_function

# ক্লোজার
add_10 = outer_function(10)
print(add_10(5))  # 15

add_20 = outer_function(20)
print(add_20(5))  # 25`}
                </pre>
              </div>
            </div>

            {/* Lambda Functions */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. ল্যাম্বডা ফাংশন</h4>

              <div className="bg-red-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# সাধারণ ফাংশন vs ল্যাম্বডা ফাংশন
# সাধারণ ফাংশন
def square(x):
    return x * x

# ল্যাম্বডা ফাংশন
square_lambda = lambda x: x * x

print(square(5))        # 25
print(square_lambda(5)) # 25

# একাধিক প্যারামিটার
add = lambda x, y: x + y
print(add(10, 20))  # 30

# শর্তাধীন ল্যাম্বডা
max_value = lambda x, y: x if x > y else y
print(max_value(10, 20))  # 20

# লিস্টের সাথে ল্যাম্বডা
numbers = [1, 2, 3, 4, 5]

# map() ফাংশনের সাথে
squares = list(map(lambda x: x**2, numbers))
print(squares)  # [1, 4, 9, 16, 25]

# filter() ফাংশনের সাথে
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]

# sorted() ফাংশনের সাথে
students = [("রহিম", 85), ("করিম", 92), ("সালিম", 78)]
sorted_by_marks = sorted(students, key=lambda x: x[1])
print(sorted_by_marks)  # [('সালিম', 78), ('রহিম', 85), ('করিম', 92)]`}
                </pre>
              </div>
            </div>

            {/* Recursive Functions */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. রিকার্সিভ ফাংশন</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# ফ্যাক্টোরিয়াল (রিকার্সিভ)
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(f"5! = {factorial(5)}")  # 120

# ফিবোনাচি সিরিজ
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print("ফিবোনাচি সিরিজ:")
for i in range(10):
    print(fibonacci(i), end=" ")
print()

# পাওয়ার ক্যালকুলেশন
def power(base, exp):
    if exp == 0:
        return 1
    elif exp == 1:
        return base
    else:
        return base * power(base, exp - 1)

print(f"2^5 = {power(2, 5)}")  # 32

# বাইনারি সার্চ (রিকার্সিভ)
def binary_search(arr, target, left, right):
    if left > right:
        return -1
    
    mid = (left + right) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return binary_search(arr, target, left, mid - 1)
    else:
        return binary_search(arr, target, mid + 1, right)

numbers = [1, 3, 5, 7, 9, 11, 13, 15]
index = binary_search(numbers, 7, 0, len(numbers) - 1)
print(f"7 পাওয়া গেছে index {index} এ")`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modules */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">মডিউল (Modules)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>মডিউল হলো Python ফাইল যাতে ফাংশন, ক্লাস এবং ভেরিয়েবল থাকে। এটি কোড অর্গানাইজ করতে সাহায্য করে।</p>

            {/* Built-in Modules */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. বিল্ট-ইন মডিউল</h4>

              <div className="bg-purple-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# math মডিউল
import math

print(f"π = {math.pi}")
print(f"e = {math.e}")
print(f"√16 = {math.sqrt(16)}")
print(f"2^3 = {math.pow(2, 3)}")
print(f"sin(90°) = {math.sin(math.radians(90))}")

# random মডিউল
import random

print(f"র‍্যান্ডম সংখ্যা (1-10): {random.randint(1, 10)}")
print(f"র‍্যান্ডম ফ্লোট: {random.random()}")

colors = ["লাল", "সবুজ", "নীল", "হলুদ"]
print(f"র‍্যান্ডম রং: {random.choice(colors)}")

numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)
print(f"শাফল করা: {numbers}")

# datetime মডিউল
import datetime

now = datetime.datetime.now()
print(f"বর্তমান সময়: {now}")
print(f"আজকের তারিখ: {now.strftime('%d/%m/%Y')}")
print(f"বর্তমান সময়: {now.strftime('%H:%M:%S')}")

# os মডিউল
import os

print(f"বর্তমান ডিরেক্টরি: {os.getcwd()}")
print(f"অপারেটিং সিস্টেম: {os.name}")

# sys মডিউল
import sys

print(f"Python ভার্সন: {sys.version}")
print(f"প্ল্যাটফর্ম: {sys.platform}")`}
                </pre>
              </div>
            </div>

            {/* Import Variations */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. Import এর বিভিন্ন উপায়</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# সম্পূর্ণ মডিউল import করা
import math
result = math.sqrt(25)

# নির্দিষ্ট ফাংশন import করা
from math import sqrt, pi
result = sqrt(25)
print(f"π = {pi}")

# একাধিক ফাংশন import করা
from random import randint, choice, shuffle

# সব কিছু import করা (সাধারণত এড়ি
