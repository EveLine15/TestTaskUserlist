import GetStartedButton from "./components/GetStartedButton";
import FallingCircles from "@/components/animation/FallingCircles";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 px-4 sm:px-6">
      <FallingCircles />

      <div className="absolute top-0 left-0 z-0 h-24 w-24 rounded-full bg-white/15 blur-sm"></div>
      <div className="absolute top-0 right-0 z-0 h-32 w-32 rounded-full bg-white/20 blur-md"></div>
      <div className="absolute bottom-0 left-0 z-0 h-28 w-28 rounded-full bg-white/10 blur-sm"></div>
      <div className="absolute right-0 bottom-0 z-0 h-16 w-16 rounded-full bg-white/25 blur-sm"></div>

      <div className="z-10 w-full max-w-3xl rounded-2xl border border-white/30 bg-white/60 p-6 text-center shadow-2xl backdrop-blur-md transition-transform duration-200 ease-in-out hover:-translate-y-1 sm:p-8 md:p-10">
        <h1 className="mb-6 text-4xl leading-tight font-bold text-slate-900 sm:text-5xl">
          Welcome to your <strong className="text-indigo-700">Dashboard</strong>
        </h1>
        <p className="mb-8 text-lg text-slate-700">
          Your personal space to manage, explore, and grow.
        </p>
        <GetStartedButton />
      </div>
    </div>
  );
}
