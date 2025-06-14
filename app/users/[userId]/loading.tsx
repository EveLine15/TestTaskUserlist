import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-[1440px] mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-12 w-1/4 max-[425px]:w-1/2"/>
      </div>

      <div className="grid w-full min-h-115 py-6 border rounded-lg shadow-sm bg-white dark:bg-slate-900">
        <div className="flex items-center space-x-4 p-6 mb-4 bg-gradient-to-r from-purple-500 to-pink-500">
          <Skeleton className="h-16 w-16 rounded-full bg-white/30"/>
          <div className="space-y-2 flex-1">
            <Skeleton className="h-6 w-1/3 max-[425px]:w-full"/>
            <Skeleton className="h-4 w-1/4"/>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pl-2">
          <div className="space-y-6 p-4 bg-white rounded-lg shadow-sm dark:bg-slate-900">
            <Skeleton className="h-6 w-1/2 mb-4"/> 
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/5"/>
              <Skeleton className="h-10 w-3/5"/>
              <Skeleton className="h-10 w-3/5"/>
            </div>
          </div>

          <div className="space-y-6 p-4 bg-white rounded-lg shadow-sm dark:bg-slate-900 pr-2">
            <Skeleton className="h-6 w-1/3 mb-4"/>
            <div className="space-y-3">
              <Skeleton className="h-8 w-2/3"/>
              <Skeleton className="h-8 w-2/3"/>
              <Skeleton className="h-8 w-1/2"/>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 space-y-6 p-4 bg-white rounded-lg shadow-sm dark:bg-slate-900 px-2">
            <Skeleton className="h-6 w-1/4 mb-4"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Skeleton className="h-12 w-full"/>
              <Skeleton className="h-12 w-full"/>
            </div>
            <Skeleton className="h-10 w-full"/>
          </div>
        </div>
      </div>
      
    </div>
  );
}
