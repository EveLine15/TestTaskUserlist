import Link from 'next/link'
import { UserRoundX } from 'lucide-react'
 
export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex flex-col justify-center items-center p-10 rounded-2xl">
            <h2 className="text-4xl font-semibold text-slate-200 m-2">Not Found</h2>
            <p className="text-xl font-medium text-slate-200 m-4">Could not find requested resource</p>
            <UserRoundX className="w-15 h-15 text-slate-200 mb-4"/>
            <Link href={"/users"} className="bg-slate-500 p-2 rounded text-gray-100 h-14 flex items-center rounded-lg px-6 sm:px-8 text-xl sm:text-2xl duration-200 hover:bg-slate-700">To Dashboard</Link>
        </div>
    </div>
  )
}