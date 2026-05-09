"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

interface CustomProps extends React.ComponentPropsWithRef<
  typeof ProgressPrimitive.Root
> {
  indicatorColor?: string;
}

function Progress({
  className,
  value,
  indicatorColor = "bg-primary",
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & CustomProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "size-full flex-1 bg-primary transition-all",
          indicatorColor,
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
