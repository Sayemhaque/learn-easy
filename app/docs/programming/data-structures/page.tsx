import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function DataStructuresPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            Python প্রোগ্রামিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">ডেটা স্ট্রাকচার</h1>
          <p className="text-xl text-muted-foreground">Python এর বিল্ট-ইন ডেটা স্ট্রাকচার - লিস্ট, টিউপল, ডিকশনারি এবং সেট।</p>
        </div>

        {/* Overview */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">ডেটা স্ট্রাকচার কী?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-3">
            <p>ডেটা স্ট্রাকচার হলো ডেটা সংরক্ষণ এবং সংগঠিত করার উপায়। Python এ চারটি মূল ডেটা স্ট্রাকচার রয়েছে:</p>
            <ul className="space-y-2 ml-4">
              <li>
                • <strong>লিস্ট (List):</strong> পরিবর্তনযোগ্য, ক্রমানুসারে সাজানো
              </li>
              <li>
                • <strong>টিউপল (Tuple):</strong> অপরিবর্তনীয়, ক্রমানুসারে সাজানো
              </li>
              <li>
                • <strong>ডিকশনারি (Dictionary):</strong> কী-ভ্যালু পেয়ার, অক্রমানুসারে
              </li>
              <li>
                • <strong>সেট (Set):</strong> ইউনিক এলিমেন্ট, অক্রমানুসারে
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Lists */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">লিস্ট (List)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>লিস্ট হলো Python এর সবচেয়ে ব্যবহৃত ডেটা স্ট্রাকচার। এটি পরিবর্তনযোগ্য এবং একাধিক ডেটা টাইপ রাখতে পারে।</p>

            {/* Creating Lists */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">লিস্ট তৈরি করা</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# খালি লিস্ট
empty_list = []
empty_list2 = list()

# সংখ্যার লিস্ট
numbers = [1, 2, 3, 4, 5]

# স্ট্রিংয়ের লিস্ট
fruits = ["আম", "কলা", "আপেল", "কমলা"]

# মিশ্র ডেটা টাইপের লিস্ট
mixed = ["রহিম", 25, 5.8, True]

# নেস্টেড লিস্ট
nested = [[1, 2], [3, 4], [5, 6]]

print(fruits)  # ['আম', 'কলা', 'আপেল', 'কমলা']`}
                </pre>
              </div>
            </div>

            {/* List Operations */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">লিস্ট অপারেশন</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`fruits = ["আম", "কলা", "আপেল"]

# এলিমেন্ট অ্যাক্সেস করা (ইনডেক্সিং)
print(fruits[0])    # আম (প্রথম এলিমেন্ট)
print(fruits[-1])   # আপেল (শেষ এলিমেন্ট)

# স্লাইসিং
print(fruits[0:2])  # ['আম', 'কলা']
print(fruits[1:])   # ['কলা', 'আপেল']

# লিস্টের দৈর্ঘ্য
print(len(fruits))  # 3

# এলিমেন্ট আছে কিনা চেক করা
print("আম" in fruits)     # True
print("আনারস" in fruits)  # False`}
                </pre>
              </div>
            </div>

            {/* List Methods */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">লিস্ট মেথড</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`fruits = ["আম", "কলা"]

# এলিমেন্ট যোগ করা
fruits.append("আপেল")        # শেষে যোগ
fruits.insert(1, "আনারস")    # নির্দিষ্ট পজিশনে যোগ
print(fruits)  # ['আম', 'আনারস', 'কলা', 'আপেল']

# এলিমেন্ট সরানো
fruits.remove("আনারস")       # ভ্যালু দিয়ে সরানো
deleted = fruits.pop()       # শেষ এলিমেন্ট সরানো
deleted2 = fruits.pop(0)     # ইনডেক্স দিয়ে সরানো

# অন্যান্য মেথড
numbers = [3, 1, 4, 1, 5]
numbers.sort()               # সর্ট করা
print(numbers)  # [1, 1, 3, 4, 5]

numbers.reverse()            # উল্টানো
print(numbers)  # [5, 4, 3, 1, 1]

count = numbers.count(1)     # কতবার আছে
print(count)    # 2

index = numbers.index(4)     # কোন পজিশনে আছে
print(index)    # 1`}
                </pre>
              </div>
            </div>

            {/* List Comprehension */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">লিস্ট কম্প্রিহেনশন</h4>
              <p>একটি লাইনে লিস্ট তৈরি করার শক্তিশালী উপায়।</p>

              <div className="bg-purple-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# সাধারণ উপায়
squares = []
for i in range(1, 6):
    squares.append(i ** 2)
print(squares)  # [1, 4, 9, 16, 25]

# লিস্ট কম্প্রিহেনশন
squares = [i ** 2 for i in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# শর্ত সহ
even_squares = [i ** 2 for i in range(1, 11) if i % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]

# স্ট্রিং প্রসেসিং
names = ["রহিম", "করিম", "সালিম"]
upper_names = [name.upper() for name in names]
print(upper_names)  # ['রহিম', 'করিম', 'সালিম']`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tuples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">টিউপল (Tuple)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>টিউপল লিস্টের মতোই কিন্তু অপরিবর্তনীয় (immutable)। একবার তৈরি হলে এর এলিমেন্ট পরিবর্তন করা যায় না।</p>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">টিউপল তৈরি করা:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`# খালি টিউপল
empty_tuple = ()
empty_tuple2 = tuple()

# সংখ্যার টিউপল
coordinates = (10, 20)

# স্ট্রিংয়ের টিউপল
colors = ("লাল", "সবুজ", "নীল")

# একটি এলিমেন্টের টিউপল (কমা জরুরি)
single = (5,)

# প্যারেন্থেসিস ছাড়াও টিউপল
point = 3, 4
print(type(point))  # <class 'tuple'>

# নেস্টেড টিউপল
nested_tuple = ((1, 2), (3, 4), (5, 6))`}
              </pre>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">টিউপল অপারেশন:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`colors = ("লাল", "সবুজ", "নীল")

# এলিমেন্ট অ্যাক্সেস
print(colors[0])    # লাল
print(colors[-1])   # নীল

# স্লাইসিং
print(colors[1:])   # ('সবুজ', 'নীল')

# টিউপল আনপ্যাকিং
x, y = (10, 20)
print(x, y)  # 10 20

# একাধিক ভেরিয়েবল অ্যাসাইনমেন্ট
name, age, city = ("রহিম", 25, "ঢাকা")

# টিউপল মেথড
numbers = (1, 2, 3, 2, 4, 2)
print(numbers.count(2))  # 3
print(numbers.index(3))  # 2`}
              </pre>
            </div>

            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-sm text-yellow-700">
                <strong>কখন টিউপল ব্যবহার করবেন:</strong> যখন ডেটা পরিবর্তন হবে না (যেমন: কো-অর্ডিনেট, RGB কালার ভ্যালু)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Dictionaries */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">ডিকশনারি (Dictionary)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>ডিকশনারি কী-ভ্যালু পেয়ার আকারে ডেটা স্টোর করে। এটি পরিবর্তনযোগ্য এবং অক্রমানুসারে।</p>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">ডিকশনারি তৈরি করা</h4>

              <div className="bg-orange-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# খালি ডিকশনারি
empty_dict = {}
empty_dict2 = dict()

# ব্যক্তির তথ্য
person = {
    "নাম": "রহিম",
    "বয়স": 25,
    "শহর": "ঢাকা",
    "পেশা": "ইঞ্জিনিয়ার"
}

# নেস্টেড ডিকশনারি
student = {
    "নাম": "সারা",
    "গ্রেড": {
        "গণিত": 85,
        "ইংরেজি": 92,
        "বিজ্ঞান": 78
    }
}

print(person)  # {'নাম': 'রহিম', 'বয়স': 25, 'শহর': 'ঢাকা', 'পেশা': 'ইঞ্জিনিয়ার'}`}
                </pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">ডিকশনারি অপারেশন</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`person = {"নাম": "রহিম", "বয়স": 25, "শহর": "ঢাকা"}

# ভ্যালু অ্যাক্সেস করা
print(person["নাম"])        # রহিম
print(person.get("বয়স"))   # 25
print(person.get("ফোন", "নেই"))  # নেই (ডিফল্ট ভ্যালু)

# নতুন কী-ভ্যালু যোগ করা
person["ফোন"] = "01712345678"
person["ইমেইল"] = "rahim@email.com"

# ভ্যালু আপডেট করা
person["বয়স"] = 26

# কী ডিলিট করা
del person["শহর"]
# অথবা
removed = person.pop("ফোন")

print(person)  # {'নাম': 'রহিম', 'বয়স': 26, 'ইমেইল': 'rahim@email.com'}`}
                </pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">ডিকশনারি মেথড</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`person = {"নাম": "রহিম", "বয়স": 25, "শহর": "ঢাকা"}

# সব কী পাওয়া
keys = person.keys()
print(list(keys))  # ['নাম', 'বয়স', 'শহর']

# সব ভ্যালু পাওয়া
values = person.values()
print(list(values))  # ['রহিম', 25, 'ঢাকা']

# কী-ভ্যালু পেয়ার পাওয়া
items = person.items()
print(list(items))  # [('নাম', 'রহিম'), ('বয়স', 25), ('শহর', 'ঢাকা')]

# ডিকশনারি লুপ করা
for key in person:
    print(f"{key}: {person[key]}")

# কী-ভ্যালু একসাথে লুপ করা
for key, value in person.items():
    print(f"{key}: {value}")

# ডিকশনারি কপি করা
person_copy = person.copy()

# ডিকশনারি ক্লিয়ার করা
person.clear()
print(person)  # {}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sets */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">সেট (Set)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>সেট হলো ইউনিক এলিমেন্টের কালেকশন। এতে ডুপ্লিকেট ভ্যালু থাকে না এবং এটি অক্রমানুসারে।</p>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">সেট তৈরি করা</h4>

              <div className="bg-red-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# খালি সেট
empty_set = set()  # {} দিয়ে খালি ডিকশনারি হয়

# সংখ্যার সেট
numbers = {1, 2, 3, 4, 5}

# স্ট্রিংয়ের সেট
fruits = {"আম", "কলা", "আপেল"}

# লিস্ট থেকে সেট (ডুপ্লিকেট সরানোর জন্য)
numbers_list = [1, 2, 2, 3, 3, 4]
unique_numbers = set(numbers_list)
print(unique_numbers)  # {1, 2, 3, 4}

# স্ট্রিং থেকে সেট
letters = set("hello")
print(letters)  # {'h', 'e', 'l', 'o'}`}
                </pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">সেট অপারেশন</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`fruits = {"আম", "কলা", "আপেল"}

# এলিমেন্ট যোগ করা
fruits.add("আনারস")
print(fruits)  # {'আম', 'কলা', 'আপেল', 'আনারস'}

# একাধিক এলিমেন্ট যোগ করা
fruits.update(["কমলা", "আঙুর"])

# এলিমেন্ট সরানো
fruits.remove("কলা")      # KeyError হবে যদি না থাকে
fruits.discard("পেয়ারা")  # Error হবে না

# র‍্যান্ডম এলিমেন্ট সরানো
removed = fruits.pop()

# এলিমেন্ট আছে কিনা চেক
print("আম" in fruits)     # True

# সেটের দৈর্ঘ্য
print(len(fruits))

# সেট ক্লিয়ার করা
fruits.clear()`}
                </pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">সেট ম্যাথমেটিক্যাল অপারেশন</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# ইউনিয়ন (মিলন)
union = set1 | set2
# অথবা
union = set1.union(set2)
print(union)  # {1, 2, 3, 4, 5, 6}

# ইন্টারসেকশন (ছেদ)
intersection = set1 & set2
# অথবা
intersection = set1.intersection(set2)
print(intersection)  # {3, 4}

# ডিফারেন্স (পার্থক্য)
difference = set1 - set2
# অথবা
difference = set1.difference(set2)
print(difference)  # {1, 2}

# সিমেট্রিক ডিফারেন্স
sym_diff = set1 ^ set2
# অথবা
sym_diff = set1.symmetric_difference(set2)
print(sym_diff)  # {1, 2, 5, 6}

# সাবসেট চেক
subset = {1, 2}
print(subset.issubset(set1))  # True

# সুপারসেট চেক
print(set1.issuperset(subset))  # True`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-indigo-600">ডেটা স্ট্রাকচার তুলনা</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">বৈশিষ্ট্য</th>
                    <th className="border border-gray-300 p-2 text-left">লিস্ট</th>
                    <th className="border border-gray-300 p-2 text-left">টিউপল</th>
                    <th className="border border-gray-300 p-2 text-left">ডিকশনারি</th>
                    <th className="border border-gray-300 p-2 text-left">সেট</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">পরিবর্তনযোগ্য</td>
                    <td className="border border-gray-300 p-2">✅ হ্যাঁ</td>
                    <td className="border border-gray-300 p-2">❌ না</td>
                    <td className="border border-gray-300 p-2">✅ হ্যাঁ</td>
                    <td className="border border-gray-300 p-2">✅ হ্যাঁ</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">ক্রমানুসারে</td>
                    <td className="border border-gray-300 p-2">✅ হ্যাঁ</td>
                    <td className="border border-gray-300 p-2">✅ হ্যাঁ</td>
                    <td className="border border-gray-300 p-2">❌ না</td>
                    <td className="border border-gray-300 p-2">❌ না</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">ইনডেক্সিং</td>
                    <td className="border border-gray-300 p-2">✅ হ্যাঁ</td>
                    <td className="border border-gray-300 p-2">✅ হ্যাঁ</td>
                    <td className="border border-gray-300 p-2">❌ না</td>
                    <td className="border border-gray-300 p-2">❌ না</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">ডুপ্লিকেট</td>
                    <td className="border border-gray-300 p-2">✅ অনুমতি</td>
                    <td className="border border-gray-300 p-2">✅ অনুমতি</td>
                    <td className="border border-gray-300 p-2">❌ কী-তে না</td>
                    <td className="border border-gray-300 p-2">❌ অনুমতি নেই</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">সিনট্যাক্স</td>
                    <td className="border border-gray-300 p-2">[1, 2, 3]</td>
                    <td className="border border-gray-300 p-2">(1, 2, 3)</td>
                    <td className="border border-gray-300 p-2">{'{"a": 1}'}</td>
                    <td className="border border-gray-300 p-2">{(1, 2, 3)}</td>
                  </tr>
                </tbody>
              </table>
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
                <h4 className="font-semibold mb-2">১. ছাত্র গ্রেড সিস্টেম:</h4>
                <p className="text-sm">ডিকশনারি ব্যবহার করে ছাত্রদের নাম এবং গ্রেড স্টোর করুন। গড় গ্রেড হিসাব করুন।</p>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">২. শপিং লিস্ট:</h4>
                <p className="text-sm">লিস্ট ব্যবহার করে শপিং আইটেম যোগ/বিয়োগ করার প্রোগ্রাম বানান।</p>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">৩. ডুপ্লিকেট রিমুভার:</h4>
                <p className="text-sm">একটি লিস্ট থেকে সেট ব্যবহার করে ডুপ্লিকেট এলিমেন্ট সরান।</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/programming/control-structures">
              <ArrowLeft className="mr-2 h-4 w-4" />
              কন্ট্রোল স্ট্রাকচার
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/programming/functions-modules">
              ফাংশন এবং মডিউল
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
