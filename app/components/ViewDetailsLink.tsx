"use client";

import Link from "next/link";

import { Eye } from "lucide-react";

export default function ViewDetailsLink({
    userId
} : {
    userId: string
}) {

  return (
    <Link 
      className="flex w-full justify-center items-center bg-gradient-to-l from-indigo-600 via-purple-500 to-pink-400 text-white px-5 py-2.5 rounded-lg font-medium transition-all border-none cursor-pointer shadow-md hover:scale-102" 
      href={`/users/${userId}`}>
      <Eye className="w-5 h-5"/>
      <span className="ml-2">View Details</span>
    </Link>
  );
}
