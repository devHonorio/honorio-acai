import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Skeleton className="h-80 w-64 border"></Skeleton>
    </div>
  );
}
