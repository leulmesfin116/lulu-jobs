import React from "react";

export interface ResumeData {
  name: string;
  role?: string;
  email: string;
  linkedin?: string;
  github?: string;
  summary?: string;
  skills: string[] | string | Record<string, string>;
  experience: any[];
  education: any[];
  projects?: any[];
  date?: string;
}

interface ResumeTemplateProps {
  data: ResumeData;
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
  // Helper to render skills which might be a categorized object or a string/array
  const renderSkills = () => {
    if (typeof data.skills === "object" && !Array.isArray(data.skills)) {
      return Object.entries(data.skills).map(([category, items]) => (
        <div key={category} className="mb-2">
          <span className="font-bold">{category}:</span> {items}
        </div>
      ));
    }
    const skillsArray = typeof data.skills === "string"
      ? data.skills.split("\n").filter(Boolean)
      : Array.isArray(data.skills)
      ? data.skills
      : [];
    
    return (
      <div className="space-y-1">
        {skillsArray.map((skill, i) => {
          const [category, items] = skill.includes(":") ? skill.split(":") : [null, skill];
          const itemsArray = items.split(",").map((s) => s.trim()).filter(Boolean);
          
          return (
            <div key={i} className="flex flex-wrap items-center">
              {category ? <span className="font-bold mr-2">{category}:</span> : null}
              <div className="flex flex-wrap items-center">
                {itemsArray.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-gray-400 mr-1.5">•</span>
                    <span className="mr-3">{item}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );


  };

  const currentDate = data.date || new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="w-full max-w-[850px] mx-auto bg-white dark:bg-white text-black p-10 md:p-16 shadow-lg min-h-[1100px] font-sans border border-gray-100">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-1 tracking-tight">{data.name || "Your Name"}</h1>
        <p className="text-xl text-gray-500 mb-4">{data.role || "Full Stack Developer"}</p>
        <div className="text-sm text-black border-b border-black pb-2 flex flex-wrap justify-center items-center gap-4">
          <span>{currentDate}</span>
          
          {data.github && (
            <>
              <span className="text-gray-300">|</span>
              <a 
                href={data.github.startsWith('http') ? data.github : `https://github.com/${data.github}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>{data.github.replace("https://github.com/", "").replace(/\/$/, "")}</span>
              </a>
            </>
          )}

          {data.email && (
            <>
              <span className="text-gray-300">|</span>
              <a 
                href={`mailto:${data.email}`} 
                className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{data.email}</span>
              </a>
            </>
          )}

          {data.linkedin && (
            <>
              <span className="text-gray-300">|</span>
              <a 
                href={data.linkedin.startsWith('http') ? data.linkedin : `https://linkedin.com/in/${data.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </>
          )}
        </div>


      </header>

      {/* Sections */}
      <div className="space-y-8">
        {/* Professional Summary */}
        <section>
          <h2 className="text-xl font-bold mb-3 border-b-0">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-800">
            {data.summary || "Summary goes here..."}
          </p>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xl font-bold mb-3">Technical Skills</h2>
          <div className="text-sm space-y-1 text-gray-800">
            {renderSkills()}
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <h2 className="text-xl font-bold mb-3">Professional Experience</h2>
          <div className="space-y-6">
            {data.experience?.map((exp, index) => (
              <div key={index} className="text-sm">
                <div className="flex justify-between items-baseline mb-2">
                  <div className="font-bold">
                    {exp.company || "Company"} — {exp.title || "Role"} 
                    <span className="font-normal ml-1">({exp.duration || "Present"})</span>
                  </div>
                </div>
                {exp.description ? (
                  <ul className="list-disc ml-5 space-y-1 text-gray-800">
                    {typeof exp.description === "string" ? (
                      exp.description.split("\n").filter(Boolean).map((bullet: string, i: number) => (
                        <li key={i}>{bullet.replace(/^[•-]\s*/, "")}</li>
                      ))
                    ) : null}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <h2 className="text-xl font-bold mb-3">Featured Projects</h2>
          <div className="space-y-6">
            {data.projects?.map((project, index) => (
              <div key={index} className="text-sm">
                <div className="font-bold mb-2">
                  {project.name} — {project.description} 
                  {project.link && <span className="font-normal text-gray-500"> | <a href={project.link} className="hover:underline">Live Demo</a></span>}
                </div>
                {project.details ? (
                  <ul className="list-disc ml-5 space-y-1 text-gray-800">
                    {typeof project.details === "string" ? (
                      project.details.split("\n").filter(Boolean).map((bullet: string, i: number) => (
                        <li key={i}>{bullet.replace(/^[•-]\s*/, "")}</li>
                      ))
                    ) : null}
                  </ul>
                ) : null}
              </div>
            )) || (
              <div className="text-sm text-gray-400 italic">Add projects in the dashboard to see them here.</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeTemplate;
