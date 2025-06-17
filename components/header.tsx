"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BookOpen, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="hidden font-bold sm:inline-block">ML Engineer বাংলা</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/docs/introduction" className="transition-colors hover:text-blue-600">
              ডকুমেন্টেশন
            </Link>
            <Link href="/roadmap" className="transition-colors hover:text-blue-600">
              রোডম্যাপ
            </Link>
            <Link href="/examples" className="transition-colors hover:text-blue-600">
              উদাহরণ
            </Link>
            <Link href="/blog" className="transition-colors hover:text-blue-600">
              ব্লগ
            </Link>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <BookOpen className="mr-2 h-4 w-4" />
              <span className="font-bold">ML Engineer বাংলা</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/docs/introduction"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-blue-600"
                >
                  ডকুমেন্টেশন
                </Link>
                <Link
                  href="/roadmap"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-blue-600"
                >
                  রোডম্যাপ
                </Link>
                <Link
                  href="/examples"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-blue-600"
                >
                  উদাহরণ
                </Link>
                <Link href="/blog" onClick={() => setIsOpen(false)} className="transition-colors hover:text-blue-600">
                  ব্লগ
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="খুঁজুন..." className="pl-8 md:w-[300px] lg:w-[400px]" />
            </div>
          </div>
          <nav className="flex items-center">
            <Button asChild variant="ghost" size="sm">
              <Link href="/docs/introduction">শুরু করুন</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
