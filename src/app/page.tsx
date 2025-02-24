"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HomePage() {
  const [selected, setSelected] = useState("all");

  const LIST_MORE_IDEAS = [
    {
      title: "All",
      search: "all",
    },
    {
      title: "Bedroom",
      search: "bedroom",
    },
    {
      title: "Living room",
      search: "living-room",
    },
    {
      title: "Kitchen",
      search: "kitchen",
    },
    {
      title: "Workspace",
      search: "workspace",
    },
    {
      title: "Outdoor",
      search: "outdoor",
    },
    {
      title: "Badroom",
      search: "badroom",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">More ideas and inspiration</h1>

      <div className="mt-8 flex gap-4">
        {LIST_MORE_IDEAS.map((item) => {
          return (
            <Button
              onClick={() => setSelected(item.search)}
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
    </div>
  );
}
