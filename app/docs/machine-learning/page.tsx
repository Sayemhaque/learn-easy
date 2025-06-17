import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, Target, Users, BarChart3, Zap, Settings } from "lucide-react"

export default function MachineLearningPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            মেশিন লার্নিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">মেশিন লার্নিং</h1>
          <p className="text-xl text-muted-foreground">
            মেশিন লার্নিং হলো কৃত্রিম বুদ্ধিমত্তার একটি শাখা যেখানে কম্পিউটার ডেটা থেকে শিখে এবং প্যাটার্ন চিহ্নিত করে।
          </p>
        </div>

        {/* Overview */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">মেশিন লার্নিং কেন গুরুত্বপূর্ণ?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-3">
            <p>মেশিন লার্নিং আমাদের চারপাশের জগতকে পরিবর্তন করে দিচ্ছে। এটি ব্যবহার করে আমরা:</p>
            <ul className="space-y-2 ml-4">
              <li>
                • <strong>প্রেডিকশন:</strong> ভবিষ্যতের ঘটনা পূর্বাভাস দেওয়া
              </li>
              <li>
                • <strong>ক্লাসিফিকেশন:</strong> ডেটাকে বিভিন্ন শ্রেণীতে ভাগ করা
              </li>
              <li>
                • <strong>প্যাটার্ন রিকগনিশন:</strong> জটিল প্যাটার্ন খুঁজে বের করা
              </li>
              <li>
                • <strong>অটোমেশন:</strong> স্বয়ংক্রিয় সিদ্ধান্ত গ্রহণ
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Main Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-600">সুপারভাইজড লার্নিং</CardTitle>
              </div>
              <CardDescription>লেবেলযুক্ত ডেটা থেকে শেখা</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• লিনিয়ার রিগ্রেশন</li>
                  <li>• লজিস্টিক রিগ্রেশন</li>
                  <li>• ডিসিশন ট্রি</li>
                  <li>• র‍্যান্ডম ফরেস্ট</li>
                  <li>• সাপোর্ট ভেক্টর মেশিন (SVM)</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>ব্যবহার:</strong> ইমেইল স্প্যাম ডিটেকশন, হাউস প্রাইস প্রেডিকশন, মেডিকেল ডায়াগনোসিস
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/machine-learning/supervised">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-600">আনসুপারভাইজড লার্নিং</CardTitle>
              </div>
              <CardDescription>লেবেল ছাড়া ডেটা থেকে প্যাটার্ন খোঁজা</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• K-Means ক্লাস্টারিং</li>
                  <li>• হায়ারার্কিক্যাল ক্লাস্টারিং</li>
                  <li>• প্রিন্সিপাল কম্পোনেন্ট অ্যানালাইসিস (PCA)</li>
                  <li>• অ্যাসোসিয়েশন রুল মাইনিং</li>
                  <li>• অ্যানোমালি ডিটেকশন</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>ব্যবহার:</strong> কাস্টমার সেগমেন্টেশন, রেকমেন্ডেশন সিস্টেম, ফ্রড ডিটেকশন
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/machine-learning/unsupervised">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-600">রিইনফোর্সমেন্ট লার্নিং</CardTitle>
              </div>
              <CardDescription>পুরস্কার এবং শাস্তির মাধ্যমে শেখা</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Q-Learning</li>
                  <li>• পলিসি গ্রেডিয়েন্ট</li>
                  <li>• অ্যাক্টর-ক্রিটিক মেথড</li>
                  <li>• ডিপ Q-নেটওয়ার্ক (DQN)</li>
                  <li>• মাল্টি-আর্মড ব্যান্ডিট</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-700">
                  <strong>ব্যবহার:</strong> গেম প্লেয়িং AI, রোবোটিক্স, অটোনোমাস ভেহিকেল, ট্রেডিং বট
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/machine-learning/reinforcement">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-orange-600">মডেল ইভ্যালুয়েশন</CardTitle>
              </div>
              <CardDescription>মডেলের পারফরম্যান্স পরিমাপ এবং উন্নতি</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ট্রেইন-ভ্যালিডেশন-টেস্ট স্প্লিট</li>
                  <li>• ক্রস ভ্যালিডেশন</li>
                  <li>• কনফিউশন ম্যাট্রিক্স</li>
                  <li>• প্রিসিশন, রিকল, F1-স্কোর</li>
                  <li>• ROC কার্ভ এবং AUC</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>গুরুত্ব:</strong> মডেলের সঠিকতা যাচাই, ওভারফিটিং প্রতিরোধ, বেস্ট মডেল সিলেকশন
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/machine-learning/evaluation">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-red-600" />
                <CardTitle className="text-red-600">ফিচার ইঞ্জিনিয়ারিং</CardTitle>
              </div>
              <CardDescription>ডেটা প্রিপ্রসেসিং এবং ফিচার তৈরি</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ডেটা ক্লিনিং</li>
                  <li>• মিসিং ভ্যালু হ্যান্ডলিং</li>
                  <li>• ফিচার স্কেলিং</li>
                  <li>• এনকোডিং (ওয়ান-হট, লেবেল)</li>
                  <li>• ফিচার সিলেকশন</li>
                </ul>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="text-sm text-red-700">
                  <strong>গুরুত্ব:</strong> ভাল ফিচার = ভাল মডেল। ডেটার ৮০% কাজ এখানেই হয়।
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/machine-learning/feature-engineering">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Settings className="h-6 w-6 text-teal-600" />
                <CardTitle className="text-teal-600">হাইপারপ্যারামিটার টিউনিং</CardTitle>
              </div>
              <CardDescription>মডেলের পারফরম্যান্স অপটিমাইজেশন</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">মূল বিষয়সমূহ:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• গ্রিড সার্চ</li>
                  <li>• র‍্যান্ডম সার্চ</li>
                  <li>• বেইজিয়ান অপটিমাইজেশন</li>
                  <li>• অটোমেটেড ML (AutoML)</li>
                  <li>• এনসেম্বল মেথড</li>
                </ul>
              </div>
              <div className="bg-teal-50 p-3 rounded-lg">
                <p className="text-sm text-teal-700">
                  <strong>লক্ষ্য:</strong> সর্বোচ্চ পারফরম্যান্সের জন্য মডেলের প্যারামিটার সেট করা
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/machine-learning/hyperparameter-tuning">বিস্তারিত পড়ুন</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* ML Workflow */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">মেশিন লার্নিং ওয়ার্কফ্লো</CardTitle>
          </CardHeader>
          <CardContent className="text-green-700 space-y-4">
            <p>একটি সম্পূর্ণ ML প্রজেক্টের ধাপসমূহ:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ১
                  </div>
                  <span className="font-semibold">সমস্যা সংজ্ঞায়ন</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ২
                  </div>
                  <span className="font-semibold">ডেটা সংগ্রহ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৩
                  </div>
                  <span className="font-semibold">ডেটা এক্সপ্লোরেশন (EDA)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৪
                  </div>
                  <span className="font-semibold">ডেটা প্রিপ্রসেসিং</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৫
                  </div>
                  <span className="font-semibold">মডেল সিলেকশন</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৬
                  </div>
                  <span className="font-semibold">মডেল ট্রেনিং</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৭
                  </div>
                  <span className="font-semibold">মডেল ইভ্যালুয়েশন</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৮
                  </div>
                  <span className="font-semibold">ডিপ্লয়মেন্ট</span>
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
                  <li>• গণিতের ভিত্তি (লিনিয়ার অ্যালজেব্রা, পরিসংখ্যান)</li>
                  <li>• Python প্রোগ্রামিং</li>
                  <li>• NumPy, Pandas লাইব্রেরি</li>
                  <li>• ডেটা সায়েন্সের মৌলিক ধারণা</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">সহায়ক</h4>
                <ul className="space-y-1 text-sm">
                  <li>• ক্যালকুলাস এবং অপটিমাইজেশন</li>
                  <li>• SQL এবং ডেটাবেস</li>
                  <li>• ক্লাউড প্ল্যাটফর্ম (AWS, GCP)</li>
                  <li>• Git এবং ভার্সন কন্ট্রোল</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Resources */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">শেখার রিসোর্স</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">বই</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• "Hands-On Machine Learning" - Aurélien Géron</li>
                  <li>• "The Elements of Statistical Learning" - Hastie, Tibshirani</li>
                  <li>• "Pattern Recognition and Machine Learning" - Bishop</li>
                  <li>• "Introduction to Statistical Learning" - James, Witten</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Python লাইব্রেরি</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Scikit-learn - সাধারণ ML অ্যালগরিদম</li>
                  <li>• Pandas - ডেটা ম্যানিপুলেশন</li>
                  <li>• Matplotlib/Seaborn - ভিজুয়ালাইজেশন</li>
                  <li>• XGBoost/LightGBM - গ্রেডিয়েন্ট বুস্টিং</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Common Algorithms */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800">জনপ্রিয় অ্যালগরিদম</CardTitle>
          </CardHeader>
          <CardContent className="text-yellow-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">রিগ্রেশন:</h4>
                <ul className="text-sm space-y-1">
                  <li>• লিনিয়ার রিগ্রেশন</li>
                  <li>• পলিনোমিয়াল রিগ্রেশন</li>
                  <li>• রিজ/ল্যাসো রিগ্রেশন</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">ক্লাসিফিকেশন:</h4>
                <ul className="text-sm space-y-1">
                  <li>• লজিস্টিক রিগ্রেশন</li>
                  <li>• র‍্যান্ডম ফরেস্ট</li>
                  <li>• SVM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">ক্লাস্টারিং:</h4>
                <ul className="text-sm space-y-1">
                  <li>• K-Means</li>
                  <li>• DBSCAN</li>
                  <li>• হায়ারার্কিক্যাল</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">শেখার ক্রম</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-700">
            <div className="space-y-3">
              <p className="font-semibold">সুপারিশকৃত ক্রম:</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ১
                  </div>
                  <span>সুপারভাইজড লার্নিং (রিগ্রেশন এবং ক্লাসিফিকেশন)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ২
                  </div>
                  <span>মডেল ইভ্যালুয়েশন এবং ভ্যালিডেশন</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৩
                  </div>
                  <span>ফিচার ইঞ্জিনিয়ারিং এবং সিলেকশন</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৪
                  </div>
                  <span>আনসুপারভাইজড লার্নিং</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৫
                  </div>
                  <span>হাইপারপ্যারামিটার টিউনিং</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ৬
                  </div>
                  <span>রিইনফোর্সমেন্ট লার্নিং (অ্যাডভান্সড)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/machine-learning/supervised">
              সুপারভাইজড লার্নিং দিয়ে শুরু করুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/deep-learning">ডিপ লার্নিং শিখুন</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
