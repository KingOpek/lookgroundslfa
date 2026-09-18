import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-sm border border-border bg-elevated px-3 text-base text-fg placeholder:text-faint focus-visible:border-primary",
        className,
      )}
      {...props}
    />
  );
}
