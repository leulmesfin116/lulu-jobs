import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Logo Container */}
      <div className="absolute top-4 left-6 md:top-8 md:left-10 z-50">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black tracking-tighter text-black hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer no-underline"
        >
          lulu
        </Link>
      </div>

      {/* Login Link */}
      <div className="absolute top-4 right-6 md:top-8 md:right-10 z-50">
        <Link
          to="/Auth"
          className="text-2xl md:text-3xl font-black tracking-tighter text-black hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer no-underline"
        >
          login
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center min-h-[calc(100vh-100px)] py-12 px-6">
        {/* Left Column: Text & Buttons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-xl">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Build your{" "}
              <span className="text-green-500">Resume</span>
              <br className="hidden lg:block" /> with{" "}
              <span className="underline decoration-green-500 underline-offset-8">
                Lulu
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 opacity-0 animate-fade-up animation-delay-200">
            Get hired faster with <span className="font-bold text-green-500">Lulu</span>. 
            Create a professional resume and landing your dream job with more ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-fade-up animation-delay-400">
            <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-xl shadow-green-500/30 active:scale-95">
              Create Free Resume
            </button>
            <button className="bg-white border-2 border-green-500 text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all shadow-lg active:scale-95">
              Get started
            </button>
          </div>
        </div>

        {/* Right Column: Image/Visual */}
        <div className="w-full max-w-lg opacity-0 animate-fade-up animation-delay-600">
          <div className="relative aspect-square bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-100 flex items-center justify-center p-8 shadow-2xl">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] rounded-3xl"></div>
            <div className="relative text-center space-y-4">
               <div className="w-24 h-24 bg-green-500/10 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
               </div>
               <p className="font-medium text-gray-400">Your Resume Visual here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
