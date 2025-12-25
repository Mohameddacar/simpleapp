import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const navigate = useNavigate()
  function handleChange(e) { setForm({...form, [e.target.name]:e.target.value}) }
  function handleSubmit(e) {
    e.preventDefault()
    if (form.username && form.password) {
      localStorage.setItem('username', form.username)
      navigate("/dashboard")
    } else {
      setError("Invalid credentials")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <Card className="max-w-md w-full p-10 space-y-8 flex flex-col shadow-lg">
        <div className="text-2xl font-bold text-center text-blue-600">SimpleApp</div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <Input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
          <Input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
        <div className="text-center text-sm">
          New here? <Link to="/register" className="text-blue-600 font-medium hover:underline">Create account</Link>
        </div>
      </Card>
    </div>
  )
}