import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
        <div className="max-w-[1440px] mx-auto p-6 space-y-7">
          <div className="space-y-4">
            <Skeleton className="h-10 w-1/3" />
          </div>
    
          <div className="grid grid-cols-1 gap-8">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
          </div>
        </div>
  )
}
