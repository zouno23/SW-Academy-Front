import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChartIcon,
  BookIcon,
  ClipboardListIcon,
  UserIcon,
} from "lucide-react";

function QuickActions() {
  return (
    <Card className="bg-white rounded-2xl p-4 dark:slate-900 border col-span-1 space-y-4 ">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <p className="text-md text-gray-500 dark:text-gray-400">
          Commonly used actions for managing the platform.
        </p>
      </CardHeader>
      <CardContent className="grid gap-4 grid-cols-1 p-4 *:w-full  place-items-center ">
        <Button size="sm" variant="outline">
          <UserIcon className="mr-2 h-4 w-4" />
          Add User
        </Button>
        <Button size="sm" variant="outline">
          <BookIcon className="mr-2 h-4 w-4" />
          Add Course
        </Button>
        <Button size="sm" variant="outline">
          <ClipboardListIcon className="mr-2 h-4 w-4" />
          Manage Enrollments
        </Button>
        <Button size="sm" variant="outline">
          <BarChartIcon className="mr-2 h-4 w-4" />
          View Analytics
        </Button>
      </CardContent>
    </Card>
  );
}

export default QuickActions;
