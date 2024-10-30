'use client'

import * as React from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, CartesianGrid, XAxis } from "recharts";
import {
  Bot,
  Calendar,
  Plus,
  Receipt,
  Timer,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data - replace with real data
const operationsData = [
  { date: "Jan", operations: 125 },
  { date: "Feb", operations: 147 },
  { date: "Mar", operations: 162 },
  { date: "Apr", operations: 158 },
  { date: "May", operations: 184 },
  { date: "Jun", operations: 196 },
]

const recentActivity = [
  {
    id: 1,
    type: "automation",
    title: "Email Sequence Updated",
    description: "Modified follow-up sequence timing",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "meeting",
    title: "Strategy Call Scheduled",
    description: "Meeting with John Doe",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    type: "task",
    title: "New Task Created",
    description: "Website automation setup",
    timestamp: "1 day ago",
  },
]

export default function DashboardPage() {
  const [progress, setProgress] = React.useState(66)

  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Automations</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Operations</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,429</div>
            <p className="text-xs text-muted-foreground">
              +201 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Operations Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Operations Usage</CardTitle>
            <CardDescription>Your monthly operations usage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                operations: {
                  label: "Operations",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={operationsData}>
                  <Line
                    type="monotone"
                    dataKey="operations"
                    strokeWidth={2}
                    activeDot={{
                      r: 8,
                    }}
                  />
                  <Tooltip content={<ChartTooltipContent />} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        
        <Card>
          <CardHeader>
            <CardTitle>Operations Limit</CardTitle>
            <CardDescription>Monthly operations usage limit</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div>Used Operations</div>
                <div className="text-muted-foreground">1,429 / 2,000</div>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <div className="rounded-lg border bg-muted/50 p-4">
              <div className="text-sm font-medium">Tip</div>
              <div className="text-sm text-muted-foreground">
                You are using 66% of your monthly operations limit. Consider upgrading your plan if you need more operations.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent ACtivity and Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest automation activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">
                    {activity.timestamp}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button className="w-full justify-start gap-2">
                <Plus className="h-4 w-4" />
                New Automation Task
              </Button>
              <Button className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Meeting
              </Button>
              <Button className="w-full justify-start gap-2">
                <Receipt className="h-4 w-4" />
                View Recent Invoices
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}