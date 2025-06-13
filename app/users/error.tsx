'use client' // Error boundaries must be Client Components
import { Button } from "@/components/ui/button"
import { MonitorOff } from "lucide-react"
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex flex-col justify-center items-center p-10 rounded-2xl">
            <h2 className="text-4xl font-semibold text-slate-200 m-2">An error has occurred</h2>
            <p className="text-xl font-medium text-slate-200 m-4">{error.message}</p>
            <MonitorOff className="w-15 h-15 text-slate-200 mb-4"/>
            <Button className="bg-slate-500" size={"lg"} onClick={() => reset()}>Try again</Button>
        </div>
    </div>
  )
}