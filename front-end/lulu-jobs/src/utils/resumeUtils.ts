export interface ResumeData {
  name: string;
  email: string;
  linkedin?: string;
  github?: string;
  summary?: string;
  skills: string[] | string | Record<string, string>;
  experience: any[];
  education: any[];
  projects?: any[];
  role?: string;
  date?: string;
}


/**
 * Normalizes resume data from various sources (form, AI response) 
 * into a consistent format for the template.
 */
export const normalizeResumeData = (data: any): ResumeData => {
  return {
    name: data.name || "",
    email: data.email || "",
    linkedin: data.linkedin || "",
    github: data.github || "",
    summary: data.summary || "",
    role: data.role || "",
    date: data.date || "",
    skills: Array.isArray(data.skills) 
      ? data.skills 
      : typeof data.skills === "string" 
        ? data.skills.split("\n").map((s: string) => s.trim()).filter(Boolean)
        : data.skills || [],
    experience: Array.isArray(data.experience) 
      ? data.experience 
      : typeof data.experience === "string" && data.experience.trim()
        ? [{ title: data.experience.split("\n")[0], description: data.experience }]
        : [],
    education: Array.isArray(data.education) 
      ? data.education 
      : typeof data.education === "string" && data.education.trim()
        ? [{ degree: data.education }]
        : [],
    projects: Array.isArray(data.projects)
      ? data.projects
      : typeof data.projects === "string" && data.projects.trim()
        ? [{ name: data.projects.split("\n")[0], description: "Project Description", details: data.projects }]
        : [],
  };
};

/**
 * Generates a pure HTML string version of the resume.
 * Useful for server-side rendering or non-React contexts.
 */
export const generateResumeHtml = (data: ResumeData): string => {
  const skills = Array.isArray(data.skills) ? data.skills : [data.skills];
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.name} - Resume</title>
      <style>
        :root {
          --primary: #22c55e;
          --text-main: #111827;
          --text-muted: #6b7280;
          --bg-sidebar: #f9fafb;
        }
        body {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: var(--text-main);
          line-height: 1.5;
          margin: 0;
          padding: 0;
        }
        .container {
          display: flex;
          max-width: 900px;
          margin: 0 auto;
          min-height: 100vh;
        }
        .sidebar {
          width: 30%;
          background: var(--bg-sidebar);
          padding: 40px 30px;
          border-right: 1px solid #e5e7eb;
        }
        .main {
          width: 70%;
          padding: 40px 50px;
        }
        .initials {
          width: 60px;
          height: 60px;
          background: var(--primary);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 24px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 24px;
          font-weight: 900;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: -0.025em;
        }
        .subtitle {
          color: var(--primary);
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 5px;
        }
        section { margin-bottom: 35px; }
        h2 {
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          border-bottom: 1px solid #f3f4f6;
          padding-bottom: 8px;
          margin-bottom: 15px;
        }
        .skill-tag {
          display: inline-block;
          background: white;
          border: 1px solid #e5e7eb;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 700;
          margin: 0 5px 5px 0;
        }
        .exp-item { margin-bottom: 20px; }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .exp-title { font-weight: 800; font-size: 14px; }
        .exp-duration { 
          font-size: 10px; 
          font-weight: 800; 
          background: #f0fdf4; 
          color: var(--primary);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .exp-company { font-weight: 700; font-size: 12px; color: var(--text-muted); font-style: italic; }
        .exp-desc { font-size: 13px; color: #4b5563; margin-top: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="sidebar">
          <div class="initials">${data.name.charAt(0)}</div>
          <h1>${data.name}</h1>
          <div class="subtitle">Candidate</div>
          
          <div style="margin-top: 40px;">
            <h2>Contact</h2>
            <div style="font-size: 12px; color: var(--text-muted);">
              <div>${data.email}</div>
              ${data.linkedin ? `<div style="margin-top: 5px;">LinkedIn</div>` : ''}
              ${data.github ? `<div style="margin-top: 5px;">GitHub</div>` : ''}
            </div>
          </div>

          <div style="margin-top: 40px;">
            <h2>Skills</h2>
            <div>
              ${skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="main">
          ${data.summary ? `
          <section>
            <h2>Summary</h2>
            <p style="font-size: 13px; color: #374151; text-align: justify;">${data.summary}</p>
          </section>
          ` : ''}

          <section>
            <h2>Experience</h2>
            ${data.experience.map(exp => `
              <div class="exp-item">
                <div class="exp-header">
                  <div class="exp-title">${typeof exp === 'string' ? exp : (exp.title || exp.role)}</div>
                  <div class="exp-duration">${exp.duration || '2020 - Present'}</div>
                </div>
                ${exp.company ? `<div class="exp-company">${exp.company}</div>` : ''}
                ${exp.description ? `<div class="exp-desc">${exp.description}</div>` : ''}
              </div>
            `).join('')}
          </section>

          <section>
            <h2>Education</h2>
            ${data.education.map(edu => `
              <div class="exp-item">
                <div class="exp-title">${typeof edu === 'string' ? edu : edu.degree}</div>
                <div class="exp-company">${edu.institution || edu.school}</div>
                ${edu.year ? `<div style="font-size: 10px; color: var(--text-muted); font-weight: 700;">GRADUATED ${edu.year}</div>` : ''}
              </div>
            `).join('')}
          </section>
        </div>
      </div>
    </body>
    </html>
  `;
};
