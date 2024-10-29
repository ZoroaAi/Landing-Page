'use client'

import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart, 
  Users, 
  ShoppingCart, 
  Activity,
  DollarSign,
  ArrowUpRight,
} from "lucide-react"

export default function Dashboard() {
  const { data: session } = useSession()
  const isAdmin = session?.user?.role === "admin"

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      icon: DollarSign,
      change: "+20.1%",
    },
    {
      title: isAdmin ? "Total Users" : "Active Subscriptions",
      value: isAdmin ? "1,234" : "2,350",
      icon: Users,
      change: "+10.1%",
    },
    {
      title: "Sales",
      value: "12,234",
      icon: ShoppingCart,
      change: "+19%",
    },
    {
      title: "Active Now",
      value: "573",
      icon: Activity,
      change: "+201",
    }
  ]

  const recentSales = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-gray-800 border border-gray-700 rounded-lg">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <p className="text-xs text-gray-400">
                    <span className="inline-flex items-center text-green-500">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      {stat.change}
                    </span>
                    {" "}from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] bg-gray-700 rounded-md flex items-center justify-center text-gray-400">
                  Chart placeholder
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentSales.map((sale, index) => (
                    <div key={index} className="flex items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-white">{sale.name}</p>
                        <p className="text-sm text-gray-400">{sale.email}</p>
                      </div>
                      <div className="ml-auto font-medium text-green-500">{sale.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          {isAdmin && (
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Admin Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">This section is only visible to admins.</p>
                <div className="mt-4 h-[200px] bg-gray-700 rounded-md flex items-center justify-center text-gray-400">
                  Admin chart placeholder
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="analytics">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Analytics Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Analytics content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Reports Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Reports content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Notifications Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Notifications content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}