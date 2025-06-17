import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function FeatureEngineeringPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-2">
            মেশিন লার্নিং
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">ফিচার ইঞ্জিনিয়ারিং</h1>
          <p className="text-xl text-muted-foreground">
            ডেটা প্রিপ্রসেসিং এবং ফিচার তৈরি - ML এর সবচেয়ে গুরুত্বপূর্ণ এবং সময়সাপেক্ষ অংশ।
          </p>
        </div>

        {/* Why Feature Engineering */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800">কেন ফিচার ইঞ্জিনিয়ারিং গুরুত্বপূর্ণ?</CardTitle>
          </CardHeader>
          <CardContent className="text-red-700 space-y-3">
            <p className="font-semibold">"ভাল ডেটা &gt; ভাল অ্যালগরিদম"</p>
            <ul className="space-y-2 ml-4">
              <li>
                • <strong>মডেল পারফরম্যান্স:</strong> ভাল ফিচার = ভাল ফলাফল
              </li>
              <li>
                • <strong>সময় বাঁচায়:</strong> সঠিক ফিচার দিয়ে সহজ মডেলও ভাল কাজ করে
              </li>
              <li>
                • <strong>ডোমেইন নলেজ:</strong> বিজনেস বুঝে ফিচার তৈরি করা
              </li>
              <li>
                • <strong>ডেটা কোয়ালিটি:</strong> পরিষ্কার ডেটা = নির্ভরযোগ্য মডেল
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Cleaning */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">ডেটা ক্লিনিং</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>কাঁচা ডেটা সাধারণত নোংরা থাকে। প্রথমে এটি পরিষ্কার করতে হয়।</p>

            {/* Missing Values */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. মিসিং ভ্যালু হ্যান্ডলিং</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">মিসিং ভ্যালুর ধরন:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• MCAR (Missing Completely at Random)</li>
                  <li>• MAR (Missing at Random)</li>
                  <li>• MNAR (Missing Not at Random)</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python কোড:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer, KNNImputer

# ডেটা লোড করা
df = pd.read_csv('data.csv')

# মিসিং ভ্যালু চেক করা
print("মিসিং ভ্যালু:")
print(df.isnull().sum())

# মিসিং ভ্যালুর শতকরা হার
missing_percent = (df.isnull().sum() / len(df)) * 100
print("\\nমিসিং ভ্যালুর শতকরা হার:")
print(missing_percent)

# ১. ডিলিট করা (যদি কম মিসিং ভ্যালু থাকে)
df_dropped = df.dropna()  # সব row যেখানে কোন missing value আছে
df_dropped_cols = df.dropna(axis=1)  # সব column যেখানে missing value আছে

# ২. Mean/Median/Mode দিয়ে ভরা
# নিউমেরিক কলামের জন্য
numeric_imputer = SimpleImputer(strategy='mean')  # বা 'median'
df[['age', 'salary']] = numeric_imputer.fit_transform(df[['age', 'salary']])

# ক্যাটেগরিক্যাল কলামের জন্য
categorical_imputer = SimpleImputer(strategy='most_frequent')
df[['city', 'gender']] = categorical_imputer.fit_transform(df[['city', 'gender']])

# ৩. KNN Imputation
knn_imputer = KNNImputer(n_neighbors=5)
df_knn = pd.DataFrame(knn_imputer.fit_transform(df), columns=df.columns)

# ৪. Forward Fill / Backward Fill (Time Series এর জন্য)
df['price'] = df['price'].fillna(method='ffill')  # Forward fill
df['price'] = df['price'].fillna(method='bfill')  # Backward fill

# ৫. কাস্টম ভ্যালু দিয়ে ভরা
df['category'] = df['category'].fillna('Unknown')
df['score'] = df['score'].fillna(0)`}
                </pre>
              </div>
            </div>

            {/* Outliers */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. আউটলায়ার ডিটেকশন এবং হ্যান্ডলিং</h4>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">আউটলায়ার কী?</h5>
                <p className="text-sm text-yellow-700">
                  অস্বাভাবিক ভ্যালু যা অন্য ডেটা পয়েন্ট থেকে অনেক আলাদা। এগুলো মডেলের পারফরম্যান্স খারাপ করতে পারে।
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">আউটলায়ার ডিটেকশন:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats

# ১. IQR Method
def detect_outliers_iqr(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    
    outliers = df[(df[column] < lower_bound) | (df[column] > upper_bound)]
    return outliers

# ২. Z-Score Method
def detect_outliers_zscore(df, column, threshold=3):
    z_scores = np.abs(stats.zscore(df[column]))
    outliers = df[z_scores > threshold]
    return outliers

# ৩. Isolation Forest
from sklearn.ensemble import IsolationForest

iso_forest = IsolationForest(contamination=0.1, random_state=42)
outliers = iso_forest.fit_predict(df[['age', 'salary']])
df['outlier'] = outliers

# আউটলায়ার ভিজুয়ালাইজেশন
plt.figure(figsize=(12, 4))

plt.subplot(1, 3, 1)
plt.boxplot(df['salary'])
plt.title('Box Plot')

plt.subplot(1, 3, 2)
plt.hist(df['salary'], bins=30)
plt.title('Histogram')

plt.subplot(1, 3, 3)
plt.scatter(df['age'], df['salary'])
plt.title('Scatter Plot')

plt.tight_layout()
plt.show()

# আউটলায়ার হ্যান্ডলিং
# ১. Remove করা
df_no_outliers = df[df['outlier'] == 1]

# ২. Cap করা (Winsorization)
from scipy.stats.mstats import winsorize
df['salary_winsorized'] = winsorize(df['salary'], limits=[0.05, 0.05])

# ৩. Transform করা
df['salary_log'] = np.log1p(df['salary'])  # Log transformation`}
                </pre>
              </div>
            </div>

            {/* Duplicates */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. ডুপ্লিকেট ডেটা</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`# ডুপ্লিকেট চেক করা
print(f"মোট ডুপ্লিকেট রো: {df.duplicated().sum()}")

# ডুপ্লিকেট দেখা
duplicates = df[df.duplicated()]
print(duplicates)

# নির্দিষ্ট কলামের ভিত্তিতে ডুপ্লিকেট
duplicates_subset = df[df.duplicated(subset=['name', 'email'])]

# ডুপ্লিকেট সরানো
df_no_duplicates = df.drop_duplicates()

# প্রথম occurrence রাখা
df_first = df.drop_duplicates(keep='first')

# শেষ occurrence রাখা  
df_last = df.drop_duplicates(keep='last')

# নির্দিষ্ট কলামের ভিত্তিতে ডুপ্লিকেট সরানো
df_unique = df.drop_duplicates(subset=['email'])`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Scaling */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">ফিচার স্কেলিং</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>বিভিন্ন ফিচারের স্কেল আলাদা হলে মডেল bias হয়ে যেতে পারে। স্কেলিং এই সমস্যা সমাধান করে।</p>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">স্কেলিং টেকনিক</h4>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">কখন কোনটি ব্যবহার করবেন:</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>
                    • <strong>StandardScaler:</strong> Normal distribution এর জন্য
                  </li>
                  <li>
                    • <strong>MinMaxScaler:</strong> Bounded range চাইলে
                  </li>
                  <li>
                    • <strong>RobustScaler:</strong> Outlier থাকলে
                  </li>
                  <li>
                    • <strong>Normalizer:</strong> Row-wise normalization
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Python Implementation:</h5>
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler, Normalizer
import pandas as pd

# নমুনা ডেটা
data = {
    'age': [25, 30, 35, 40, 45],
    'salary': [30000, 50000, 70000, 90000, 120000],
    'experience': [2, 5, 8, 12, 15]
}
df = pd.DataFrame(data)

print("Original Data:")
print(df)

# ১. Standard Scaling (Z-score normalization)
# (x - mean) / std
standard_scaler = StandardScaler()
df_standard = pd.DataFrame(
    standard_scaler.fit_transform(df),
    columns=df.columns
)
print("\\nStandard Scaled:")
print(df_standard)

# ২. Min-Max Scaling
# (x - min) / (max - min)
minmax_scaler = MinMaxScaler()
df_minmax = pd.DataFrame(
    minmax_scaler.fit_transform(df),
    columns=df.columns
)
print("\\nMin-Max Scaled:")
print(df_minmax)

# ৩. Robust Scaling
# (x - median) / IQR
robust_scaler = RobustScaler()
df_robust = pd.DataFrame(
    robust_scaler.fit_transform(df),
    columns=df.columns
)
print("\\nRobust Scaled:")
print(df_robust)

# ৪. Unit Vector Scaling (Normalization)
normalizer = Normalizer()
df_normalized = pd.DataFrame(
    normalizer.fit_transform(df),
    columns=df.columns
)
print("\\nNormalized:")
print(df_normalized)

# কাস্টম রেঞ্জে স্কেলিং
minmax_custom = MinMaxScaler(feature_range=(-1, 1))
df_custom = pd.DataFrame(
    minmax_custom.fit_transform(df),
    columns=df.columns
)

# Train-Test এ সঠিক স্কেলিং
from sklearn.model_selection import train_test_split

X_train, X_test = train_test_split(df, test_size=0.2, random_state=42)

# Train ডেটায় fit করা
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)

# Test ডেটায় শুধু transform করা (fit নয়!)
X_test_scaled = scaler.transform(X_test)`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Encoding */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-600">ক্যাটেগরিক্যাল এনকোডিং</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>ML অ্যালগরিদম শুধু সংখ্যা বুঝে। ক্যাটেগরিক্যাল ডেটাকে সংখ্যায় রূপান্তর করতে হয়।</p>

            {/* Label Encoding */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. লেবেল এনকোডিং</h4>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">কখন ব্যবহার করবেন:</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Ordinal data (ক্রমানুসারে): Low, Medium, High</li>
                  <li>• Tree-based algorithms এর জন্য</li>
                  <li>• কম category থাকলে</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.preprocessing import LabelEncoder
import pandas as pd

# নমুনা ডেটা
data = {
    'city': ['ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'ঢাকা', 'চট্টগ্রাম'],
    'education': ['স্নাতক', 'মাস্টার্স', 'এইচএসসি', 'স্নাতক', 'মাস্টার্স'],
    'grade': ['A', 'B', 'C', 'A', 'B']
}
df = pd.DataFrame(data)

print("Original Data:")
print(df)

# Label Encoding
label_encoder = LabelEncoder()

# প্রতিটি কলামের জন্য আলাদা encoder
df['city_encoded'] = label_encoder.fit_transform(df['city'])

# অথবা একসাথে সব কলাম
for column in ['city', 'education', 'grade']:
    le = LabelEncoder()
    df[f'{column}_encoded'] = le.fit_transform(df[column])
    
    # Mapping দেখা
    mapping = dict(zip(le.classes_, le.transform(le.classes_)))
    print(f"\\n{column} mapping: {mapping}")

print("\\nEncoded Data:")
print(df)`}
                </pre>
              </div>
            </div>

            {/* One-Hot Encoding */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. ওয়ান-হট এনকোডিং</h4>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">কখন ব্যবহার করবেন:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Nominal data (কোন ক্রম নেই): রং, শহর</li>
                  <li>• Linear algorithms এর জন্য</li>
                  <li>• কম unique values থাকলে</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.preprocessing import OneHotEncoder
import pandas as pd

# নমুনা ডেটা
data = {
    'city': ['ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'ঢাকা'],
    'transport': ['বাস', 'ট্রেন', 'বিমান', 'বাস']
}
df = pd.DataFrame(data)

print("Original Data:")
print(df)

# ১. Pandas get_dummies (সহজ উপায়)
df_encoded = pd.get_dummies(df, columns=['city', 'transport'])
print("\\nPandas get_dummies:")
print(df_encoded)

# ২. Sklearn OneHotEncoder
encoder = OneHotEncoder(sparse=False, drop='first')  # first category drop করা
encoded_array = encoder.fit_transform(df[['city', 'transport']])

# Column names পাওয়া
feature_names = encoder.get_feature_names_out(['city', 'transport'])
df_sklearn = pd.DataFrame(encoded_array, columns=feature_names)

print("\\nSklearn OneHotEncoder:")
print(df_sklearn)

# ৩. High Cardinality এর জন্য (অনেক unique values)
# Top categories রাখা, বাকি 'Other' করা
def reduce_cardinality(df, column, top_n=5):
    top_categories = df[column].value_counts().head(top_n).index
    df[f'{column}_reduced'] = df[column].apply(
        lambda x: x if x in top_categories else 'Other'
    )
    return df

# Binary Encoding (memory efficient)
import category_encoders as ce

binary_encoder = ce.BinaryEncoder(cols=['city'])
df_binary = binary_encoder.fit_transform(df)
print("\\nBinary Encoding:")
print(df_binary)`}
                </pre>
              </div>
            </div>

            {/* Advanced Encoding */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. অ্যাডভান্সড এনকোডিং</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import category_encoders as ce

# ১. Target Encoding (Mean Encoding)
# Category এর target variable এর mean দিয়ে encode করা
target_encoder = ce.TargetEncoder(cols=['city'])
df_target = target_encoder.fit_transform(df['city'], y_target)

# ২. Frequency Encoding
# Category এর frequency দিয়ে encode করা
frequency_map = df['city'].value_counts().to_dict()
df['city_frequency'] = df['city'].map(frequency_map)

# ৩. Hash Encoding
# High cardinality এর জন্য
hash_encoder = ce.HashingEncoder(cols=['city'], n_components=8)
df_hash = hash_encoder.fit_transform(df)

# ৪. Leave One Out Encoding
loo_encoder = ce.LeaveOneOutEncoder(cols=['city'])
df_loo = loo_encoder.fit_transform(df['city'], y_target)

# ৫. James-Stein Encoding
js_encoder = ce.JamesSteinEncoder(cols=['city'])
df_js = js_encoder.fit_transform(df['city'], y_target)`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Creation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">ফিচার ক্রিয়েশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>বিদ্যমান ফিচার থেকে নতুন, আরও তথ্যবহুল ফিচার তৈরি করা।</p>

            {/* Mathematical Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. গাণিতিক ফিচার</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import pandas as pd
import numpy as np

# নমুনা ডেটা
data = {
    'height': [170, 175, 180, 165, 185],
    'weight': [70, 80, 85, 60, 95],
    'age': [25, 30, 35, 28, 40],
    'income': [50000, 60000, 80000, 45000, 100000]
}
df = pd.DataFrame(data)

# ১. Ratio Features
df['bmi'] = df['weight'] / (df['height'] / 100) ** 2
df['income_per_age'] = df['income'] / df['age']

# ২. Polynomial Features
df['height_squared'] = df['height'] ** 2
df['weight_cubed'] = df['weight'] ** 3

# ৩. Interaction Features
df['height_weight_interaction'] = df['height'] * df['weight']
df['age_income_interaction'] = df['age'] * df['income']

# ৪. Binning (Discretization)
df['age_group'] = pd.cut(df['age'], 
                        bins=[0, 25, 35, 50, 100], 
                        labels=['Young', 'Adult', 'Middle', 'Senior'])

df['income_level'] = pd.qcut(df['income'], 
                            q=3, 
                            labels=['Low', 'Medium', 'High'])

# ৫. Log Transformation
df['log_income'] = np.log1p(df['income'])

# ৬. Statistical Features
df['height_weight_mean'] = (df['height'] + df['weight']) / 2
df['height_weight_diff'] = df['height'] - df['weight']

print("Created Features:")
print(df.head())`}
                </pre>
              </div>
            </div>

            {/* Date-Time Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. ডেট-টাইম ফিচার</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import pandas as pd
from datetime import datetime

# নমুনা ডেটা
dates = pd.date_range('2023-01-01', periods=100, freq='D')
df = pd.DataFrame({'date': dates, 'sales': np.random.randint(100, 1000, 100)})

# Date-time features তৈরি করা
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day'] = df['date'].dt.day
df['day_of_week'] = df['date'].dt.dayofweek
df['day_of_year'] = df['date'].dt.dayofyear
df['week_of_year'] = df['date'].dt.isocalendar().week
df['quarter'] = df['date'].dt.quarter

# Boolean features
df['is_weekend'] = df['day_of_week'].isin([5, 6])
df['is_month_start'] = df['date'].dt.is_month_start
df['is_month_end'] = df['date'].dt.is_month_end

# Cyclical features (for seasonality)
df['month_sin'] = np.sin(2 * np.pi * df['month'] / 12)
df['month_cos'] = np.cos(2 * np.pi * df['month'] / 12)
df['day_sin'] = np.sin(2 * np.pi * df['day_of_week'] / 7)
df['day_cos'] = np.cos(2 * np.pi * df['day_of_week'] / 7)

# Time since reference point
reference_date = pd.to_datetime('2023-01-01')
df['days_since_start'] = (df['date'] - reference_date).dt.days

# Holiday features (বাংলাদেশের ছুটির দিন)
holidays = ['2023-02-21', '2023-03-26', '2023-05-01']  # ভাষা দিবস, স্বাধীনতা দিবস, মে দিবস
holiday_dates = pd.to_datetime(holidays)
df['is_holiday'] = df['date'].isin(holiday_dates)

print("Date-time Features:")
print(df.head())`}
                </pre>
              </div>
            </div>

            {/* Text Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. টেক্সট ফিচার</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import pandas as pd
import re
from textstat import flesch_reading_ease

# নমুনা টেক্সট ডেটা
data = {
    'review': [
        'এই পণ্যটি খুবই ভাল! আমি সন্তুষ্ট।',
        'খারাপ কোয়ালিটি। টাকার অপচয়।',
        'গড়পড়তা। ভাল না খারাপ না।',
        'চমৎকার! সবাইকে রেকমেন্ড করি।'
    ]
}
df = pd.DataFrame(data)

# Basic text features
df['text_length'] = df['review'].str.len()
df['word_count'] = df['review'].str.split().str.len()
df['char_count'] = df['review'].str.replace(' ', '').str.len()
df['sentence_count'] = df['review'].str.count('[।!?]') + 1

# Advanced text features
df['avg_word_length'] = df['char_count'] / df['word_count']
df['punctuation_count'] = df['review'].str.count('[।!?,:;]')
df['uppercase_count'] = df['review'].str.count('[A-Z]')
df['digit_count'] = df['review'].str.count('[0-9]')

# Sentiment indicators
positive_words = ['ভাল', 'চমৎকার', 'সন্তুষ্ট', 'রেকমেন্ড']
negative_words = ['খারাপ', 'অপচয়', 'সমস্যা']

df['positive_word_count'] = df['review'].apply(
    lambda x: sum(1 for word in positive_words if word in x)
)
df['negative_word_count'] = df['review'].apply(
    lambda x: sum(1 for word in negative_words if word in x)
)

# Readability score (ইংরেজি টেক্সটের জন্য)
# df['readability'] = df['review'].apply(flesch_reading_ease)

print("Text Features:")
print(df)`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">ফিচার সিলেকশন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>সব ফিচার সমান গুরুত্বপূর্ণ নয়। অপ্রয়োজনীয় ফিচার সরিয়ে মডেল উন্নত করা যায়।</p>

            {/* Statistical Methods */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">১. পরিসংখ্যানগত পদ্ধতি</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.feature_selection import SelectKBest, chi2, f_classif, mutual_info_classif
from sklearn.feature_selection import VarianceThreshold
import pandas as pd
import numpy as np

# নমুনা ডেটা
np.random.seed(42)
X = pd.DataFrame(np.random.randn(1000, 10), columns=[f'feature_{i}' for i in range(10)])
y = np.random.randint(0, 2, 1000)

# ১. Variance Threshold (কম variance এর ফিচার সরানো)
variance_selector = VarianceThreshold(threshold=0.1)
X_variance = variance_selector.fit_transform(X)
selected_features = X.columns[variance_selector.get_support()]
print(f"Variance Threshold এর পর: {len(selected_features)} ফিচার")

# ২. Univariate Feature Selection
# Chi-square test (categorical target এর জন্য)
chi2_selector = SelectKBest(chi2, k=5)
X_chi2 = chi2_selector.fit_transform(X, y)
chi2_features = X.columns[chi2_selector.get_support()]
print(f"Chi-square এর পর: {len(chi2_features)} ফিচার")

# F-test (classification এর জন্য)
f_selector = SelectKBest(f_classif, k=5)
X_f = f_selector.fit_transform(X, y)
f_features = X.columns[f_selector.get_support()]

# Mutual Information
mi_selector = SelectKBest(mutual_info_classif, k=5)
X_mi = mi_selector.fit_transform(X, y)
mi_features = X.columns[mi_selector.get_support()]

# Feature scores দেখা
feature_scores = pd.DataFrame({
    'feature': X.columns,
    'chi2_score': chi2_selector.scores_,
    'f_score': f_selector.scores_,
    'mi_score': mi_selector.scores_
})
print("\\nFeature Scores:")
print(feature_scores.sort_values('f_score', ascending=False))`}
                </pre>
              </div>
            </div>

            {/* Model-based Selection */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">২. মডেল-ভিত্তিক সিলেকশন</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`from sklearn.feature_selection import SelectFromModel, RFE
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
import matplotlib.pyplot as plt

# ১. Tree-based Feature Importance
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X, y)

# Feature importance plot
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'importance': rf.feature_importances_
}).sort_values('importance', ascending=False)

plt.figure(figsize=(10, 6))
plt.barh(feature_importance['feature'], feature_importance['importance'])
plt.title('Random Forest Feature Importance')
plt.xlabel('Importance')
plt.show()

# Top features select করা
selector = SelectFromModel(rf, threshold='median')
X_selected = selector.fit_transform(X, y)
selected_features = X.columns[selector.get_support()]
print(f"Random Forest এর পর: {len(selected_features)} ফিচার")

# ২. L1 Regularization (Lasso)
lasso = LogisticRegression(penalty='l1', solver='liblinear', C=0.1)
lasso_selector = SelectFromModel(lasso)
X_lasso = lasso_selector.fit_transform(X, y)
lasso_features = X.columns[lasso_selector.get_support()]

# ৩. Recursive Feature Elimination (RFE)
rfe = RFE(estimator=rf, n_features_to_select=5)
X_rfe = rfe.fit_transform(X, y)
rfe_features = X.columns[rfe.get_support()]
print(f"RFE এর পর: {len(rfe_features)} ফিচার")

# Feature ranking দেখা
feature_ranking = pd.DataFrame({
    'feature': X.columns,
    'ranking': rfe.ranking_
}).sort_values('ranking')
print("\\nRFE Feature Ranking:")
print(feature_ranking)`}
                </pre>
              </div>
            </div>

            {/* Correlation Analysis */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">৩. কোরিলেশন অ্যানালাইসিস</h4>

              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                  {`import seaborn as sns
import matplotlib.pyplot as plt

# Correlation matrix
correlation_matrix = X.corr()

# Heatmap
plt.figure(figsize=(12, 10))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0)
plt.title('Feature Correlation Matrix')
plt.show()

# High correlation pairs খুঁজে বের করা
def find_high_correlation_pairs(df, threshold=0.8):
    corr_matrix = df.corr().abs()
    upper_triangle = corr_matrix.where(
        np.triu(np.ones(corr_matrix.shape), k=1).astype(bool)
    )
    
    high_corr_pairs = []
    for column in upper_triangle.columns:
        for index in upper_triangle.index:
            if upper_triangle.loc[index, column] > threshold:
                high_corr_pairs.append((index, column, upper_triangle.loc[index, column]))
    
    return high_corr_pairs

high_corr = find_high_correlation_pairs(X, threshold=0.8)
print("High Correlation Pairs:")
for pair in high_corr:
    print(f"{pair[0]} - {pair[1]}: {pair[2]:.3f}")

# Multicollinearity detection (VIF)
from statsmodels.stats.outliers_influence import variance_inflation_factor

def calculate_vif(df):
    vif_data = pd.DataFrame()
    vif_data["Feature"] = df.columns
    vif_data["VIF"] = [variance_inflation_factor(df.values, i) 
                       for i in range(len(df.columns))]
    return vif_data.sort_values('VIF', ascending=False)

vif_scores = calculate_vif(X)
print("\\nVariance Inflation Factor:")
print(vif_scores)

# VIF > 10 হলে multicollinearity আছে
high_vif_features = vif_scores[vif_scores['VIF'] > 10]['Feature'].tolist()
print(f"\\nHigh VIF features: {high_vif_features}")`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800">ফিচার ইঞ্জিনিয়ারিং বেস্ট প্র্যাকটিস</CardTitle>
          </CardHeader>
          <CardContent className="text-yellow-700 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">করণীয়:</h4>
                <ul className="text-sm space-y-1">
                  <li>• ডোমেইন নলেজ ব্যবহার করুন</li>
                  <li>• EDA করে ডেটা বুঝুন</li>
                  <li>• Train-validation-test সঠিকভাবে split করুন</li>
                  <li>• Cross-validation ব্যবহার করুন</li>
                  <li>• Feature importance track করুন</li>
                  <li>• Iterative approach নিন</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">এড়িয়ে চলুন:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Data leakage</li>
                  <li>• Test data দিয়ে feature engineering</li>
                  <li>• অতিরিক্ত feature তৈরি করা</li>
                  <li>• Target variable দিয়ে feature তৈরি</li>
                  <li>• Future information ব্যবহার</li>
                  <li>• Overfitting</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">মনে রাখুন:</h4>
              <p className="text-sm">
                "Garbage in, garbage out" - ভাল ফিচার ইঞ্জিনিয়ারিং ছাড়া সেরা অ্যালগরিদমও ভাল ফলাফল দিতে পারে না। সময় নিয়ে ডেটা বুঝুন এবং
                ধৈর্য সহকারে ফিচার তৈরি করুন।
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/docs/machine-learning/evaluation">
              <ArrowLeft className="mr-2 h-4 w-4" />
              মডেল ইভ্যালুয়েশন
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link href="/docs/machine-learning/hyperparameter-tuning">
              হাইপারপ্যারামিটার টিউনিং
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
