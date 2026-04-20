import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    github: "",
    skills: "",
    experience: "",
    education: "",
  });

  const [stats] = useState({
    generatedCount: 12,
    lastGenerated: "2 hours ago",
    activeJobs: 5,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Alex Johnson</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/30">
            A
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
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-black py-4 rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 active:scale-[0.98] mt-4"
            >
              Generate AI Resume
            </button>
          </form>
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

        {/* Action Message */}
        <div className="bg-gray-900 dark:bg-green-900/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 border dark:border-green-500/10">
          <div>
            <h3 className="text-white text-xl font-bold">Ready to get hired?</h3>
            <p className="text-gray-400 dark:text-green-500/60 text-sm">Download your optimized resume and start applying today.</p>
          </div>
          <button className="w-full md:w-auto bg-white dark:bg-green-500 text-gray-900 dark:text-white px-8 py-3 rounded-xl font-bold hover:bg-green-500 dark:hover:bg-green-600 hover:text-white transition-all">
            View History
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


