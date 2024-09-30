import React from "react";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#171717]">
      <div className="text-center">
        <h2 className="mb-4 flex items-center justify-center gap-x-2 text-2xl font-bold">
          <span>
            <TriangleAlert />
          </span>
          <span>Not Found</span>
        </h2>
        <p className="mb-8">Could not find requested resource</p>
        <Link
          href="/"
          className="inline-block rounded-xl border px-6 py-2 transition-colors hover:bg-gray-700">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
