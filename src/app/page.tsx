"use client";

import RoomItem from "@/components/RoomItem";
import RoomItemSkeleton from "@/components/RoomItemSkeleton";
import { Button } from "@/components/ui/button";
import { LIST_MORE_IDEAS } from "@/constants";
import { roomService } from "@/services";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [selected, setSelected] = useState("all");
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<MetaData>();
  const [data, setData] = useState<IRoom[]>([]);
  const [loading, setLoading] = useState(true);
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
        if (entries[0].isIntersecting && !loading && (!meta || page < meta.totalPages)) {
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
        limit: 9,
        page: page,
      });

      if (res.data) {
        if (page > 1) {
          setData([...data, ...res.data.data]);
        } else {
          setData(res.data.data);
        }

        setMeta(res.data.meta);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">More ideas and inspiration</h1>

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
          {data.map((item) => {
            return <RoomItem key={item.id} data={item} />;
          })}
          {loading && (
            <>
              {[...Array(6)].map((_, index) => {
                return <RoomItemSkeleton key={index} />;
              })}
            </>
          )}
        </div>
        <div ref={checkpointRef} className="h-10"></div>
      </div>
    </div>
  );
}
