import * as React from "react"
import { SidebarContext } from "./sidebar-context"

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