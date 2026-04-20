import type { Request, Response } from "express";
import PDFDocument from "pdfkit";

export const generatePdf = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const {
      name,
      email,
      linkedin,
      github,
      summary,
      skills,
      experience,
      education,
    } = req.body;

    const doc = new PDFDocument({ margin: 50 });

    // Stream the PDF to the response
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="resume.pdf"`);
    doc.pipe(res);

    // Header section
    doc.fontSize(24).text(name || "Your Name", { align: "center" });
    doc
      .fontSize(12)
      .text(
        `${email || "Email"} | ${linkedin || "LinkedIn"} | ${github || "GitHub"}`,
        { align: "center" },
      );
    doc.moveDown();

    // Summary
    if (summary) {
      doc.fontSize(16).text("Summary", { underline: true });
      doc.fontSize(12).text(summary);
      doc.moveDown();
    }

    // Skills
    if (skills && Array.isArray(skills) && skills.length > 0) {
      doc.fontSize(16).text("Skills", { underline: true });
      doc.fontSize(12).text(skills.join(", "));
      doc.moveDown();
    } else if (skills && typeof skills === "string") {
      doc.fontSize(16).text("Skills", { underline: true });
      doc.fontSize(12).text(skills);
      doc.moveDown();
    }

    // Experience
    if (experience && Array.isArray(experience) && experience.length > 0) {
      doc.fontSize(16).text("Experience", { underline: true });
      experience.forEach((exp: any) => {
        if (typeof exp === "string") {
          doc.fontSize(12).text(`• ${exp}`);
        } else {
          const title = exp.title || exp.role || exp.company || "Experience";
          const desc = exp.description || exp.details || exp.duration || "";
          doc.fontSize(12).text(`• ${title}`);
          if (desc) {
            doc.fontSize(10).text(`  ${desc}`);
          }
        }
      });
      doc.moveDown();
    }

    // Education
    if (education && Array.isArray(education) && education.length > 0) {
      doc.fontSize(16).text("Education", { underline: true });
      education.forEach((edu: any) => {
        if (typeof edu === "string") {
          doc.fontSize(12).text(`• ${edu}`);
        } else {
          const degree =
            edu.degree || edu.institution || edu.school || "Education";
          doc.fontSize(12).text(`• ${degree}`);
        }
      });
    }

    doc.end();
  } catch (error) {
    console.error("PDF generation error:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to generate PDF" });
    }
  }
};
