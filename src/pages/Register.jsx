import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "", confirm: "" })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError("")
    setSuccess("")
  }
  async function handleSubmit(e) {
    e.preventDefault()
    if (form.password !== form.confirm) {
      setError("Passwords do not match")
      return
    }
    // Replace with real backend!
    setSuccess("Account created!")
    setTimeout(() => navigate("/login"), 1000)
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
      <Card className="max-w-md w-full mx-auto p-8 flex flex-col gap-6 shadow-xl border border-zinc-200">
        <div className="text-center font-bold text-2xl text-blue-600 mb-2">SimpleApp</div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Input
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={handleChange}
            required
          />
          {error && <div className="text-red-500 text-center text-sm">{error}</div>}
          {success && <div className="text-green-600 text-center text-sm">{success}</div>}
          <Button type="submit" className="w-full">Create Account</Button>
        </form>
        <div className="text-center text-sm mt-3">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  )
}