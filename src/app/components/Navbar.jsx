"use client";

import React, { useState } from "react"
import Link from "next/link"
import { Menu, ArrowRight } from "lucide-react"

import { ModeToggle } from "@/components/ui/themeToggle";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#case-studies" },
  { name: "Services", href: "/how-it-works" },
  { name: "Pricing", href: "/blog" },
  { name: "Case Studies", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 19H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Flow Fusion AI
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/login" passHref>
                <Button variant="outline" className="text-white hover:bg-teal-500 font-bold py-2 px-4 rounded-md flex items-center">
                  Client Login
                </Button>
              </Link>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md flex items-center">
                Book A call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-gray-900">
                <div className="flex flex-col space-y-4 mt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center">
                    Book intro call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}