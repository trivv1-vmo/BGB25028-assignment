import * as React from "react";

import { cn } from "@/libs/clsx/utils";

const Divider = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("w-full h-[1px] bg-border my-2", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";

export { Divider };
