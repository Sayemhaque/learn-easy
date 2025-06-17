import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Users, TrendingDown } from "lucide-react"

export default function UnsupervisedLearningPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            মেশিন লার্নিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">আনসুপারভাইজড লার্নিং</h1>
          <p className="text-xl text-muted-foreground">
            আনসুপারভাইজড লার্নিংয়ে কোন লেবেল থাকে না। ডেটার মধ্যে লুকানো প্যাটার্ন এবং স্ট্রাকচার খুঁজে বের করা হয়।
          </p>
        </div>

        {/* What is Unsupervised Learning */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">আনসুপারভাইজড লার্নিং কী?</CardTitle>
          </CardHeader>
          <CardContent className="text-green-700 space-y-3">
            <p>
              আনসুপারভাইজড লার্নিংয়ে শুধু <strong>ইনপুট ডেটা (X)</strong> থাকে, কোন <strong>টার্গেট (Y)</strong> থাকে না। অ্যালগরিদম
              নিজেই ডেটার মধ্যে প্যাটার্ন খুঁজে বের করে।
            </p>
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">উদাহরণ:</h4>
              <ul className="space-y-1">
                <li>
                  • <strong>ইনপুট:</strong> কাস্টমারদের কেনাকাটার তথ্য
                </li>
                <li>
                  • <strong>লক্ষ্য:</strong> কাস্টমারদের গ্রুপে ভাগ করা
                </li>
                <li>
                  • <strong>ফলাফল:</strong> বিভিন্ন ধরনের কাস্টমার সেগমেন্ট
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Types of Unsupervised Learning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-600">ক্লাস্টারিং</CardTitle>
              </div>
              <CardDescription>ডেটাকে সমজাতীয় গ্রুপে ভাগ করা</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">বৈশিষ্ট্য:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• একই গ্রুপের ডেটা একই রকম</li>
                  <li>• ভিন্ন গ্রুপের ডেটা ভিন্ন রকম</li>
                  <li>• গ্রুপের সংখ্যা আগে থেকে জানা বা অজানা</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">ব্যবহার:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• কাস্টমার সেগমেন্টেশন</li>
                  <li>• মার্কেট রিসার্চ</li>
                  <li>• ইমেজ সেগমেন্টেশন</li>
                  <li>• জিন সিকোয়েন্সিং</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TrendingDown className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-600">ডাইমেনশনালিটি রিডাকশন</CardTitle>
              </div>
              <CardDescription>ডেটার ডাইমেনশন কমানো</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">বৈশিষ্ট্য:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• গুরুত্বপূর্ণ ফিচার রাখা</li>
                  <li>• অপ্রয়োজনীয় ফিচার বাদ দেওয়া</li>
                  <li>• ডেটার মূল তথ্য সংরক্ষণ</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">ব্যবহার:</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• ডেটা ভিজুয়ালাইজেশন</li>
                  <li>• নয়েজ রিডাকশন</li>
                  <li>• স্টোরেজ সাশ্রয়</li>
                  <li>• কম্পিউটেশন দ্রুততা</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Clustering Algorithms */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">ক্লাস্টারিং অ্যালগরিদম</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* K-Means */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. K-Means ক্লাস্টারিং</h4>
              <p>সবচেয়ে জনপ্রিয় ক্লাস্টারিং অ্যালগরিদম। ডেটাকে K সংখ্যক গ্রুপে ভাগ করে।</p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">কিভাবে কাজ করে:</h5>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. K সংখ্যক সেন্ট্রয়েড র‍্যান্ডমলি রাখা</li>
                  <li>2. প্রতিটি পয়েন্টকে নিকটতম সেন্ট্রয়েডে অ্যাসাইন করা</li>
                  <li>3. সেন্ট্রয়েড আপডেট করা</li>
                  <li>4. কনভার্জেন্স পর্যন্ত পুনরাবৃত্তি</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">সুবিধা:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• সহজ এবং দ্রুত</li>
                    <li>• বড় ডেটাসেটে কাজ করে</li>
                    <li>• গোলাকার ক্লাস্টার ভাল করে</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">অসুবিধা:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• K এর মান আগে থেকে জানতে হয়</li>
                    <li>• আউটলায়ারে প্রভাবিত</li>
                    <li>• অসমান আকারের ক্লাস্টার খারাপ</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python কোড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# ডেটা তৈরি
X, _ = make_blobs(n_samples=300, centers=4, n_features=2, 
                  random_state=42, cluster_std=0.60)

# K-Means মডেল
kmeans = KMeans(n_clusters=4, random_state=42)
clusters = kmeans.fit_predict(X)

# ভিজুয়ালাইজেশন
plt.scatter(X[:, 0], X[:, 1], c=clusters, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0], 
           kmeans.cluster_centers_[:, 1], 
           c='red', marker='x', s=200)
plt.title('K-Means Clustering')
plt.show()`}
                </pre>
              </div>
            </div>

            {/* Hierarchical Clustering */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. হায়ারার্কিক্যাল ক্লাস্টারিং</h4>
              <p>ক্লাস্টারের একটি ট্রি স্ট্রাকচার তৈরি করে। ডেন্ড্রোগ্রাম দিয়ে প্রকাশ করা হয়।</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">দুই ধরনের পদ্ধতি:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-semibold text-green-700">Agglomerative (Bottom-up):</h6>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• প্রতিটি পয়েন্ট আলাদা ক্লাস্টার</li>
                      <li>• নিকটতম ক্লাস্টার মার্জ করা</li>
                      <li>• একটি ক্লাস্টার পর্যন্ত চালানো</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-700">Divisive (Top-down):</h6>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• সব পয়েন্ট একটি ক্লাস্টারে</li>
                      <li>• ক্লাস্টার ভাগ করা</li>
                      <li>• আলাদা পয়েন্ট পর্যন্ত চালানো</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-yellow-700">
                  <strong>সুবিধা:</strong> K এর মান আগে থেকে জানতে হয় না, ডেন্ড্রোগ্রাম দিয়ে ভিজুয়ালাইজ করা যায়
                </p>
              </div>
            </div>

            {/* DBSCAN */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. DBSCAN</h4>
              <p>ডেনসিটি-বেসড ক্লাস্টারিং। আউটলায়ার ডিটেকশনেও ব্যবহার হয়।</p>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">মূল ধারণা:</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• ঘন এলাকায় ক্লাস্টার তৈরি</li>
                  <li>• কম ঘনত্বের পয়েন্ট আউটলায়ার</li>
                  <li>• যেকোনো আকারের ক্লাস্টার খুঁজে পায়</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">প্যারামিটার:</h5>
                <ul className="text-sm space-y-1">
                  <li>
                    • <strong>eps:</strong> নেইবারহুডের রেডিয়াস
                  </li>
                  <li>
                    • <strong>min_samples:</strong> কোর পয়েন্ট হওয়ার জন্য মিনিমাম পয়েন্ট
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dimensionality Reduction */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">ডাইমেনশনালিটি রিডাকশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* PCA */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. প্রিন্সিপাল কম্পোনেন্ট অ্যানালাইসিস (PCA)</h4>
              <p>সবচেয়ে জনপ্রিয় ডাইমেনশনালিটি রিডাকশন টেকনিক। ভেরিয়েন্স সর্বোচ্চ রাখে।</p>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">কিভাবে কাজ করে:</h5>
                <ol className="text-sm text-purple-700 space-y-1">
                  <li>1. ডেটা স্ট্যান্ডার্ডাইজ করা</li>
                  <li>2. কোভেরিয়েন্স ম্যাট্রিক্স হিসাব</li>
                  <li>3. আইগেনভেক্টর এবং আইগেনভ্যালু বের করা</li>
                  <li>4. প্রিন্সিপাল কম্পোনেন্ট সিলেক্ট করা</li>
                </ol>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python কোড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# ডেটা লোড
iris = load_iris()
X = iris.data

# স্ট্যান্ডার্ডাইজেশন
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

# ভেরিয়েন্স এক্সপ্লেইনড
print(f"Explained variance ratio: {pca.explained_variance_ratio_}")
print(f"Total variance explained: {sum(pca.explained_variance_ratio_):.2f}")

# ভিজুয়ালাইজেশন
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=iris.target)
plt.xlabel('First Principal Component')
plt.ylabel('Second Principal Component')
plt.title('PCA of Iris Dataset')
plt.show()`}
                </pre>
              </div>
            </div>

            {/* t-SNE */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. t-SNE</h4>
              <p>নন-লিনিয়ার ডাইমেনশনালিটি রিডাকশন। ভিজুয়ালাইজেশনের জন্য খুবই জনপ্রিয়।</p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">বৈশিষ্ট্য:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• লোকাল স্ট্রাকচার সংরক্ষণ করে</li>
                  <li>• ক্লাস্টার ভাল দেখায়</li>
                  <li>• সাধারণত 2D বা 3D এ রিডিউস করে</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-yellow-700">
                  <strong>সতর্কতা:</strong> t-SNE স্টোকাস্টিক, তাই প্রতিবার ভিন্ন ফলাফল দিতে পারে
                </p>
              </div>
            </div>

            {/* LDA */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. লিনিয়ার ডিসক্রিমিন্যান্ট অ্যানালাইসিস (LDA)</h4>
              <p>সুপারভাইজড ডাইমেনশনালিটি রিডাকশন। ক্লাস সেপারেশন সর্বোচ্চ করে।</p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">PCA vs LDA:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-semibold text-green-700">PCA:</h6>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• আনসুপারভাইজড</li>
                      <li>• ভেরিয়েন্স সর্বোচ্চ</li>
                      <li>• লেবেল ব্যবহার করে না</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-700">LDA:</h6>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• সুপারভাইজড</li>
                      <li>• ক্লাস সেপারেশন সর্বোচ্চ</li>
                      <li>• লেবেল ব্যবহার করে</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Association Rule Mining */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">অ্যাসোসিয়েশন রুল মাইনিং</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ডেটার মধ্যে সম্পর্ক এবং প্যাটার্ন খুঁজে বের করা। মার্কেট বাস্কেট অ্যানালাইসিসে ব্যবহার হয়।</p>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">উদাহরণ:</h4>
              <p className="text-orange-700">"যারা রুটি কেনে তারা ৮০% সময় মাখনও কেনে" - এই ধরনের রুল খুঁজে বের করা।</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Support:</h5>
                <p className="text-sm">কতবার একসাথে ঘটেছে</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Confidence:</h5>
                <p className="text-sm">শর্তসাপেক্ষ সম্ভাব্যতা</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Lift:</h5>
                <p className="text-sm">সম্পর্কের শক্তি</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Anomaly Detection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">অ্যানোমালি ডিটেকশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>স্বাভাবিক প্যাটার্ন থেকে ভিন্ন ডেটা পয়েন্ট খুঁজে বের করা।</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">ব্যবহার:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• ফ্রড ডিটেকশন</li>
                  <li>• নেটওয়ার্ক সিকিউরিটি</li>
                  <li>• কোয়ালিটি কন্ট্রোল</li>
                  <li>• হেলথ মনিটরিং</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">টেকনিক:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Isolation Forest</li>
                  <li>• One-Class SVM</li>
                  <li>• Local Outlier Factor</li>
                  <li>• Autoencoder</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/machine-learning/supervised">
              <ArrowLeft className="mr-2 h-4 w-4" />
              সুপারভাইজড লার্নিং
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/machine-learning/evaluation">
              মডেল ইভ্যালুয়েশন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
