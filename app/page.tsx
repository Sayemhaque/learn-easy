"use client";

import type React from "react";

import HTMLCourseCard from "@/components/html-course-card";
import JavaScriptCourseCard from "@/components/javascript-course.card";
import MachineLearningCourseCard from "@/components/ml-course-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Coffee,
  Heart,
  Play,
  Rocket,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const AnimatedHeroText = () => {
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    {
      text: "কোডিং শিখো",
      subtext: "তোমার মতো করে!",
      gradient: "from-yellow-300 via-orange-300 to-red-300",
    },
    {
      text: "স্বপ্নের ক্যারিয়ার",
      subtext: "শুরু করো আজই!",
      gradient: "from-green-300 via-blue-300 to-purple-300",
    },
    {
      text: "প্রোগ্রামার হও",
      subtext: "বাংলায় শিখে!",
      gradient: "from-pink-300 via-purple-300 to-indigo-300",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative h-32 md:h-40 flex items-center justify-center'>
      {heroTexts.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
            index === currentText
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}>
          <div
            className={`text-6xl md:text-8xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent leading-tight`}>
            {item.text}
          </div>
          <div className='text-white text-3xl md:text-4xl mt-2 font-semibold'>
            {item.subtext}
          </div>
        </div>
      ))}
    </div>
  );
};

const AnimatedCounter = ({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <div
    className='animate-bounce'
    style={{
      animationDelay: `${delay}s`,
      animationDuration: "3s",
    }}>
    {children}
  </div>
);

export default function ModernHomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "রাহুল আহমেদ",
      role: "সফটওয়্যার ইঞ্জিনিয়ার",
      text: "এত সহজ করে HTML শেখানো হয়েছে যে মনে হচ্ছে আমি অনেক আগেই জানতাম!",
      avatar: "🧑‍💻",
    },
    {
      name: "ফাতিমা খান",
      role: "ওয়েব ডেভেলপার",
      text: "জাভাস্ক্রিপ্ট এত কঠিন মনে হতো, এখন মজা লাগে কোড লিখতে!",
      avatar: "👩‍💻",
    },
    {
      name: "করিম উদ্দিন",
      role: "ফ্রিল্যান্সার",
      text: "মেশিন লার্নিং শিখে এখন ভালো আয় করছি। ধন্যবাদ শিখন টিমকে!",
      avatar: "🚀",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800'>
        {/* Solid Background Overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90'></div>

        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-10 left-10'>
            <FloatingElement delay={0}>
              <Code2 className='w-8 h-8 text-white' />
            </FloatingElement>
          </div>
          <div className='absolute top-20 right-20'>
            <FloatingElement delay={1}>
              <Sparkles className='w-6 h-6 text-white' />
            </FloatingElement>
          </div>
          <div className='absolute bottom-20 left-20'>
            <FloatingElement delay={2}>
              <Zap className='w-7 h-7 text-white' />
            </FloatingElement>
          </div>
          <div className='absolute bottom-10 right-10'>
            <FloatingElement delay={3}>
              <Heart className='w-5 h-5 text-white' />
            </FloatingElement>
          </div>
        </div>

        <div className='relative max-w-7xl mx-auto text-center'>
          {/* Badge */}
          <div className='inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium mb-8 shadow-lg'>
            <Star className='w-5 h-5 mr-2 text-yellow-300' />
            ১০০% বিনামূল্যে • বাংলায় • হাতে-কলমে শেখানো
          </div>

          {/* Animated Main Heading */}
          <div className='mb-8'>
            <AnimatedHeroText />
          </div>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed'>
            হেই বন্ধু! 👋 প্রোগ্রামিং শিখতে চাও? দারুণ! আমরা তোমাকে একদম শূন্য
            থেকে শেখাবো।
            <br />
            <span className='text-yellow-300 font-semibold'>
              কোনো টেনশন নেই
            </span>{" "}
            - তোমার গতিতে, সহজ বাংলায়!
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-6 justify-center mb-16'>
            <Button
              asChild
              size='lg'
              className='bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0'>
              <Link href='/courses'>
                <Play className='w-6 h-6 mr-3' />
                এখনই শুরু করো
                <ArrowRight className='w-6 h-6 ml-3' />
              </Link>
            </Button>

            <Button
              asChild
              size='lg'
              className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0'>
              <Link href='/courses'>
                <Coffee className='w-6 h-6 mr-3' />
                কোর্স দেখো
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
            {[
              {
                number: 5000,
                label: "খুশি শিক্ষার্থী",
                color: "text-blue-300",
                icon: Users,
              },
              {
                number: 50,
                label: "কোর্স লেসন",
                color: "text-green-300",
                icon: BookOpen,
              },
              {
                number: 100,
                label: "প্র্যাকটিস প্রজেক্ট",
                color: "text-purple-300",
                icon: Code2,
              },
              {
                number: 95,
                label: "সফলতার হার",
                color: "text-orange-300",
                icon: Trophy,
              },
            ].map((stat, index) => (
              <div key={index} className='text-center group'>
                <div className='mb-3'>
                  <stat.icon
                    className={`w-8 h-8 mx-auto ${stat.color} group-hover:scale-110 transition-transform`}
                  />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  <AnimatedCounter end={stat.number} />
                  {stat.label === "সফলতার হার" && "%"}
                  {stat.label === "খুশি শিক্ষার্থী" && "+"}
                  {stat.label === "প্র্যাকটিস প্রজেক্ট" && "+"}
                </div>
                <div className='text-white/80 font-medium'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className='py-24 px-4 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <Badge className='bg-blue-100 text-blue-800 px-4 py-2 text-lg font-medium mb-6'>
              <Rocket className='w-5 h-5 mr-2' />
              তোমার জন্য কোর্স
            </Badge>
            <h2 className='text-5xl font-bold text-gray-900 mb-6'>
              যেটা দিয়ে শুরু করতে চাও?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              প্রতিটি কোর্স বানানো হয়েছে তোমার মতো নতুন শিক্ষার্থীদের কথা
              মাথায় রেখে
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <HTMLCourseCard />
            <JavaScriptCourseCard />
            <MachineLearningCourseCard />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold text-gray-900 mb-6'>
              কেন আমাদের সাথে শিখবে? 🤔
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              আমরা জানি তোমার কী লাগবে!
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: Heart,
                title: "তোমার মতো করে",
                description:
                  "কঠিন ইংরেজি শব্দ নয়! সহজ বাংলায়, তোমার বন্ধুর মতো করে বুঝিয়ে দেবো।",
                color: "from-red-500 to-pink-500",
                bgColor: "from-red-50 to-pink-50",
              },
              {
                icon: Zap,
                title: "প্র্যাকটিক্যাল শেখানো",
                description:
                  "শুধু থিওরি নয়! হাতে-কলমে কোড লিখে শিখবে। রিয়েল প্রজেক্ট বানাবে।",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                icon: TrendingUp,
                title: "ক্যারিয়ার রেডি",
                description:
                  "শেখার পর চাকরি পেতে সাহায্য করবো। CV থেকে ইন্টারভিউ - সব!",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${feature.bgColor} hover:scale-105`}>
                <CardHeader className='text-center pb-4'>
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className='w-10 h-10 text-white' />
                  </div>
                  <CardTitle className='text-2xl text-gray-900 mb-4'>
                    {feature.title}
                  </CardTitle>
                  <CardDescription className='text-gray-600 text-lg leading-relaxed'>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-24 px-4 bg-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-5xl font-bold text-gray-900 mb-6'>
            তোমার মতো শিক্ষার্থীরা কী বলছে? 💬
          </h2>
          <p className='text-xl text-gray-600 mb-12'>তাদের সফলতার গল্প শোনো</p>

          <Card className='bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-2xl'>
            <CardContent className='p-12'>
              <div className='text-6xl mb-6'>
                {testimonials[currentTestimonial].avatar}
              </div>
              <blockquote className='text-2xl text-gray-700 mb-6 italic leading-relaxed'>
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className='text-lg font-semibold text-gray-900'>
                {testimonials[currentTestimonial].name}
              </div>
              <div className='text-blue-600 font-medium'>
                {testimonials[currentTestimonial].role}
              </div>
            </CardContent>
          </Card>

          <div className='flex justify-center mt-8 space-x-2'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black/10'></div>
        <div className='relative max-w-4xl mx-auto text-center'>
          <h2 className='text-5xl font-bold mb-8'>তাহলে আর দেরি কেন? 🚀</h2>
          <p className='text-2xl mb-12 opacity-90 leading-relaxed'>
            তোমার কোডিং জার্নি শুরু করো আজই! আমরা আছি তোমার সাথে, প্রতিটি ধাপে।
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-10 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0'>
              <Link href='/courses'>
                <Rocket className='w-6 h-6 mr-3' />
                চলো শুরু করি!
                <ArrowRight className='w-6 h-6 ml-3' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
