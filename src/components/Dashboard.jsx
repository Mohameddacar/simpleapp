import { Card } from "@/components/ui/card"
export default function Dashboard() {
  const username = localStorage.getItem("username") || "User"
  return (
    <div className="p-12 flex flex-col items-center gap-8">
      <Card className="w-full max-w-lg mx-auto p-8 shadow-md">
        <h2 className="font-bold text-2xl text-blue-600 mb-2">Dashboard</h2>
        <p>Welcome, <span className="text-blue-600 font-semibold">{username}</span>! This is your dashboard.</p>
      </Card>
    </div>
  )
}