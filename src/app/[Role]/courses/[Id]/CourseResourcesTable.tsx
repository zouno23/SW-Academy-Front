import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { LessonsTable } from "./LessonsTable";
import { DocumentsTable } from "./DocumentsTable";
import { ReviewsTable } from "./ReviewsTable";
import { GetRole } from "@/app/Actions/RoleCookieManagement";

export function CourseResourcesTable({ props }: { props: any }) {
  const role = GetRole();
  return (
    <div className="border shadow-sm rounded-lg">
      <Tabs defaultValue="lessons">
        <TabsList>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          {(props.Progress >= 0 || role === "Teacher") && (
            <TabsTrigger value="Documents">Resources</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="lessons">
          <LessonsTable
            props={props?.Lessons}
            CompletedLessons={props?.CompletedLessons}
            role={role || ""}
            state={props.Progress != undefined ? "Owned" : ""}
          />
        </TabsContent>
        {(props.Progress >= 0 || role === "Teacher") && (
          <TabsContent value="Documents">
            <DocumentsTable props={props?.Lessons} />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
