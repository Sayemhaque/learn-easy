import Link from "next/link"
import { BookOpen, Github, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="font-bold">ML Engineer বাংলা</span>
            </div>
            <p className="text-sm text-muted-foreground">মেশিন লার্নিং এবং ডিপ লার্নিং শেখার জন্য সম্পূর্ণ বাংলা গাইড।</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">ডকুমেন্টেশন</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs/introduction" className="text-muted-foreground hover:text-blue-600">
                  পরিচিতি
                </Link>
              </li>
              <li>
                <Link href="/docs/mathematics" className="text-muted-foreground hover:text-blue-600">
                  গণিত ভিত্তি
                </Link>
              </li>
              <li>
                <Link href="/docs/machine-learning" className="text-muted-foreground hover:text-blue-600">
                  মেশিন লার্নিং
                </Link>
              </li>
              <li>
                <Link href="/docs/deep-learning" className="text-muted-foreground hover:text-blue-600">
                  ডিপ লার্নিং
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">রিসোর্স</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/roadmap" className="text-muted-foreground hover:text-blue-600">
                  রোডম্যাপ
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-muted-foreground hover:text-blue-600">
                  উদাহরণ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-blue-600">
                  ব্লগ
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-blue-600">
                  কমিউনিটি
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">সাহায্য</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-blue-600">
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-blue-600">
                  সাপোর্ট
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-muted-foreground hover:text-blue-600">
                  অবদান রাখুন
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ML Engineer বাংলা ডকুমেন্টেশন। সকল অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  )
}
