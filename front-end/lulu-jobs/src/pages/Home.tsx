import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
      {/* Logo Container */}
      <div className="absolute top-4 left-6 md:top-8 md:left-10 z-50">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black tracking-tighter text-black dark:text-white hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer no-underline"
        >
          lulu
        </Link>
      </div>

      {/* Top Right Actions */}
      <div className="absolute top-4 right-6 md:top-8 md:right-10 z-50 flex items-center space-x-4">
        <ThemeToggle />
        <Link
          to="/Auth"
          className="text-xl md:text-2xl font-black tracking-tighter text-black dark:text-white hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer no-underline"
        >
          login
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center min-h-[calc(100vh-100px)] py-12 px-6">
        {/* Left Column: Text & Buttons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-xl">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight dark:text-white">
              Build your <span className="text-green-500">Resume</span>
              <br className="hidden lg:block" /> with{" "}
              <span className="underline decoration-green-500 underline-offset-8">
                Lulu
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 opacity-0 animate-fade-up animation-delay-200">
            Get hired faster with{" "}
            <span className="font-bold text-green-500">Lulu</span>. Create a
            professional resume and landing your dream job with more ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-fade-up animation-delay-400">
            <Link 
              to="/Dashboard" 
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-xl shadow-green-500/30 active:scale-95 no-underline text-center"
            >
              Create Free Resume
            </Link>
            <Link
              to="/Dashboard"
              className="bg-white dark:bg-gray-800 border-2 border-green-500 text-green-600 dark:text-green-400 px-8 py-4 rounded-xl font-bold hover:bg-green-50 dark:hover:bg-gray-700 transition-all shadow-lg active:scale-95 no-underline text-center"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Right Column: Image/Visual */}
        <div className="w-full max-w-lg opacity-0 animate-fade-up animation-delay-600">
          <div className="relative aspect-square bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl border-2 border-green-100 dark:border-green-900/30 flex items-center justify-center p-8 shadow-2xl">
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 opacity-10 rounded-3xl"></div>
            <div className="relative text-center space-y-4">
              <div className="w-24 h-24 bg-green-500/10 rounded-full mx-auto flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="font-medium text-gray-400 dark:text-gray-500">
                Your Resume Visual here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

