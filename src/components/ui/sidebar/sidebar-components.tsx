import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { SidebarContext } from "./sidebar-context"

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

export function SidebarContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-4", className)} {...props} />
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