import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function ControlStructuresPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            Python প্রোগ্রামিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">কন্ট্রোল স্ট্রাকচার</h1>
          <p className="text-xl text-muted-foreground">
            প্রোগ্রামের ফ্লো কন্ট্রোল করার জন্য if-else স্টেটমেন্ট, লুপ এবং ডিসিশন মেকিং।
          </p>
        </div>

        {/* Overview */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">কন্ট্রোল স্ট্রাকচার কী?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-3">
            <p>কন্ট্রোল স্ট্রাকচার হলো প্রোগ্রামের execution order নিয়ন্ত্রণ করার উপায়। এর মাধ্যমে আমরা:</p>
            <ul className="space-y-2 ml-4">
              <li>
                • <strong>শর্তাধীন execution:</strong> নির্দিষ্ট শর্তে কোড চালানো
              </li>
              <li>
                • <strong>পুনরাবৃত্তি:</strong> একই কোড বারবার চালানো
              </li>
              <li>
                • <strong>ডিসিশন মেকিং:</strong> বিভিন্ন অবস্থায় বিভিন্ন কাজ করা
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* If-Else Statements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">if-else স্টেটমেন্ট</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>শর্তাধীন কোড execution এর জন্য if-else ব্যবহার করা হয়।</p>

            {/* Simple If */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. সাধারণ if স্টেটমেন্ট</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# সাধারণ if স্টেটমেন্ট
age = 18

if age >= 18:
    print("আপনি ভোট দিতে পারবেন")
    print("আপনি প্রাপ্তবয়স্ক")

# একাধিক শর্ত
temperature = 35

if temperature > 30:
    print("আজ গরম দিন")

if temperature > 40:
    print("অতিরিক্ত গরম!")

# নেগেটিভ শর্ত
is_raining = False

if not is_raining:
    print("বাইরে যাওয়া যাবে")`}
                </pre>
              </div>
            </div>

            {/* If-Else */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. if-else স্টেটমেন্ট</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# if-else স্টেটমেন্ট
number = 15

if number % 2 == 0:
    print(f"{number} একটি জোড় সংখ্যা")
else:
    print(f"{number} একটি বিজোড় সংখ্যা")

# পাসওয়ার্ড চেক
password = input("পাসওয়ার্ড দিন: ")

if password == "123456":
    print("সঠিক পাসওয়ার্ড")
    print("লগইন সফল")
else:
    print("ভুল পাসওয়ার্ড")
    print("আবার চেষ্টা করুন")

# বয়স চেক
age = int(input("আপনার বয়স: "))

if age >= 18:
    print("আপনি প্রাপ্তবয়স্ক")
else:
    print("আপনি নাবালক")
    remaining_years = 18 - age
    print(f"আরো {remaining_years} বছর পর প্রাপ্তবয়স্ক হবেন")`}
                </pre>
              </div>
            </div>

            {/* If-Elif-Else */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. if-elif-else স্টেটমেন্ট</h4>

              <div className="bg-purple-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# গ্রেড সিস্টেম
marks = int(input("নম্বর দিন: "))

if marks >= 80:
    grade = "A+"
    print("চমৎকার!")
elif marks >= 70:
    grade = "A"
    print("খুব ভাল!")
elif marks >= 60:
    grade = "A-"
    print("ভাল!")
elif marks >= 50:
    grade = "B"
    print("গড়")
elif marks >= 40:
    grade = "C"
    print("পাস")
else:
    grade = "F"
    print("ফেল")

print(f"আপনার গ্রেড: {grade}")

# আবহাওয়া অনুযায়ী পরামর্শ
temperature = 25

if temperature > 35:
    print("অতিরিক্ত গরম - ঘরে থাকুন")
elif temperature > 25:
    print("গরম - হালকা কাপড় পরুন")
elif temperature > 15:
    print("আরামদায়ক - স্বাভাবিক কাপড়")
elif temperature > 5:
    print("ঠান্ডা - গরম কাপড় পরুন")
else:
    print("অতিরিক্ত ঠান্ডা - জ্যাকেট পরুন")`}
                </pre>
              </div>
            </div>

            {/* Nested If */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৪. নেস্টেড if স্টেটমেন্ট</h4>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# নেস্টেড if - একটি if এর ভিতরে আরেকটি if
age = 20
has_license = True
has_car = False

if age >= 18:
    print("আপনি প্রাপ্তবয়স্ক")
    
    if has_license:
        print("আপনার ড্রাইভিং লাইসেন্স আছে")
        
        if has_car:
            print("আপনি গাড়ি চালাতে পারবেন")
        else:
            print("গাড়ি কিনুন অথবা ভাড়া নিন")
    else:
        print("প্রথমে ড্রাইভিং লাইসেন্স করুন")
else:
    print("আপনি নাবালক, গাড়ি চালাতে পারবেন না")

# ব্যাংক লোন সিস্টেম
salary = 50000
age = 30
credit_score = 750

if salary >= 30000:
    if age >= 21 and age <= 60:
        if credit_score >= 700:
            print("লোনের জন্য যোগ্য")
            loan_amount = salary * 10
            print(f"সর্বোচ্চ লোন: {loan_amount} টাকা")
        else:
            print("ক্রেডিট স্কোর কম")
    else:
        print("বয়স সীমার বাইরে")
else:
    print("বেতন কম")`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logical Operators */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">লজিক্যাল অপারেটর</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>একাধিক শর্ত একসাথে চেক করার জন্য লজিক্যাল অপারেটর ব্যবহার করা হয়।</p>

            <div className="bg-purple-50 p-4 rounded-lg">
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`# and অপারেটর - সব শর্ত সত্য হতে হবে
username = "admin"
password = "123456"

if username == "admin" and password == "123456":
    print("লগইন সফল")
else:
    print("ভুল তথ্য")

# or অপারেটর - যেকোনো একটি শর্ত সত্য হলেই হবে
day = "শনিবার"

if day == "শুক্রবার" or day == "শনিবার":
    print("আজ ছুটির দিন")
else:
    print("আজ কাজের দিন")

# not অপারেটর - শর্ত উল্টে দেয়
is_student = False

if not is_student:
    print("আপনি ছাত্র নন")

# জটিল শর্ত
age = 25
income = 40000
is_employed = True

if (age >= 18 and age <= 65) and (income >= 30000 or is_employed):
    print("ক্রেডিট কার্ডের জন্য যোগ্য")
else:
    print("ক্রেডিট কার্ডের জন্য অযোগ্য")

# in অপারেটর
fruits = ["আম", "কলা", "আপেল"]
fruit = "আম"

if fruit in fruits:
    print(f"{fruit} তালিকায় আছে")

# range চেক
marks = 85

if 80 <= marks <= 100:
    print("A+ গ্রেড")
elif 70 <= marks < 80:
    print("A গ্রেড")`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* For Loops */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">for লুপ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>নির্দিষ্ট সংখ্যকবার বা কোনো sequence এর উপর iterate করার জন্য for লুপ ব্যবহার করা হয়।</p>

            {/* Basic For Loop */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. বেসিক for লুপ</h4>

              <div className="bg-orange-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# range() ব্যবহার করে
print("১ থেকে ৫ পর্যন্ত:")
for i in range(1, 6):
    print(i)

# 0 থেকে শুরু
print("০ থেকে ৪ পর্যন্ত:")
for i in range(5):
    print(i)

# step সহ
print("২, ৪, ৬, ৮, ১০:")
for i in range(2, 11, 2):
    print(i)

# উল্টো দিকে
print("১০ থেকে ১ পর্যন্ত:")
for i in range(10, 0, -1):
    print(i)

# গুণ টেবিল
number = 5
print(f"{number} এর গুণ টেবিল:")
for i in range(1, 11):
    result = number * i
    print(f"{number} × {i} = {result}")`}
                </pre>
              </div>
            </div>

            {/* Loop with Lists */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. লিস্ট এবং স্ট্রিং এর সাথে for লুপ</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# লিস্ট iterate করা
fruits = ["আম", "কলা", "আপেল", "কমলা"]

print("ফলের তালিকা:")
for fruit in fruits:
    print(f"আমি {fruit} পছন্দ করি")

# ইনডেক্স সহ iterate করা
print("ইনডেক্স সহ:")
for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")

# স্ট্রিং iterate করা
name = "বাংলাদেশ"
print("প্রতিটি অক্ষর:")
for char in name:
    print(char)

# ডিকশনারি iterate করা
student = {
    "নাম": "রহিম",
    "বয়স": 20,
    "শহর": "ঢাকা"
}

print("ছাত্রের তথ্য:")
for key, value in student.items():
    print(f"{key}: {value}")

# শুধু keys
for key in student.keys():
    print(key)

# শুধু values
for value in student.values():
    print(value)`}
                </pre>
              </div>
            </div>

            {/* Nested For Loops */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. নেস্টেড for লুপ</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# প্যাটার্ন প্রিন্ট করা
print("স্টার প্যাটার্ন:")
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()  # নতুন লাইন

# গুণ টেবিল (১-৫)
print("গুণ টেবিল:")
for i in range(1, 6):
    for j in range(1, 11):
        result = i * j
        print(f"{i}×{j}={result:2d}", end="  ")
    print()  # নতুন লাইন

# ম্যাট্রিক্স প্রিন্ট করা
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print("ম্যাট্রিক্স:")
for row in matrix:
    for element in row:
        print(element, end=" ")
    print()

# লিস্ট অফ লিস্ট
students = [
    ["রহিম", 85, 90],
    ["করিম", 78, 82],
    ["সালিম", 92, 88]
]

print("ছাত্রদের নম্বর:")
for student in students:
    name = student[0]
    math = student[1]
    english = student[2]
    average = (math + english) / 2
    print(f"{name}: গণিত={math}, ইংরেজি={english}, গড়={average}")`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* While Loops */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">while লুপ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>যতক্ষণ পর্যন্ত কোনো শর্ত সত্য থাকে ততক্ষণ পর্যন্ত কোড চালানোর জন্য while লুপ ব্যবহার করা হয়।</p>

            {/* Basic While Loop */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. বেসিক while লুপ</h4>

              <div className="bg-red-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# সাধারণ while লুপ
count = 1

print("১ থেকে ৫ পর্যন্ত:")
while count <= 5:
    print(count)
    count += 1  # count = count + 1

# ইউজার ইনপুট পর্যন্ত চালানো
password = ""

while password != "123456":
    password = input("পাসওয়ার্ড দিন (123456): ")
    if password != "123456":
        print("ভুল পাসওয়ার্ড, আবার চেষ্টা করুন")

print("সঠিক পাসওয়ার্ড!")

# সংখ্যা গেসিং গেম
import random

secret_number = random.randint(1, 10)
guess = 0

print("১ থেকে ১০ এর মধ্যে একটি সংখ্যা অনুমান করুন:")

while guess != secret_number:
    guess = int(input("আপনার অনুমান: "))
    
    if guess < secret_number:
        print("আরো বড় সংখ্যা")
    elif guess > secret_number:
        print("আরো ছোট সংখ্যা")
    else:
        print("সঠিক! অভিনন্দন!")

# ফ্যাক্টোরিয়াল হিসাব
number = int(input("ফ্যাক্টোরিয়াল হিসাবের জন্য সংখ্যা দিন: "))
factorial = 1
temp = number

while temp > 0:
    factorial *= temp
    temp -= 1

print(f"{number}! = {factorial}")`}
                </pre>
              </div>
            </div>

            {/* While with Else */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. while-else স্টেটমেন্ট</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# while-else - লুপ স্বাভাবিকভাবে শেষ হলে else চালু হয়
numbers = [2, 4, 6, 8, 10]
target = 7
found = False
index = 0

while index < len(numbers):
    if numbers[index] == target:
        print(f"{target} পাওয়া গেছে index {index} এ")
        found = True
        break
    index += 1
else:
    # break না হলে এই অংশ চালু হবে
    print(f"{target} তালিকায় নেই")

# প্রাইম নাম্বার চেক
number = int(input("প্রাইম চেক করার জন্য সংখ্যা দিন: "))

if number < 2:
    print("প্রাইম নয়")
else:
    divisor = 2
    while divisor * divisor <= number:
        if number % divisor == 0:
            print(f"{number} প্রাইম নয়, {divisor} দিয়ে ভাগ যায়")
            break
        divisor += 1
    else:
        print(f"{number} একটি প্রাইম সংখ্যা")`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loop Control */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">লুপ কন্ট্রোল</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>break, continue, এবং pass স্টেটমেন্ট দিয়ে লুপের flow কন্ট্রোল করা যায়।</p>

            {/* Break Statement */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. break স্টেটমেন্ট</h4>

              <div className="bg-teal-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# break - লুপ থেকে বের হয়ে যাওয়া
print("১ থেকে ১০ পর্যন্ত, কিন্তু ৫ এ থামা:")
for i in range(1, 11):
    if i == 5:
        break
    print(i)

# ইউজার ইনপুট বন্ধ করা
print("সংখ্যা দিন (0 দিলে বন্ধ):")
while True:
    number = int(input("সংখ্যা: "))
    if number == 0:
        print("প্রোগ্রাম বন্ধ")
        break
    print(f"আপনি দিয়েছেন: {number}")

# লিস্টে খোঁজা
names = ["রহিম", "করিম", "সালিম", "জামিল"]
search_name = "সালিম"

for name in names:
    if name == search_name:
        print(f"{search_name} পাওয়া গেছে!")
        break
else:
    print(f"{search_name} পাওয়া যায়নি")

# নেস্টেড লুপে break
print("নেস্টেড লুপে break:")
for i in range(1, 4):
    print(f"বাইরের লুপ: {i}")
    for j in range(1, 4):
        if j == 2:
            break  # শুধু ভিতরের লুপ থেকে বের হবে
        print(f"  ভিতরের লুপ: {j}")`}
                </pre>
              </div>
            </div>

            {/* Continue Statement */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. continue স্টেটমেন্ট</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# continue - বর্তমান iteration স্কিপ করা
print("১ থেকে ১০ পর্যন্ত, কিন্তু জোড় সংখ্যা বাদ:")
for i in range(1, 11):
    if i % 2 == 0:  # জোড় সংখ্যা
        continue
    print(i)

# নেগেটিভ সংখ্যা স্কিপ করা
numbers = [1, -2, 3, -4, 5, -6, 7]
print("শুধু পজিটিভ সংখ্যা:")
for num in numbers:
    if num < 0:
        continue
    print(num)

# ভাওয়েল স্কিপ করা
text = "বাংলাদেশ"
print("ব্যঞ্জনবর্ণ:")
vowels = "আইউএওঅ"
for char in text:
    if char in vowels:
        continue
    print(char, end="")
print()

# ইনপুট ভ্যালিডেশন
print("পজিটিভ সংখ্যা দিন (0 দিলে বন্ধ):")
while True:
    try:
        number = int(input("সংখ্যা: "))
        if number == 0:
            break
        if number < 0:
            print("নেগেটিভ সংখ্যা গ্রহণযোগ্য নয়")
            continue
        print(f"বর্গ: {number ** 2}")
    except ValueError:
        print("সঠিক সংখ্যা দিন")
        continue`}
                </pre>
              </div>
            </div>

            {/* Pass Statement */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. pass স্টেটমেন্ট</h4>

              <div className="bg-purple-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# pass - কিছু না করা (placeholder)
for i in range(5):
    if i == 2:
        pass  # এখানে পরে কোড লিখব
    else:
        print(i)

# ফাংশন প্লেসহোল্ডার
def future_function():
    pass  # পরে implement করব

# ক্লাস প্লেসহোল্ডার
class FutureClass:
    pass  # পরে implement করব

# শর্তাধীন pass
age = 17

if age >= 18:
    print("প্রাপ্তবয়স্ক")
else:
    pass  # নাবালকদের জন্য কিছু করার নেই এখন

# এরর হ্যান্ডলিং এ pass
try:
    result = 10 / 0
except ZeroDivisionError:
    pass  # এরর ignore করা

print("প্রোগ্রাম চালু থাকল")`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-indigo-600">প্র্যাকটিক্যাল উদাহরণ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>বাস্তব জীবনের সমস্যা সমাধানে কন্ট্রোল স্ট্রাকচার ব্যবহার।</p>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`# ১. ATM মেশিন সিমুলেটর
balance = 10000
pin = "1234"

print("ATM মেশিনে স্বাগতম")
entered_pin = input("PIN দিন: ")

if entered_pin == pin:
    while True:
        print("\\n1. ব্যালেন্স দেখুন")
        print("2. টাকা তুলুন")
        print("3. টাকা জমা দিন")
        print("4. বের হন")
        
        choice = input("অপশন বেছে নিন: ")
        
        if choice == "1":
            print(f"আপনার ব্যালেন্স: {balance} টাকা")
        
        elif choice == "2":
            amount = int(input("কত টাকা তুলবেন: "))
            if amount <= balance:
                balance -= amount
                print(f"{amount} টাকা তোলা হয়েছে")
                print(f"বর্তমান ব্যালেন্স: {balance} টাকা")
            else:
                print("অপর্যাপ্ত ব্যালেন্স")
        
        elif choice == "3":
            amount = int(input("কত টাকা জমা দিবেন: "))
            balance += amount
            print(f"{amount} টাকা জমা হয়েছে")
            print(f"বর্তমান ব্যালেন্স: {balance} টাকা")
        
        elif choice == "4":
            print("ধন্যবাদ!")
            break
        
        else:
            print("ভুল অপশন")
else:
    print("ভুল PIN")

# ২. সংখ্যা গেসিং গেম (উন্নত)
import random

print("\\nসংখ্যা গেসিং গেম")
print("১ থেকে ১০০ এর মধ্যে একটি সংখ্যা অনুমান করুন")

secret = random.randint(1, 100)
attempts = 0
max_attempts = 7

while attempts < max_attempts:
    try:
        guess = int(input(f"অনুমান করুন ({max_attempts - attempts} সুযোগ বাকি): "))
        attempts += 1
        
        if guess == secret:
            print(f"অভিনন্দন! {attempts} চেষ্টায় সঠিক উত্তর!")
            break
        elif guess < secret:
            print("আরো বড় সংখ্যা")
        else:
            print("আরো ছোট সংখ্যা")
            
    except ValueError:
        print("সঠিক সংখ্যা দিন")
        attempts -= 1  # ভুল ইনপুটের জন্য attempt কাটা হবে না

else:
    print(f"সুযোগ শেষ! সঠিক উত্তর ছিল: {secret}")

# ৩. ছাত্র গ্রেড ক্যালকুলেটর
print("\\nছাত্র গ্রেড ক্যালকুলেটর")

students = []
num_students = int(input("কতজন ছাত্রের তথ্য দিবেন: "))

for i in range(num_students):
    print(f"\\n{i+1} নং ছাত্রের তথ্য:")
    name = input("নাম: ")
    
    subjects = ["গণিত", "ইংরেজি", "বিজ্ঞান"]
    marks = []
    
    for subject in subjects:
        while True:
            try:
                mark = float(input(f"{subject} এর নম্বর (০-১০০): "))
                if 0 <= mark <= 100:
                    marks.append(mark)
                    break
                else:
                    print("০-১০০ এর মধ্যে নম্বর দিন")
            except ValueError:
                print("সঠিক নম্বর দিন")
    
    average = sum(marks) / len(marks)
    
    if average >= 80:
        grade = "A+"
    elif average >= 70:
        grade = "A"
    elif average >= 60:
        grade = "B"
    elif average >= 50:
        grade = "C"
    else:
        grade = "F"
    
    students.append({
        "name": name,
        "marks": marks,
        "average": average,
        "grade": grade
    })

# ফলাফল প্রিন্ট করা
print("\\n" + "="*50)
print("ফলাফল")
print("="*50)

for student in students:
    print(f"নাম: {student['name']}")
    print(f"নম্বর: {student['marks']}")
    print(f"গড়: {student['average']:.2f}")
    print(f"গ্রেড: {student['grade']}")
    print("-" * 30)`}
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
                <p className="text-sm">মেনু দিয়ে যোগ, বিয়োগ, গুণ, ভাগ করার প্রোগ্রাম বানান। ইউজার 'q' চাপলে বন্ধ হবে।</p>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">২. পাসওয়ার্ড জেনারেটর:</h4>
                <p className="text-sm">ইউজারের পছন্দ অনুযায়ী (দৈর্ঘ্য, বড় হাতের অক্ষর, সংখ্যা, বিশেষ চিহ্ন) পাসওয়ার্ড তৈরি করুন।</p>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">৩. প্রাইম নাম্বার ফাইন্ডার:</h4>
                <p className="text-sm">একটি রেঞ্জের মধ্যে সব প্রাইম নাম্বার খুঁজে বের করুন।</p>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">৪. টিক ট্যাক টো গেম:</h4>
                <p className="text-sm">সাধারণ টিক ট্যাক টো গেম বানান যেখানে দুইজন খেলোয়াড় পালাক্রমে খেলবে।</p>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">৫. ব্যাংক অ্যাকাউন্ট সিস্টেম:</h4>
                <p className="text-sm">একাধিক অ্যাকাউন্ট তৈরি, টাকা জমা/তোলা, ট্রান্সফার করার সিস্টেম বানান।</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/programming/python-basics">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Python বেসিক
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/programming/data-structures">
              ডেটা স্ট্রাকচার
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
