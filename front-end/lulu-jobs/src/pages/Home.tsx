import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import ResumeTemplate from "../components/ResumeTemplate";
import { normalizeResumeData } from "../utils/resumeUtils";

const exampleData = normalizeResumeData({
  name: "Mr. X",
  role: "Full Stack Developer",
  email: "mrx@example.com",
  github: "mrx-dev",
  linkedin: "mrx-pro",
  summary: "Detail-oriented Full Stack Developer specializing in backend-heavy architecture and modern web applications. Passionate about building scalable, high-performance systems and continuously expanding expertise in modern development tools.",
  skills: "Languages: JavaScript, TypeScript\nBackend Frameworks & Runtimes: Node.js\nDatabases & ORMs: PostgreSQL, Prisma\nDevOps & Infrastructure: Docker",
  experience: "SMS Organization — Full Stack Developer (Present)\n• Develop and maintain full-stack applications.\n• Optimize database schemas.\n• Collaborate within the organization.",
  projects: "Begena — Song Streaming Web Application\n• Engineered a full-stack music streaming platform.\n• Built a robust backend utilizing Node.js.\n• Implemented efficient database architecture."
});


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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)] py-6 md:py-12 px-6 max-w-7xl mx-auto">

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
              to="/Signup"
              className="bg-white dark:bg-gray-800 border-2 border-green-500 text-green-600 dark:text-green-400 px-8 py-4 rounded-xl font-bold hover:bg-green-50 dark:hover:bg-gray-700 transition-all shadow-lg active:scale-95 no-underline text-center"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="w-full max-w-lg lg:max-w-md opacity-0 animate-fade-up animation-delay-600 justify-self-center lg:justify-self-end">
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl border-2 border-green-100 dark:border-green-900/30 overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-500 max-h-[500px] md:max-h-[600px]">
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 opacity-5"></div>
            
            {/* Scaled Resume Preview */}
            <div className="h-full w-full flex justify-center overflow-hidden bg-gray-50/30 dark:bg-gray-900/30">
              <div className="transform scale-[0.42] md:scale-[0.48] lg:scale-[0.52] origin-top shadow-2xl pointer-events-none select-none">
                <ResumeTemplate data={exampleData} />
              </div>
            </div>



            {/* Overlay Gradient for Fade effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Home;

