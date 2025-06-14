"use client";
import { Button } from "@/components/ui/button";
import { MonitorOff } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-900">
      <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-800 p-10 shadow-xl">
        <h1 className="m-2 text-center text-4xl font-semibold text-slate-200">
          An error has occurred
        </h1>
        <p className="m-4 text-3xl font-bold text-slate-200">{error.message}</p>
        <MonitorOff className="mb-4 h-12 w-12 text-slate-200" />
        <Button
          className="bg-slate-500 hover:bg-slate-600"
          size={"lg"}
          onClick={() => reset()}
        >
          Reload page
        </Button>
      </div>
    </div>
  );
}
