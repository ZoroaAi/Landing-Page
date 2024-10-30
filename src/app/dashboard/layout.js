'use client'

import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { CustomSidebar } from "./Sidebar"
import { SidebarProvider } from "../components/ui/sidebar"


export default function DashboardLayout({ children }) {
  const { data: session } = useSession()
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="flex w-full h-screen overflow-hidden bg-background">
        <CustomSidebar session={session} pathname={pathname} />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </SidebarProvider>
  )
}