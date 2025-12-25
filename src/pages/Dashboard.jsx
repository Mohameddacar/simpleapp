import { Card } from "@/components/ui/card"
export default function Dashboard() {
  return (
    <div className="p-10 flex flex-col gap-7">
      <div className="text-2xl font-bold mb-4 text-blue-700">Dashboard Overview</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-7 text-center">Users<br /><span className="text-3xl font-bold text-blue-600">3</span></Card>
        <Card className="p-7 text-center">Tasks<br /><span className="text-3xl font-bold text-blue-600">8</span></Card>
        <Card className="p-7 text-center">Revenue<br /><span className="text-3xl font-bold text-blue-600">$100</span></Card>
      </div>
    </div>
  )
}