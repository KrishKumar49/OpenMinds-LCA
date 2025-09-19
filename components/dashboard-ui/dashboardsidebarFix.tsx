"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Recycle, BarChart3, Activity, Database, FileText, Settings, User } from "lucide-react"

interface SidebarProps {
  className?: string
}

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        href: "/Dashboard",
        icon: BarChart3,
        label: "Overview",
      },
      {
        href: "/Dashboard/statistics",
        icon: Activity,
        label: "Statistics",
      },
      {
        href: "/Dashboard/material",
        icon: Database,
        label: "Materials",
      },
      {
        href: "/Dashboard/reports",
        icon: FileText,
        label: "Reports",
      },
    ],
  },
  {
    title: "GENERAL",
    items: [
      {
        href: "/settings",
        icon: Settings,
        label: "Settings",
      },
      {
        href: "/security",
        icon: User,
        label: "Security",
      },
    ],
  },
]

export function DashboardSidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={`fixed left-0 top-0 w-64 h-screen bg-gradient-to-b from-green-800 to-green-900 text-white overflow-y-auto z-50 ${className || ""}`}
    >
      <div className="p-6">
        {/* Brand Section */}
        <div className="flex items-center space-x-3 mb-8">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-11 h-11 rounded-lg bg-white/20 flex items-center justify-center overflow-hidden">
              <Recycle className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">OpenMines</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        {menuItems.map((section) => (
          <div key={section.title} className="mb-8">
            <p className="text-xs text-green-200 uppercase tracking-wider mb-4">{section.title}</p>
            <nav className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive ? "bg-white/10 text-white" : "text-green-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* User Profile */}
      <div className="absolute bottom-6 left-6 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
          <User className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-medium">LCA Expert</p>
          <p className="text-xs text-green-200">expert@circularlca.com</p>
        </div>
      </div>
    </div>
  )
}
