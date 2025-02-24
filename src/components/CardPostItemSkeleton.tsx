import { Skeleton } from "./ui/skeleton";

const CardPostItemSkeleton = () => {
  return (
    <div className="rounded-xl p-4 w-full">
      <Skeleton className="w-full h-[240px] rounded-md" />
      <Skeleton className="w-16 h-4 mt-6" />
      <Skeleton className="mt-4 w-3/4 h-6" />
      <div className="mt-5 flex items-center">
        <Skeleton className="rounded-full w-9 h-9" />
        <Skeleton className="ml-3 w-20 h-4" />
        <Skeleton className="ml-5 w-20 h-4" />
      </div>
    </div>
  );
};

export default CardPostItemSkeleton;
