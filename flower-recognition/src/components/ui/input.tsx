import * as React from "react";
import { cn } from "@/auth/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[#436f53] placeholder:text-[#9bbf9e] selection:bg-[#b8d8ba] selection:text-[#3e5e3b] dark:bg-[#445a42]/30 border-[#a9c5a5] flex h-9 w-full min-w-0 rounded-lg border bg-white px-3 py-1 text-base shadow-sm transition-colors outline-none",
        "focus-visible:border-[#7aac78] focus-visible:ring-[#7aac78]/60 focus-visible:ring-[3px]",
        "aria-invalid:ring-[#de6b6b]/20 dark:aria-invalid:ring-[#de6b6b]/40 aria-invalid:border-[#de6b6b]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input }
