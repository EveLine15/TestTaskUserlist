import Link from "next/link";
import { UserRoundX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-900">
      <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-800 p-10 shadow-xl">
        <h2 className="m-2 text-4xl font-semibold text-slate-200">Not Found</h2>
        <p className="m-4 text-xl font-medium text-slate-200">
          Could not find requested resource
        </p>
        <UserRoundX className="mb-4 h-15 w-15 text-slate-200" />
        <Link
          href={"/users"}
          className="flex h-14 items-center rounded-lg bg-slate-500 p-2 px-6 text-xl text-gray-100 duration-200 hover:bg-slate-700 sm:px-8 sm:text-2xl"
        >
          To Dashboard
        </Link>
      </div>
    </div>
  );
}
