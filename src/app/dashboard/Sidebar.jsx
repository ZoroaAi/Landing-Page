import Link from "next/link"
import { BarChart, Users, Package, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"

const menuItems = [
  { href: "/dashboard", label: "Overview", icon: BarChart },
  { href: "/dashboard/customers", label: "Customers", icon: Users },
  { href: "/dashboard/products", label: "Products", icon: Package },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export function Sidebar({ session, pathname }) {
  const isAdmin = session?.user?.role === "admin"

  const allMenuItems = isAdmin
    ? [...menuItems, { href: "/dashboard/admin", label: "Admin", icon: Settings }]
    : menuItems

  return (
    <SidebarComponent className="w-64 bg-gray-800 border-r border-gray-700">
      <SidebarHeader className="p-4">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-sm font-semibold text-gray-400">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {allMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 text-sm ${
                      pathname === item.href
                        ? "text-blue-400 bg-gray-700"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-gray-700"
              onClick={() => {
                // Add logout functionality here
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarRail>
    </SidebarComponent>
  )
}