"use client";

import dynamic from "next/dynamic";

const SmoothScroller = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default function ClientSmoothScroller() {
  return <SmoothScroller />;
}
