import { Card } from "@/components/ui/card"
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table"
export default function Users() {
  const users = [
    { username: "muse1", name: "Muse Abdi", email: "muse1@email.com", status: "Active" },
    { username: "ahmed01", name: "Ahmed Abdi", email: "ahmed01@email.com", status: "Inactive" },
    { username: "Mohamed", name: "mohamed dacar", email: "mohameddacarmohumed@email.com", status: "Active" },
    // ...mock users
  ]
  return (
    <div className="p-10">
      <Card className="p-8">
        <div className="text-xl font-bold mb-5 text-blue-600">User List</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map(u => (
              <TableRow key={u.username}>
                <TableCell>{u.username}</TableCell>
                <TableCell>{u.name}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}