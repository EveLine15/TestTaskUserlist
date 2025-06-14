"use client";

import Link from "next/link";

import { Eye } from "lucide-react";

export default function ViewDetailsLink({ userId }: { userId: string }) {
  return (
    <Link
      className="flex w-full cursor-pointer items-center justify-center rounded-lg border-none bg-gradient-to-l from-indigo-600 via-purple-500 to-pink-400 px-5 py-2.5 font-medium text-white shadow-md transition-all hover:scale-102"
      href={`/users/${userId}`}
    >
      <Eye className="h-5 w-5"/>
      <span className="ml-2">View Details</span>
    </Link>
  );
}
