"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";

// Define form validation schema using zod
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const signupSchema = loginSchema.extend({
  passwordConfirmation: z.string().min(6, "Passwords must be at least 6 characters."),
}).refine(data => data.password === data.passwordConfirmation, {
  message: "Passwords do not match.",
  path: ["passwordConfirm"],
})

export default function Portal() {
  const { theme, setTheme } = useTheme();
  const [isSignUp, setIsSignUp] = React.useState(false);
  const router = useRouter();

  // Initialize form with react-hook-form and zod validation
  const form = useForm({
    resolver: zodResolver(isSignUp ? signupSchema : loginSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: ""
    },
  });

  // Handle form submission
  const onSubmit = async (values) => {
    try {
      if (isSignUp) {
        // Handle signup
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // If signup is successful, attempt to sign in
          const result = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
          });

          if (result.ok) {
            router.push('/dashboard');
          } else {
            form.setError('root', { message: 'Failed to log in after signup. Please try logging in manually.' });
          }
        } else {
          const data = await response.json();
          form.setError('root', { message: data.message || 'Signup failed. Please try again.' });
        }
      } else {
        // Handle login
        const result = await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        if (result.ok) {
          router.push('/dashboard');
        } else {
          form.setError('root', { message: 'Invalid email or password.' });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      form.setError('root', { message: 'An error occurred. Please try again.' });
    }
  };

  // Toggle Form
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column - Hero Section */}
      <div className="bg-black text-white p-8 flex flex-col justify-between w-full md:w-1/2">
        <div className="flex items-center space-x-2 mb-12">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="text-2xl font-bold">Flow Fusion AI</span>
        </div>
        <div>
          <blockquote className="text-lg italic">"This library saved me countless hours..."</blockquote>
          <cite className="block mt-2 text-sm">- Sofia Davis</cite>
        </div>
      </div>

      {/* Right Column - Login/Signup Section */}
      <div className="flex-1 p-8 flex items-center justify-center bg-white dark:bg-black">
        <Card className="w-full max-w-md border border-gray-300 dark:border-gray-700">
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">{isSignUp ? "Sign Up" : "Login"}</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 transition dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            <CardDescription>
              {isSignUp ? "Create an account to get started" : "Enter your email and password to login"}
            </CardDescription>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {isSignUp && (
                  <FormField
                    control={form.control}
                    name="passwordConfirmation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </Button>
                <Button 
                  variant="link" 
                  type="button"
                  onClick={toggleForm}
                  className="w-full"
                >
                  {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
