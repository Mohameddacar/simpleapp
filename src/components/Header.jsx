export default function Header() {
  const username = localStorage.getItem('username') || "User"
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-white border-b border-zinc-200">
      <div />
      <div className="font-medium text-lg text-blue-600">{username}</div>
    </header>
  )
}