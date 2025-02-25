"use client";

import { VideoEnum } from "@/assets";
import RoomItem from "@/components/RoomItem";
import RoomItemAds from "@/components/RoomItemAds";
import RoomItemSkeleton from "@/components/RoomItemSkeleton";
import { Button } from "@/components/ui/button";
import { LIST_MORE_IDEAS } from "@/constants";
import { roomService } from "@/services";
import { createArray, fibonacciInRange } from "@/utils";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [selected, setSelected] = useState("all");
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<MetaData>();
  const [data, setData] = useState<IRoom[]>([]);
  const [loading, setLoading] = useState(false);
  const checkpointRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      handleGetMoreIdeas();
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !loading &&
          (!meta || page < meta.totalPages)
        ) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "180px",
        threshold: 0.1,
      }
    );

    if (checkpointRef.current) {
      observer.observe(checkpointRef.current);
    }

    return () => {
      if (checkpointRef.current) {
        observer.unobserve(checkpointRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleGetMoreIdeas = async () => {
    try {
      if (meta && page > meta.totalPages) return;
      if (loading) return;
      setLoading(true);
      const res = await roomService.getRoomList({
        type: selected,
        limit: handleCalculateLimit(page),
        page: page,
      });

      if (res.data) {
        const startNumber = 9 * (page - 1);
        const endNumber = 9 * page - 1;
        const fibonacciIndexes = fibonacciInRange(startNumber, endNumber);
        const arrayNumber = createArray(startNumber, endNumber);
        const customData: IRoom[] = page == 1 ? [] : [...data];

        let count = 0;

        arrayNumber.forEach((_, index) => {
          if (fibonacciIndexes.includes(arrayNumber[index])) {
            customData.push({
              id: `ads-${arrayNumber[index]}`,
              altText: `ads-${arrayNumber[index]}`,
              type: "ads",
              _id: null,
              url: null,
              index: null,
              createdAt: null,
              updatedAt: null,
              __v: null,
              products: null,
            });
          } else {
            if (res.data.data[count]) {
              customData.push(res.data.data[count]);
              count++;
            }
          }
        });
        setData(customData);

        setMeta(res.data.meta);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCalculateLimit = (page: number) => {
    const startNumber = 9 * (page - 1) + 1;
    const endNumber = 9 * page;

    return 9 - fibonacciInRange(startNumber, endNumber).length;
  };

  return (
    <div>
      <div className="mt-8 w-full">
        <video className="w-full aspect-video" width="100%" height="auto" controls>
          <source src={VideoEnum.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1 className="text-2xl font-bold mt-24">More ideas and inspiration</h1>
      <div className="mt-8 flex gap-4">
        {LIST_MORE_IDEAS.map((item) => {
          return (
            <Button
              onClick={() => {
                setSelected(item.search);
                setPage(1);
              }}
              className={`rounded-2xl bg-gray-100 hover:bg-gray-300 ${
                selected == item.search &&
                "border-solid border-[2px] border-black"
              }`}
              variant={"outline"}
              key={item.search}
            >
              <span className="text-xs font-semibold">{item.title}</span>
            </Button>
          );
        })}
      </div>
      <div className="mt-10">
        <div className="Grid-module_grid3">
          {data.map((item, index) => {
            if (item?.type === "ads") {
              return <RoomItemAds key={index} data={item} />;
            } else {
              return <RoomItem key={index} data={item} />;
            }
          })}
          {loading && (
            <>
              {[...Array(6)].map((_, index) => {
                return <RoomItemSkeleton key={index} />;
              })}
            </>
          )}
        </div>
        {data.length > 0 && <div ref={checkpointRef} className="h-10"></div>}
      </div>
    </div>
  );
}
