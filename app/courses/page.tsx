import HtmlCourseCard from "@/components/html-course-card";
import JavaScriptCourseCard from "@/components/javascript-course.card";
import MachineLearningCourseCard from "@/components/ml-course-card";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CoursesPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            আমাদের কোর্স
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            বিনামূল্যে শিখুন প্রোগ্রামিং এবং মেশিন লার্নিং - সহজ বাংলায়, ধাপে
            ধাপে
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          <HtmlCourseCard />
          <JavaScriptCourseCard />
          <MachineLearningCourseCard />
        </div>

        {/* Coming Soon */}
        <div className='mt-16 text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>শীঘ্রই আসছে</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <Card className='opacity-75'>
              <CardHeader>
                <CardTitle className='text-lg'>React.js</CardTitle>
                <CardDescription>Modern ওয়েব অ্যাপ্লিকেশন</CardDescription>
              </CardHeader>
            </Card>
            <Card className='opacity-75'>
              <CardHeader>
                <CardTitle className='text-lg'>Node.js</CardTitle>
                <CardDescription>ব্যাকএন্ড ডেভেলপমেন্ট</CardDescription>
              </CardHeader>
            </Card>
            <Card className='opacity-75'>
              <CardHeader>
                <CardTitle className='text-lg'>Data Science</CardTitle>
                <CardDescription>ডেটা অ্যানালাইসিস</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
