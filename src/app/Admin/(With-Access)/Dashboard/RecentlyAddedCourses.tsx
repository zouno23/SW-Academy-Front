import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function RecentCourses() {
  const List = [1, 2, 3, 4, 5];
  return (
    <Card className="bg-white rounded-2xl p-4 dark:slate-900 border col-span-1 space-y-4">
      <CardHeader>
        <CardTitle>Recently Added Courses</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {List.map((item) => (
          <div className="flex items-center gap-4">
            <img
              alt="Course thumbnail"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/placeholder.svg"
              width="64"
            />
            <div>
              <h4 className="font-medium">Introduction to Web Development</h4>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                By John Doe
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default RecentCourses;
