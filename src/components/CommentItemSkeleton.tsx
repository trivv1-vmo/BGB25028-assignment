import { Skeleton } from "./ui/skeleton";

const CommentItemSkeleton = () => {
  return (
    <div className="pb-6 border-b border-border mb-4">
      <div className="flex items-center gap-3">
        <Skeleton className="w-9 h-9 rounded-full" />
        <div className="flex items-center gap-2">
          <Skeleton className="w-20 h-3" />
          <div className="w-1 h-1 bg-border rounded-full"></div>
          <Skeleton className="w-20 h-3" />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <div className="w-9"></div>
        <Skeleton className="w-72 h-3" />
      </div>
    </div>
  )
}

export default CommentItemSkeleton;