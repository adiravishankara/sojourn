"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sidebarVariants = cva(
  "fixed top-0 right-0 z-40 h-screen transition-transform bg-background border-l",
  {
    variants: {
      collapsed: {
        true: "translate-x-full",
        false: "translate-x-0",
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
)

const SidebarContext = React.createContext<{
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}>({
  collapsed: false,
  setCollapsed: () => {},
})

export function SidebarProvider({
  children,
  defaultCollapsed = false,
}: {
  children: React.ReactNode
  defaultCollapsed?: boolean
}) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <div className="min-h-screen flex w-full">
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export function Sidebar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { collapsed } = React.useContext(SidebarContext)

  return (
    <aside
      className={cn(sidebarVariants({ collapsed }), className)}
      {...props}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        {children}
      </div>
    </aside>
  )
}

export function SidebarTrigger() {
  const { collapsed, setCollapsed } = React.useContext(SidebarContext)

  return (
    <button
      className="p-2 rounded-lg hover:bg-gray-100"
      onClick={() => setCollapsed(!collapsed)}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={collapsed ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
        />
      </svg>
    </button>
  )
}

export function SidebarContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-4", className)} {...props} />
}

export function SidebarHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2", className)} {...props} />
}

export function SidebarGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2", className)} {...props} />
}

export function SidebarGroupLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      {...props}
    />
  )
}

export function SidebarGroupContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-1", className)} {...props} />
}

export function SidebarMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-1", className)} {...props} />
}

export function SidebarMenuItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />
}

export function SidebarMenuButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-lg hover:bg-muted",
        className
      )}
      {...props}
    />
  )
}

export function SidebarFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("absolute bottom-0 left-0 right-0 p-4", className)}
      {...props}
    />
  )
}
