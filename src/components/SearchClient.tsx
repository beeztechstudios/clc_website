"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchClient() {
  const [q, setQ] = useState("");

  return (
    <div className="p-4 border-b border-gray-200">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search Articles"
        className="w-full border px-3 py-2 rounded-md text-sm"
      />

      {q.length > 2 && (
        <Link
          href={`/search?q=${encodeURIComponent(q)}`}
          className="text-xs text-[#163C0F] underline mt-2 block"
        >
          View Results
        </Link>
      )}
    </div>
  );
}
