import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
        <div className="max-w-[1440px] mx-auto p-6 space-y-7">
          <div className="space-y-4">
            <Skeleton className="h-10 w-1/3" />
          </div>
    
            <div className="grid w-full px-2 py-4 border rounded-lg shadow-sm bg-white dark:bg-slate-900">
              <Skeleton className="h-23 w-full mb-8" />

              <div className='flex flex-col gap-2'>
                <div className="flex gap-2 h-1/3 mb-10">
                  <Skeleton className="h-22 w-1/2" />
                  <Skeleton className="h-22 w-1/2" />
                </div>

                <div className='flex flex-col gap-2'>
                  <div className="flex gap-2">
                    <Skeleton className="h-10 w-1/2" />
                    <Skeleton className="h-10 w-1/2" />
                  </div>
                  
                    <Skeleton className="h-10 w-full" />
                </div>
              </div>

            </div>

          </div>
  )
}
