import { Link, useLocation } from "react-router-dom"
import { FaTable, FaUser, FaCog } from "react-icons/fa"

const nav = [
  { name: "Dashboard", path: "/dashboard", icon: <FaTable /> },
  { name: "Users", path: "/users", icon: <FaUser /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
]

export default function Sidebar() {
  const loc = useLocation()
  return (
    <aside className="w-56 min-h-screen bg-white border-r border-zinc-200 py-6 flex flex-col">
      <div className="px-6 font-extrabold text-2xl text-blue-600 mb-10">SimpleApp</div>
      <nav className="flex flex-col gap-2">
        {nav.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-5 py-3 rounded-lg transition 
              ${loc.pathname === item.path ? "bg-blue-100/90 text-blue-800 font-semibold" : "text-zinc-600 hover:bg-zinc-100"}`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}