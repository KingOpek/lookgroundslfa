import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt=""
      width={80}
      height={103}
      className={cn("inline-block shrink-0 object-contain", className)}
    />
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="min-w-0">
      <span className="block font-display text-xl font-semibold leading-none tracking-wide text-fg sm:text-2xl">
        LOOKGROUND
      </span>
      {!compact && (
        <span className="mt-1 hidden text-[10px] uppercase tracking-[0.14em] text-muted sm:block">
          Street-level flood action
        </span>
      )}
    </span>
  );
}
