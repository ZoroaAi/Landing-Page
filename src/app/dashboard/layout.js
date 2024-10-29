'use client'

import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { Sidebar } from "./Sidebar"
import { SidebarProvider } from "../components/ui/sidebar"


export default function DashboardLayout({ children }) {
  const { data: session } = useSession()
  const pathname = usePathname()

  return (
    <SidebarProvider>
        <div className="flex h-screen overflow-hidden bg-gray-900">
          <Sidebar session={session} pathname={pathname} />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
    </SidebarProvider>
  )
}