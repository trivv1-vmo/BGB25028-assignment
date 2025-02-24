interface RoomItemAdsProps {
  data: IRoom;
}

const RoomItemAds = ({ data }: RoomItemAdsProps) => {
  return (
    <div className="Grid-module_gridItem group relative p-4 rounded-lg min-h-[567px] flex items-center justify-center bg-gray-100">
      <h1>Advertisement {data?.altText}</h1>
    </div>
  );
};

export default RoomItemAds;