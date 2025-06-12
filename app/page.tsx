import GetStartedButton from "./components/GetStartedButton";
import FallingCircles from "@/components/animation/FallingCircles";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 overflow-hidden px-4 sm:px-6">
      <FallingCircles />

      <div className="absolute top-0 left-0 w-24 h-24 bg-white/15 rounded-full blur-sm z-0"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-md z-0"></div>
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full blur-sm z-0"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/25 rounded-full blur-sm z-0"></div>

      <div className="z-10 backdrop-blur-md bg-white/60 dark:bg-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl max-w-3xl w-full text-center border border-white/30">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Welcome to your{" "}
          <strong className="text-indigo-700 dark:text-indigo-300">
            Dashboard
          </strong>
        </h1>
        <p className="text-slate-700 dark:text-slate-300 mb-8 text-lg">
          Your personal space to manage, explore, and grow.
        </p>
        <GetStartedButton />
      </div>
    </div>
  );
}
