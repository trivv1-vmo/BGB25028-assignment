import { Skeleton } from "./ui/skeleton";

const RoomItemSkeleton = () => {
  return (
    <Skeleton className="Grid-module_gridItem group relative p-4 rounded-lg min-h-[567px]">
      <div className="w-full h-96 bg-gray-300 rounded-lg"></div>
      <div className="mt-2 w-3/4 h-4 bg-gray-300 rounded"></div>
      <div className="mt-2 w-1/2 h-4 bg-gray-300 rounded"></div>
      <div className="mt-2 w-1/4 h-4 bg-gray-300 rounded"></div>
    </Skeleton>
  );
};

export default RoomItemSkeleton;