import GetStartedButton from "./components/GetStartedButton";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6">
      <div className="flex flex-col items-center justify-center bg-card rounded-lg p-4 sm:p-6 md:p-8 max-w-3xl w-full text-center shadow-md">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Welcome to user's <strong>dashboard</strong>
        </h1>
        <GetStartedButton />
      </div>
    </div>
  );
}
