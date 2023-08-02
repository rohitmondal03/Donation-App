import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Dashboard = () => {
  return (
    <div className="h-screen text-center flex items-center md:flex-row justify-center gap-x-24 md:px-28 sm:flex-col sm:px-10 sm:gap-y-7">
      <Card>
        <CardHeader>
          <CardTitle>Yearly Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription> convenient way to access the current auth state. This helper provides the minimal information needed for data</CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>One Time Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription> convenient way to access the current auth state. This helper provides the minimal information needed for data-</CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard