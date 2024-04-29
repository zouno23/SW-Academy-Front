import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export function LessonsTable({ props }: { props: any }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Lesson</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="hidden md:table-cell">Documents</TableHead>
          <TableHead className="hidden md:table-cell">Streaming</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.map((item: any) => {
          console.log(item);
          return (
            <TableRow>
              <TableCell className="font-medium">{item?.Title}</TableCell>
              <TableCell>{item?.Description}</TableCell>
              <TableCell className="hidden md:table-cell">
                {item?.Documents?.length || 0}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {item?.Streamings?.length || 0}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
