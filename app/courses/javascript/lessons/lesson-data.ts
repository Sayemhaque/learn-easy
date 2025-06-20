export const lessonData = {
  1: {
    title: "জাভাস্ক্রিপ্ট কী এবং কেন?",
    section: "জাভাস্ক্রিপ্ট বেসিক",
    duration: "১০ মিনিট",
    content: `
# জাভাস্ক্রিপ্ট কী এবং কেন?

## জাভাস্ক্রিপ্ট কী?

জাভাস্ক্রিপ্ট হলো একটি প্রোগ্রামিং ভাষা যা ওয়েবসাইটকে জীবন্ত করে তোলে। 

**সহজ ভাষায়:** HTML দিয়ে ওয়েবসাইটের কাঠামো তৈরি হয়, CSS দিয়ে সাজানো হয়, আর জাভাস্ক্রিপ্ট দিয়ে এটাকে ইন্টারঅ্যাক্টিভ করা হয়।

## বাস্তব জীবনের উদাহরণ

একটি বাড়ির সাথে তুলনা করলে:
- **HTML = বাড়ির কাঠামো** (দেয়াল, দরজা, জানালা)
- **CSS = রং এবং সাজসজ্জা** (পেইন্ট, ফার্নিচার)
- **JavaScript = বৈদ্যুতিক সিস্টেম** (লাইট, ফ্যান, এয়ার কন্ডিশনার)

## জাভাস্ক্রিপ্ট দিয়ে কী করা যায়?

### ওয়েবসাইটে:
- বাটনে ক্লিক করলে কিছু ঘটানো
- ফর্ম ভ্যালিডেশন (সঠিক তথ্য দেওয়া হয়েছে কিনা চেক করা)
- অ্যানিমেশন এবং ইফেক্ট
- ডেটা লোড করা (যেমন: ফেসবুকে নতুন পোস্ট দেখানো)

### অন্যান্য জায়গায়:
- মোবাইল অ্যাপ (React Native)
- ডেস্কটপ অ্যাপ (Electron)
- সার্ভার (Node.js)
- গেম ডেভেলপমেন্ট

## কেন জাভাস্ক্রিপ্ট শিখবেন?

1. **সহজ শুরু:** অন্য ভাষার চেয়ে শেখা সহজ
2. **চাকরির সুযোগ:** সবচেয়ে বেশি চাহিদা
3. **ভার্সেটাইল:** ওয়েব থেকে মোবাইল সব জায়গায় ব্যবহার
4. **বিশাল কমিউনিটি:** সাহায্য পাওয়া সহজ

## প্রথম জাভাস্ক্রিপ্ট কোড

\`\`\`javascript
// এটি একটি কমেন্ট - ব্রাউজার এটা দেখবে না
alert("হ্যালো, আমি জাভাস্ক্রিপ্ট!");

// ভেরিয়েবল তৈরি করা
let name = "রহিম";
let age = 25;

// কনসোলে প্রিন্ট করা
console.log("নাম: " + name);
console.log("বয়স: " + age);
\`\`\`

## কোথায় জাভাস্ক্রিপ্ট লিখবেন?

1. **ব্রাউজারের Console:** F12 চেপে Developer Tools খুলুন
2. **HTML ফাইলে:** \`<script>\` ট্যাগের মধ্যে
3. **আলাদা .js ফাইলে:** সবচেয়ে ভাল পদ্ধতি

## মনে রাখার বিষয়

- জাভাস্ক্রিপ্ট **case-sensitive** (বড় ছোট হাতের অক্ষর আলাদা)
- প্রতি লাইনের শেষে **semicolon (;)** দেওয়া ভাল
- **console.log()** দিয়ে যেকোনো কিছু প্রিন্ট করতে পারেন
    `,
    quiz: {
      question: "জাভাস্ক্রিপ্ট দিয়ে কী করা যায় না?",
      options: [
        "ওয়েবসাইটে ইন্টারঅ্যাকশন যোগ করা",
        "মোবাইল অ্যাপ বানানো",
        "কম্পিউটারের হার্ডওয়্যার সরাসরি কন্ট্রোল করা",
        "সার্ভার সাইড প্রোগ্রামিং",
      ],
      correct: 2,
      explanation:
        "জাভাস্ক্রিপ্ট দিয়ে কম্পিউটারের হার্ডওয়্যার সরাসরি কন্ট্রোল করা যায় না। এটি একটি high-level ভাষা যা security এর জন্য hardware access সীমিত রাখে।",
    },
    glossary: [
      {
        term: "JavaScript",
        definition:
          "একটি প্রোগ্রামিং ভাষা যা ওয়েবসাইটকে ইন্টারঅ্যাক্টিভ করে তোলে",
      },
      {
        term: "Console",
        definition:
          "ব্রাউজারের একটি টুল যেখানে জাভাস্ক্রিপ্ট কোড লিখে টেস্ট করা যায়",
      },
      {
        term: "Variable",
        definition: "ডেটা সংরক্ষণ করার জন্য ব্যবহৃত কন্টেইনার",
      },
    ],
    codeExample: {
      title: "চেষ্টা করে দেখুন",
      code: `// আপনার নাম দিয়ে একটি ভেরিয়েবল তৈরি করুন
let myName = "আপনার নাম এখানে লিখুন";

// এটি কনসোলে প্রিন্ট করুন
console.log("আমার নাম: " + myName);

// একটি সাধারণ গণনা
let num1 = 10;
let num2 = 5;
let result = num1 + num2;

console.log(num1 + " + " + num2 + " = " + result);`,
    },
  },
  2: {
    title: "Hello World এবং Console",
    section: "জাভাস্ক্রিপ্ট বেসিক",
    duration: "১৫ মিনিট",
    content: `
  # Hello World এবং Console
  
  জাভাস্ক্রিপ্ট শেখার সবচেয়ে সহজ এবং প্রচলিত উপায় হচ্ছে **"Hello World"** মেসেজ দেখানো।
  
  ## alert() দিয়ে বার্তা দেখানো
  
  \`\`\`javascript
  alert("Hello World!");
  \`\`\`
  
  - এটি ব্রাউজারে একটি পপআপ দেখায়।
  - ইউজারের মনোযোগ আকর্ষণ করতে ব্যবহৃত হয়।
  
  ## console.log() দিয়ে কনসোলে বার্তা
  
  \`\`\`javascript
  console.log("Hello from Console!");
  \`\`\`
  
  - এটি ডেভেলপারদের জন্য সবচেয়ে গুরুত্বপূর্ণ টুল।
  - কোড ঠিকমতো কাজ করছে কিনা তা চেক করতে ব্যবহৃত হয়।
  
  ## ব্রাউজারের কনসোল খুলবেন কিভাবে?
  
  1. ব্রাউজারে যান (Chrome, Firefox)
  2. কীবোর্ডে **F12** চাপুন
  3. "Console" ট্যাবে ক্লিক করুন
  
  ## কোড একসাথে:
  
  \`\`\`javascript
  alert("Welcome to JavaScript!");
  let message = "Console message";
  console.log(message);
  \`\`\`
  
  ## কেন console.log() দরকার?
  
  - ভ্যালু ঠিক আছে কিনা চেক করতে
  - কোনো error আছে কিনা দেখতে
  - কোডে কী ঘটছে বুঝতে
  
  ## মনে রাখবেন:
  
  - alert() ইউজারকে বিরক্ত করতে পারে
  - console.log() শুধু ডেভেলপমেন্টের জন্য
    `,
    quiz: {
      question: "কোনটি alert() এর কাজ?",
      options: [
        "কোড প্রিন্ট করা",
        "ইউজারকে বার্তা দেখানো একটি পপআপে",
        "ভেরিয়েবল সংরক্ষণ করা",
        "ওয়েবসাইট রিফ্রেশ করা",
      ],
      correct: 1,
      explanation:
        "alert() ফাংশনটি ব্রাউজারে একটি পপআপ দেখায় যাতে ইউজার বার্তা দেখতে পারে।",
    },
    glossary: [
      {
        term: "alert()",
        definition: "একটি ফাংশন যা ব্রাউজারে পপআপ বার্তা দেখায়।",
      },
      {
        term: "console.log()",
        definition: "ডেভেলপার কনসোলে তথ্য প্রিন্ট করার জন্য ব্যবহৃত ফাংশন।",
      },
      {
        term: "Console",
        definition: "একটি টুল যেখানে ডেভেলপাররা কোডের আউটপুট দেখতে পারে।",
      },
    ],
    codeExample: {
      title: "Hello World দেখান",
      code: `alert("Hello World!");
  
  let name = "Rahim";
  console.log("নাম:", name);
  
  console.log("5 + 10 =", 5 + 10);`,
    },
  },
  3: {
    title: "ভেরিয়েবল (var, let, const)",
    section: "জাভাস্ক্রিপ্ট বেসিক",
    duration: "২০ মিনিট",
    content: `
  # ভেরিয়েবল (var, let, const)
  
  ভেরিয়েবল হলো এমন একটি কন্টেইনার যা ডেটা সংরক্ষণ করে।
  
  ## ভেরিয়েবল কিভাবে তৈরি করবেন?
  
  \`\`\`javascript
  let name = "রহিম";
  var age = 25;
  const country = "বাংলাদেশ";
  \`\`\`
  
  ## পার্থক্য: var vs let vs const
  
### ভেরিয়েবল টাইপগুলোর তুলনা

#### var
- পরিবর্তনযোগ্য: ✅ হ্যাঁ  
- ব্লক স্কোপ: ❌ না  
- আধুনিক: ❌ না  

#### let
- পরিবর্তনযোগ্য: ✅ হ্যাঁ  
- ব্লক স্কোপ: ✅ হ্যাঁ  
- আধুনিক: ✅ হ্যাঁ  

#### const
- পরিবর্তনযোগ্য: ❌ না  
- ব্লক স্কোপ: ✅ হ্যাঁ  
- আধুনিক: ✅ হ্যাঁ  
  
  ## কখন কোনটি ব্যবহার করবেন?
  
  - **let**: যখন মান পরিবর্তন করা লাগবে
  - **const**: যখন মান অপরিবর্তনীয়
  - **var**: পুরনো কোডে, নতুন করে ব্যবহার না করাই ভালো
  
  ## উদাহরণ:
  
  \`\`\`javascript
  let score = 10;
  score = 20; // ঠিক আছে
  
  const pi = 3.14;
  pi = 3.14159; // Error: const মান পরিবর্তন করা যায় না
  \`\`\`
  
  ## ভালো নাম কেমন হয়?
  
  - camelCase ব্যবহার করুন
  - অর্থবোধক নাম ব্যবহার করুন
  
  \`\`\`javascript
  let studentName = "Karim"; // ভাল
  let x = "Karim"; // খারাপ
  \`\`\`
    `,
    quiz: {
      question: "const দিয়ে তৈরি ভেরিয়েবলের মান কী পরিবর্তনযোগ্য?",
      options: ["হ্যাঁ", "না", "শুধু সংখ্যা হলে", "শুধু স্ট্রিং হলে"],
      correct: 1,
      explanation:
        "const দ্বারা তৈরি ভেরিয়েবলের মান একবার সেট করার পর আর পরিবর্তন করা যায় না।",
    },
    glossary: [
      {
        term: "Variable",
        definition: "ডেটা সংরক্ষণের জন্য ব্যবহৃত কন্টেইনার।",
      },
      {
        term: "const",
        definition: "একটি ভেরিয়েবল যার মান পরিবর্তন করা যায় না।",
      },
      {
        term: "camelCase",
        definition:
          "নামকরণের নিয়ম যেখানে প্রথম শব্দ ছোট, পরের শব্দ বড় হাতের অক্ষর দিয়ে শুরু হয়।",
      },
    ],
    codeExample: {
      title: "ভেরিয়েবল তৈরি ও পরিবর্তন",
      code: `
  \`\`\`javascript
  let city = "Dhaka";
  console.log("City:", city);
  
  city = "Chittagong";
  console.log("Updated City:", city);
  
  const birthYear = 2000;
  // birthYear = 2001; // এটি করলে error হবে 
  \`\`\`
  `,
    },
  },
};
