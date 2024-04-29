import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { LessonsTable } from "./LessonsTable";
import { DocumentsTable } from "./DocumentsTable";
import { ReviewsTable } from "./ReviewsTable";

export function CourseResourcesTable({ props }: { props: any }) {
  return (
    <div className="border shadow-sm rounded-lg">
      <Tabs defaultValue="lessons">
        <TabsList>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="Documents">Resources</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="lessons">
          <LessonsTable props={props?.Lessons} />
        </TabsContent>
        <TabsContent value="Documents">
          <DocumentsTable props={props?.Lessons} />
        </TabsContent>
        <TabsContent value="reviews">
          <ReviewsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
