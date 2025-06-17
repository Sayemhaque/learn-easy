import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function ModelEvaluationPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            মেশিন লার্নিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">মডেল ইভ্যালুয়েশন</h1>
          <p className="text-xl text-muted-foreground">
            মডেলের পারফরম্যান্স সঠিকভাবে পরিমাপ করা ML এর সবচেয়ে গুরুত্বপূর্ণ অংশ। ভুল ইভ্যালুয়েশন মানে ভুল সিদ্ধান্ত।
          </p>
        </div>

        {/* Why Model Evaluation */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">কেন মডেল ইভ্যালুয়েশন গুরুত্বপূর্ণ?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-3">
            <ul className="space-y-2 ml-4">
              <li>
                • <strong>পারফরম্যান্স যাচাই:</strong> মডেল কতটা ভাল কাজ করছে
              </li>
              <li>
                • <strong>মডেল তুলনা:</strong> কোন মডেল সবচেয়ে ভাল
              </li>
              <li>
                • <strong>ওভারফিটিং ডিটেকশন:</strong> মডেল ট্রেনিং ডেটায় মুখস্থ করেছে কিনা
              </li>
              <li>
                • <strong>জেনারালাইজেশন:</strong> নতুন ডেটায় কেমন কাজ করবে
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Train-Validation-Test Split */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">ডেটা স্প্লিটিং</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>মডেল ইভ্যালুয়েশনের প্রথম ধাপ হলো ডেটাকে সঠিকভাবে ভাগ করা।</p>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">তিনটি সেট:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-semibold text-green-700">ট্রেনিং সেট (60-70%)</h5>
                  <p className="text-sm text-green-600 mt-1">মডেল শেখানোর জন্য</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-semibold text-blue-700">ভ্যালিডেশন সেট (15-20%)</h5>
                  <p className="text-sm text-blue-600 mt-1">হাইপারপ্যারামিটার টিউনিং</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-semibold text-purple-700">টেস্ট সেট (15-20%)</h5>
                  <p className="text-sm text-purple-600 mt-1">চূড়ান্ত পারফরম্যান্স যাচাই</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Python কোড:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`from sklearn.model_selection import train_test_split

# প্রথমে ট্রেন এবং টেস্ট আলাদা করা
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# তারপর ট্রেন থেকে ভ্যালিডেশন আলাদা করা
X_train, X_val, y_train, y_val = train_test_split(
    X_train, y_train, test_size=0.25, random_state=42, stratify=y_train
)

print(f"Train: {len(X_train)}, Val: {len(X_val)}, Test: {len(X_test)}")`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Cross Validation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">ক্রস ভ্যালিডেশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ছোট ডেটাসেটের জন্য আরও নির্ভরযোগ্য ইভ্যালুয়েশন পদ্ধতি।</p>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">K-Fold Cross Validation:</h4>
              <ol className="text-sm text-purple-700 space-y-1">
                <li>1. ডেটাকে K টি ভাগে ভাগ করা</li>
                <li>2. একটি ভাগ টেস্ট, বাকি ট্রেনিং হিসেবে ব্যবহার</li>
                <li>3. K বার পুনরাবৃত্তি করা</li>
                <li>4. সব ফলাফলের গড় নেওয়া</li>
              </ol>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Python কোড:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`from sklearn.model_selection import cross_val_score, KFold
from sklearn.linear_model import LogisticRegression

# মডেল তৈরি
model = LogisticRegression()

# 5-Fold Cross Validation
kfold = KFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=kfold, scoring='accuracy')

print(f"CV Scores: {scores}")
print(f"Mean CV Score: {scores.mean():.3f} (+/- {scores.std() * 2:.3f})")`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Classification Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">ক্লাসিফিকেশন মেট্রিক্স</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Confusion Matrix */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">কনফিউশন ম্যাট্রিক্স</h4>
              <p>ক্লাসিফিকেশন মডেলের পারফরম্যান্স বোঝার সবচেয়ে ভাল উপায়।</p>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-2">২×২ ম্যাট্রিক্স (বাইনারি ক্লাসিফিকেশন):</h5>
                <div className="grid grid-cols-2 gap-2 max-w-md">
                  <div className="bg-green-100 p-2 text-center text-sm font-semibold">True Positive (TP)</div>
                  <div className="bg-red-100 p-2 text-center text-sm font-semibold">False Positive (FP)</div>
                  <div className="bg-red-100 p-2 text-center text-sm font-semibold">False Negative (FN)</div>
                  <div className="bg-green-100 p-2 text-center text-sm font-semibold">True Negative (TN)</div>
                </div>
              </div>
            </div>

            {/* Accuracy, Precision, Recall */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">প্রধান মেট্রিক্স</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">অ্যাকুরেসি (Accuracy):</h5>
                  <p className="font-mono text-blue-700 text-sm mb-2">(TP + TN) / (TP + TN + FP + FN)</p>
                  <p className="text-blue-700 text-sm">সঠিক প্রেডিকশনের অনুপাত</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">প্রিসিশন (Precision):</h5>
                  <p className="font-mono text-green-700 text-sm mb-2">TP / (TP + FP)</p>
                  <p className="text-green-700 text-sm">পজিটিভ প্রেডিকশনের মধ্যে কতটা সঠিক</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">রিকল (Recall/Sensitivity):</h5>
                  <p className="font-mono text-purple-700 text-sm mb-2">TP / (TP + FN)</p>
                  <p className="text-purple-700 text-sm">আসল পজিটিভের মধ্যে কতটা ধরতে পেরেছে</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-800 mb-2">F1-স্কোর:</h5>
                  <p className="font-mono text-yellow-700 text-sm mb-2">
                    2 × (Precision × Recall) / (Precision + Recall)
                  </p>
                  <p className="text-yellow-700 text-sm">প্রিসিশন এবং রিকলের হারমোনিক মিন</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Python কোড:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.metrics import confusion_matrix, classification_report

# প্রেডিকশন
y_pred = model.predict(X_test)

# মেট্রিক্স হিসাব
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, average='weighted')
recall = recall_score(y_test, y_pred, average='weighted')
f1 = f1_score(y_test, y_pred, average='weighted')

print(f"Accuracy: {accuracy:.3f}")
print(f"Precision: {precision:.3f}")
print(f"Recall: {recall:.3f}")
print(f"F1-Score: {f1:.3f}")

# কনফিউশন ম্যাট্রিক্স
cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:")
print(cm)

# বিস্তারিত রিপোর্ট
print("Classification Report:")
print(classification_report(y_test, y_pred))`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* ROC and AUC */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">ROC কার্ভ এবং AUC</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>বাইনারি ক্লাসিফিকেশনের জন্য খুবই গুরুত্বপূর্ণ মেট্রিক।</p>

            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">ROC কার্ভ:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• X-axis: False Positive Rate (FPR)</li>
                <li>• Y-axis: True Positive Rate (TPR/Recall)</li>
                <li>• বিভিন্ন threshold এ মডেলের পারফরম্যান্স</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">AUC স্কোর ব্যাখ্যা:</h5>
                <ul className="text-sm space-y-1">
                  <li>• 1.0 = পারফেক্ট মডেল</li>
                  <li>• 0.9-1.0 = চমৎকার</li>
                  <li>• 0.8-0.9 = ভাল</li>
                  <li>• 0.7-0.8 = মোটামুটি</li>
                  <li>• 0.5 = র‍্যান্ডম গেসিং</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python কোড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-2 rounded">
                  {`from sklearn.metrics import roc_auc_score, roc_curve
import matplotlib.pyplot as plt

# প্রোবাবিলিটি প্রেডিকশন
y_proba = model.predict_proba(X_test)[:, 1]

# AUC স্কোর
auc = roc_auc_score(y_test, y_proba)
print(f"AUC: {auc:.3f}")

# ROC কার্ভ প্লট
fpr, tpr, _ = roc_curve(y_test, y_proba)
plt.plot(fpr, tpr, label=f'ROC (AUC = {auc:.2f})')
plt.plot([0, 1], [0, 1], 'k--')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.legend()
plt.show()`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regression Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">রিগ্রেশন মেট্রিক্স</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>ধারাবাহিক ভ্যালু প্রেডিকশনের জন্য বিভিন্ন মেট্রিক্স।</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h5 className="font-semibold text-teal-800 mb-2">Mean Absolute Error (MAE):</h5>
                <p className="font-mono text-teal-700 text-sm mb-2">Σ|y_true - y_pred| / n</p>
                <p className="text-teal-700 text-sm">গড় পরম ত্রুটি - সহজ বোঝা যায়</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">Mean Squared Error (MSE):</h5>
                <p className="font-mono text-blue-700 text-sm mb-2">Σ(y_true - y_pred)² / n</p>
                <p className="text-blue-700 text-sm">বড় ত্রুটিকে বেশি পেনালটি দেয়</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Root Mean Squared Error (RMSE):</h5>
                <p className="font-mono text-green-700 text-sm mb-2">√MSE</p>
                <p className="text-green-700 text-sm">টার্গেট ভেরিয়েবলের একই ইউনিটে</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">R² Score (R-squared):</h5>
                <p className="font-mono text-purple-700 text-sm mb-2">1 - (SS_res / SS_tot)</p>
                <p className="text-purple-700 text-sm">ভেরিয়েন্সের কতটুকু ব্যাখ্যা করতে পারে</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Python কোড:</h4>
              <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                {`from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

# প্রেডিকশন
y_pred = model.predict(X_test)

# মেট্রিক্স হিসাব
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f"MAE: {mae:.3f}")
print(f"MSE: {mse:.3f}")
print(f"RMSE: {rmse:.3f}")
print(f"R² Score: {r2:.3f}")`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/machine-learning/unsupervised">
              <ArrowLeft className="mr-2 h-4 w-4" />
              আনসুপারভাইজড লার্নিং
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/machine-learning/feature-engineering">
              ফিচার ইঞ্জিনিয়ারিং
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
