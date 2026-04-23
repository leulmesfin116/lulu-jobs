import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import ResumeTemplate from "../components/ResumeTemplate";
import { normalizeResumeData } from "../utils/resumeUtils";



function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    github: "",
    skills: "",
    experience: "",
    education: "",
    summary: "",
    role: "",
    projects: "",
  });



  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResume, setGeneratedResume] = useState<any>(null);
  const [error, setError] = useState("");
  const [showLivePreview, setShowLivePreview] = useState(false);


  const [stats] = useState({
    generatedCount: 12,
    lastGenerated: "2 hours ago",
    activeJobs: 5,
  });

  const [userName, setUserName] = useState("User");
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("userName");
    if (!isLoggedIn) {
      setError("first register to generate resume");
      return;
    }

    setIsGenerating(true);
    setError("");
    setGeneratedResume(null);

    // Simulate a brief "generation" period for premium feel
    setTimeout(() => {
      const data = normalizeResumeData(formData);
      setGeneratedResume(data);
      setIsGenerating(false);
      setShowLivePreview(false); // Hide draft preview once "generated"
    }, 1500);
  };


  const handleDownload = async () => {
    if (!generatedResume) return;

    try {
      const response = await fetch("/api/pdf/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(generatedResume),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${generatedResume.name.replace(/\s+/g, "_")}_Resume.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        setError("Failed to download PDF");
      }
    } catch (err) {
      console.error("Download error:", err);
      setError("An error occurred while downloading the PDF.");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      localStorage.removeItem("userName");
      navigate("/Auth");
    } catch (err) {
      console.error("Logout error:", err);
      // Fallback: clear local storage and redirect anyway
      localStorage.removeItem("userName");
      navigate("/Auth");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] flex flex-col items-center py-6 md:py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Navigation / Logo */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8 md:mb-12">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black tracking-tighter text-black dark:text-white hover:text-green-500 transition-all duration-300 no-underline"
        >
          lulu
        </Link>
        <div className="flex items-center space-x-3 md:space-x-4">
          <ThemeToggle />
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Welcome</span>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{userName}</span>
          </div>
          <div className="relative">
            <div 
              onClick={() => setShowLogoutMenu(!showLogoutMenu)}
              className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/30 cursor-pointer hover:scale-105 transition-all"
            >
              {userName.charAt(0).toUpperCase()}
            </div>
            
            {showLogoutMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 py-2 z-[100] animate-fade-down">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-6 py-3 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl space-y-8 md:space-y-12">
        {/* Main Form Card */}
        <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">

          <div className="bg-green-500 px-6 py-8 md:px-12 md:py-12">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Create Your Professional Resume
            </h1>
            <p className="text-green-50 text-sm md:text-lg mt-2 font-medium opacity-90">
              Fill in your details and let Lulu handle the rest.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Basic Info */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Professional Title</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Full Stack Developer"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Links */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">LinkedIn URL</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/johndoe"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">GitHub URL</label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/johndoe"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Detailed Info */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Professional Summary</label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  placeholder="Experienced software engineer with a focus on..."
                  rows={3}
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Technical Skills</label>

                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="React, TypeScript, Node.js..."
                  rows={3}
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Work Experience</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Software Engineer at Lulu (2020-Present)..."
                  rows={4}
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Education</label>
                <textarea
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="BSc in Computer Science, University of Life..."
                  rows={3}
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Featured Projects</label>
                <textarea
                  name="projects"
                  value={formData.projects}
                  onChange={handleChange}
                  placeholder="Begena — Song Streaming Web Application&#10;• Engineered a full-stack music streaming platform..."
                  rows={4}
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 border-transparent dark:text-white rounded-2xl focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 resize-none"
                />
              </div>
            </div>


            {error && (
              <div className="mx-6 md:mx-12 mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-2xl text-center text-sm font-bold">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isGenerating}
              className={`w-full text-white font-black py-4 rounded-2xl transition-all shadow-xl active:scale-[0.98] mt-4 flex items-center justify-center ${
                isGenerating 
                  ? "bg-green-400 cursor-not-allowed" 
                  : "bg-green-500 hover:bg-green-600 shadow-green-500/20"
              }`}
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                "Generate Resume"
              )}
            </button>

          </form>

          {/* Preview Toggle */}
          <div className="px-6 md:px-12 pb-4">
            <button
              onClick={() => setShowLivePreview(!showLivePreview)}
              className="text-xs font-bold text-gray-400 hover:text-green-500 transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${showLivePreview ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
              {showLivePreview ? "Hide Live Preview" : "Show Live Preview"}
            </button>
          </div>

          {/* Live Preview / Generated Preview */}
          {(generatedResume || showLivePreview) && (
            <div className="p-6 md:p-12 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-800 animate-fade-up">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h2 className="text-xl md:text-2xl font-black dark:text-white">
                  {generatedResume ? "Final Resume Preview" : "Draft Preview"}
                </h2>
                {generatedResume && (
                  <button
                    onClick={handleDownload}
                    className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download PDF
                  </button>
                )}
              </div>
              
              <div className="transform scale-[0.9] md:scale-100 origin-top">
                <ResumeTemplate 
                  data={normalizeResumeData(generatedResume || {
                    ...formData,
                    summary: "This is a live preview of your resume. Click 'Generate Resume' to create a professional summary and format your experience."
                  })} 
                />
              </div>

            </div>
          )}

        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-100/50 dark:shadow-none flex flex-col items-center justify-center text-center space-y-2">
            <span className="text-3xl md:text-4xl font-black text-green-500">{stats.generatedCount}</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Resumes Generated</span>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-100/50 dark:shadow-none flex flex-col items-center justify-center text-center space-y-2">
            <span className="text-base md:text-lg font-bold text-gray-700 dark:text-gray-300">{stats.lastGenerated}</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Last Update</span>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-100/50 dark:shadow-none flex flex-col items-center justify-center text-center space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-lg md:text-xl font-black text-gray-800 dark:text-white">{stats.activeJobs}</span>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Matching Jobs</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;


