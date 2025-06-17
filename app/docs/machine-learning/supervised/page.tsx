import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Target, TrendingUp } from "lucide-react"

export default function SupervisedLearningPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            মেশিন লার্নিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">সুপারভাইজড লার্নিং</h1>
          <p className="text-xl text-muted-foreground">
            সুপারভাইজড লার্নিং হলো ML এর সবচেয়ে সাধারণ ধরন যেখানে আমরা লেবেলযুক্ত ডেটা ব্যবহার করে মডেল ট্রেন করি।
          </p>
        </div>

        {/* What is Supervised Learning */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">সুপারভাইজড লার্নিং কী?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-3">
            <p>
              সুপারভাইজড লার্নিংয়ে আমাদের কাছে <strong>ইনপুট (X)</strong> এবং <strong>আউটপুট (Y)</strong> উভয়ই থাকে। মডেল এই সম্পর্ক
              শিখে নতুন ডেটার জন্য প্রেডিকশন করে।
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">উদাহরণ:</h4>
              <ul className="space-y-1">
                <li>
                  • <strong>ইনপুট:</strong> বাড়ির আকার, অবস্থান, রুমের সংখ্যা
                </li>
                <li>
                  • <strong>আউটপুট:</strong> বাড়ির দাম
                </li>
                <li>
                  • <strong>লক্ষ্য:</strong> নতুন বাড়ির দাম প্রেডিক্ট করা
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Types of Supervised Learning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-600">রিগ্রেশন (Regression)</CardTitle>
              </div>
              <CardDescription>ধারাবাহিক সংখ্যার প্রেডিকশন</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">বৈশিষ্ট্য:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• আউটপুট ধারাবাহিক সংখ্যা</li>
                  <li>• যেকোনো রিয়েল ভ্যালু হতে পারে</li>
                  <li>• পরিমাণ প্রেডিক্ট করে</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">উদাহরণ:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• বাড়ির দাম প্রেডিকশন</li>
                  <li>• স্টক প্রাইস ফোরকাস্ট</li>
                  <li>• তাপমাত্রা প্রেডিকশন</li>
                  <li>• সেলস ফোরকাস্টিং</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-600">ক্লাসিফিকেশন (Classification)</CardTitle>
              </div>
              <CardDescription>বিভিন্ন শ্রেণীতে ভাগ করা</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">বৈশিষ্ট্য:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• আউটপুট নির্দিষ্ট ক্যাটেগরি</li>
                  <li>• সীমিত সংখ্যক ক্লাস</li>
                  <li>• শ্রেণী নির্ধারণ করে</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">উদাহরণ:</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• ইমেইল স্প্যাম ডিটেকশন</li>
                  <li>• ইমেজ রিকগনিশন</li>
                  <li>• মেডিকেল ডায়াগনোসিস</li>
                  <li>• সেন্টিমেন্ট অ্যানালাইসিস</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regression Algorithms */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">রিগ্রেশন অ্যালগরিদম</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Linear Regression */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. লিনিয়ার রিগ্রেশন</h4>
              <p>সবচেয়ে সহজ এবং জনপ্রিয় রিগ্রেশন অ্যালগরিদম। একটি সরল রেখা দিয়ে ডেটার সম্পর্ক প্রকাশ করে।</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">সূত্র:</h5>
                <p className="font-mono text-green-700">y = mx + b</p>
                <p className="text-green-700 text-sm mt-2">যেখানে m = স্লোপ, b = ইন্টারসেপ্ট</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">সুবিধা:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• সহজ এবং দ্রুত</li>
                    <li>• ব্যাখ্যা করা সহজ</li>
                    <li>• কম ডেটাতেও কাজ করে</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">অসুবিধা:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• শুধু লিনিয়ার সম্পর্ক</li>
                    <li>• আউটলায়ারে প্রভাবিত</li>
                    <li>• জটিল প্যাটার্ন ধরতে পারে না</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python কোড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np

# ডেটা প্রস্তুতি
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# ট্রেন-টেস্ট স্প্লিট
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# মডেল তৈরি এবং ট্রেনিং
model = LinearRegression()
model.fit(X_train, y_train)

# প্রেডিকশন
predictions = model.predict(X_test)
print(f"Predictions: {predictions}")`}
                </pre>
              </div>
            </div>

            {/* Polynomial Regression */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. পলিনোমিয়াল রিগ্রেশন</h4>
              <p>লিনিয়ার রিগ্রেশনের উন্নত রূপ যা বক্ররেখা ফিট করতে পারে।</p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">সূত্র:</h5>
                <p className="font-mono text-blue-700">y = a₀ + a₁x + a₂x² + a₃x³ + ...</p>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-yellow-700">
                  <strong>ব্যবহার:</strong> যখন ডেটাতে নন-লিনিয়ার প্যাটার্ন থাকে কিন্তু একটি মসৃণ কার্ভ দিয়ে প্রকাশ করা যায়।
                </p>
              </div>
            </div>

            {/* Ridge and Lasso */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. রিজ এবং ল্যাসো রিগ্রেশন</h4>
              <p>ওভারফিটিং প্রতিরোধের জন্য রেগুলারাইজেশন যুক্ত লিনিয়ার রিগ্রেশন।</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-red-800 mb-2">রিজ রিগ্রেশন (L2):</h5>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• কোয়েফিশিয়েন্ট ছোট করে</li>
                    <li>• সব ফিচার রাখে</li>
                    <li>• মাল্টিকলিনিয়ারিটি হ্যান্ডল করে</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-800 mb-2">ল্যাসো রিগ্রেশন (L1):</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• অপ্রয়োজনীয় ফিচার শূন্য করে</li>
                    <li>• অটোমেটিক ফিচার সিলেকশন</li>
                    <li>• স্পার্স মডেল তৈরি করে</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Classification Algorithms */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">ক্লাসিফিকেশন অ্যালগরিদম</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Logistic Regression */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. লজিস্টিক রিগ্রেশন</h4>
              <p>ক্লাসিফিকেশনের জন্য সবচেয়ে জনপ্রিয় অ্যালগরিদম। সিগময়েড ফাংশন ব্যবহার করে।</p>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">সিগময়েড ফাংশন:</h5>
                <p className="font-mono text-purple-700">σ(z) = 1 / (1 + e^(-z))</p>
                <p className="text-purple-700 text-sm mt-2">আউটপুট সবসময় 0 এবং 1 এর মধ্যে থাকে</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python কোড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
from sklearn.metrics import accuracy_score

# ডেটা তৈরি
X, y = make_classification(n_samples=1000, n_features=2, 
                          n_redundant=0, n_informative=2)

# ট্রেন-টেস্ট স্প্লিট
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# মডেল ট্রেনিং
model = LogisticRegression()
model.fit(X_train, y_train)

# প্রেডিকশন এবং অ্যাকুরেসি
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")`}
                </pre>
              </div>
            </div>

            {/* Decision Tree */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. ডিসিশন ট্রি</h4>
              <p>একটি ট্রি স্ট্রাকচার যা if-else নিয়মের মাধ্যমে সিদ্ধান্ত নেয়।</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">কিভাবে কাজ করে:</h5>
                <ol className="text-sm text-green-700 space-y-1">
                  <li>1. সবচেয়ে ভাল ফিচার দিয়ে ডেটা ভাগ করে</li>
                  <li>2. প্রতিটি শাখায় একই প্রক্রিয়া চালায়</li>
                  <li>3. যতক্ষণ না পিউর নোড পায়</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">সুবিধা:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• সহজে বোঝা যায়</li>
                    <li>• ফিচার স্কেলিং প্রয়োজন নেই</li>
                    <li>• নন-লিনিয়ার প্যাটার্ন ধরে</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">অসুবিধা:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• ওভারফিটিং হয়</li>
                    <li>• ছোট ডেটা পরিবর্তনে অস্থির</li>
                    <li>• বায়াসড হতে পারে</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Random Forest */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. র‍্যান্ডম ফরেস্ট</h4>
              <p>অনেকগুলো ডিসিশন ট্রির সমন্বয়। এনসেম্বল মেথডের একটি উদাহরণ।</p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">কিভাবে কাজ করে:</h5>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. অনেকগুলো ডিসিশন ট্রি তৈরি করে</li>
                  <li>2. প্রতিটি ট্রি র‍্যান্ডম ডেটা নিয়ে ট্রেন হয়</li>
                  <li>3. সবার ভোটে চূড়ান্ত সিদ্ধান্ত</li>
                </ol>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-yellow-700">
                  <strong>সুবিধা:</strong> ওভারফিটিং কম, ভাল অ্যাকুরেসি, ফিচার ইম্পর্ট্যান্স দেয়
                </p>
              </div>
            </div>

            {/* SVM */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৪. সাপোর্ট ভেক্টর মেশিন (SVM)</h4>
              <p>ক্লাসগুলোর মধ্যে সর্বোচ্চ মার্জিন দিয়ে বিভাজন রেখা তৈরি করে।</p>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">মূল ধারণা:</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• সাপোর্ট ভেক্টর খুঁজে বের করে</li>
                  <li>• সর্বোচ্চ মার্জিন তৈরি করে</li>
                  <li>• কার্নেল ট্রিক ব্যবহার করে</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">কার্নেল প্রকার:</h5>
                <ul className="text-sm space-y-1">
                  <li>
                    • <strong>লিনিয়ার:</strong> সরল রেখা
                  </li>
                  <li>
                    • <strong>পলিনোমিয়াল:</strong> বক্ররেখা
                  </li>
                  <li>
                    • <strong>RBF:</strong> জটিল প্যাটার্ন
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Selection Guide */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800">কোন অ্যালগরিদম কখন ব্যবহার করবেন?</CardTitle>
          </CardHeader>
          <CardContent className="text-yellow-700 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold">ছোট ডেটাসেট ({"<"} 1000 samples):</h4>
                <ul className="text-sm space-y-1">
                  <li>• লিনিয়ার/লজিস্টিক রিগ্রেশন</li>
                  <li>• SVM</li>
                  <li>• Naive Bayes</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">বড় ডেটাসেট ({">"} 10000 samples):</h4>
                <ul className="text-sm space-y-1">
                  <li>• র‍্যান্ডম ফরেস্ট</li>
                  <li>• গ্রেডিয়েন্ট বুস্টিং</li>
                  <li>• নিউরাল নেটওয়ার্ক</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">ব্যাখ্যাযোগ্যতা প্রয়োজন:</h4>
                <ul className="text-sm space-y-1">
                  <li>• লিনিয়ার রিগ্রেশন</li>
                  <li>• ডিসিশন ট্রি</li>
                  <li>• লজিস্টিক রিগ্রেশন</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">সর্বোচ্চ অ্যাকুরেসি চাই:</h4>
                <ul className="text-sm space-y-1">
                  <li>• র‍্যান্ডম ফরেস্ট</li>
                  <li>• XGBoost</li>
                  <li>• এনসেম্বল মেথড</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/machine-learning">
              <ArrowLeft className="mr-2 h-4 w-4" />
              মেশিন লার্নিং মূল পাতা
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/machine-learning/unsupervised">
              আনসুপারভাইজড লার্নিং
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
