'use client'

import * as React from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Cog,
  Bot,
  FolderKanban,
  Receipt,
  Calendar,
  BarChart3,
  HelpCircle,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Automations Management",
    icon: Bot,
    href: "/dashboard/automations",
  },
  {
    title: "Project Management",
    icon: FolderKanban,
    href: "/dashboard/projects",
  },
  {
    title: "Invoices & Billing",
    icon: Receipt,
    href: "/dashboard/billing",
  },
  {
    title: "Meetings & Scheduling",
    icon: Calendar,
    href: "/dashboard/meetings",
  },
  {
    title: "Reports & Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    title: "Support & Helpdesk",
    icon: HelpCircle,
    href: "/dashboard/support",
  },
  {
    title: "Settings & Preferences",
    icon: Cog,
    href: "/dashboard/settings",
  },
]

export function CustomSidebar({ session, pathname }) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <span className="font-semibold">Automation Portal</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="p-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2"
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          onClick={() => {
            // Add logout logic here
          }}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}