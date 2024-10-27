"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column - Hero Section */}
      <div className="bg-black text-white p-8 flex flex-col justify-between w-full md:w-1/2">
        <div className="flex items-center space-x-2 mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="text-2xl font-bold">Flow Fusion AI</span>
        </div>
        <div>
          <blockquote className="text-lg italic">
            "This library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever before."
          </blockquote>
          <cite className="block mt-2 text-sm">- Sofia Davis</cite>
        </div>
      </div>

      {/* Right Column - Login Section */}
      <div className="flex-1 p-8 flex items-center justify-center bg-white dark:bg-black">
        <Card className="w-full max-w-md border border-gray-300 dark:border-gray-700">
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">Login</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                className="border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                className="border-gray-300 dark:border-gray-600"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
