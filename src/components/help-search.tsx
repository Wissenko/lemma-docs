"use client";

import { Search } from "lucide-react";
import { useSearchContext } from "fumadocs-ui/contexts/search";

export function HelpSearchButton({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();

  if (!enabled) return null;

  return (
    <button
      type="button"
      className={[
        "group inline-flex items-center border border-[#d9d7d1] bg-white text-left text-[#525252] shadow-sm transition hover:border-[#3d50ff] hover:text-[#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d50ff]",
        compact
          ? "h-10 rounded-lg px-3 text-sm"
          : "h-14 w-full max-w-2xl rounded-lg px-4 text-base",
        className,
      ].join(" ")}
      onClick={() => setOpenSearch(true)}
      aria-label="Search Lemma help"
    >
      <Search
        aria-hidden="true"
        className={compact ? "mr-2 h-4 w-4" : "mr-3 h-5 w-5"}
      />
      <span className="min-w-0 flex-1 truncate">
        Search for a workflow, page, or setting
      </span>
      {!compact ? (
        <span className="ml-3 hidden shrink-0 items-center gap-1 text-xs text-[#8a8a8a] sm:inline-flex">
          {hotKey.map((key, index) => (
            <kbd
              key={index}
              className="rounded-md border border-[#e6e3dd] bg-[#fbfbf8] px-1.5 py-0.5 font-mono text-[11px]"
            >
              {key.display}
            </kbd>
          ))}
        </span>
      ) : null}
    </button>
  );
}
