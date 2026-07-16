import express from "express";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const router = express.Router();
const submissionsFile = path.resolve(process.cwd(), "backend", "data", "submissions.json");

// Ensure directory and file exists
const dataDir = path.dirname(submissionsFile);
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(submissionsFile)) fs.writeFileSync(submissionsFile, "[]");

// Configure SMTP transport using Gmail App Passwords from environment config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER || "muhammadyaqoobwako@gmail.com",
    pass: process.env.SMTP_PASS || "odsf ybnl tmnp yyrg"
  }
});

router.post("/send-email", async (req, res) => {
  try {
    const { name, email, service, company, budget, timeline, message } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 1. Save to local JSON database for robustness
    const submissions = JSON.parse(fs.readFileSync(submissionsFile, "utf8") || "[]");
    const record = {
      id: Date.now().toString(),
      name,
      email,
      service,
      company: company || null,
      budget: budget || null,
      timeline: timeline || null,
      message,
      receivedAt: new Date().toISOString(),
    };
    submissions.push(record);
    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));

    // 2. Format and send the notification email to infosamyanix@gmail.com
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #22c55e;">New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #22c55e; margin-top: 15px;">
          <p style="margin: 0; font-style: italic;">"${message}"</p>
        </div>
        <p style="font-size: 11px; color: #888; margin-top: 25px;">Submitted via Softyanix contact form on ${record.receivedAt}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Softyanix Site" <${process.env.SMTP_USER || "muhammadyaqoobwako@gmail.com"}>`,
      to: "infosoftyanix@gmail.com",
      subject: `New Inquiry from ${name} - ${service}`,
      html: emailHtml
    });

    console.log(`Email successfully dispatched for ${name} (${email})`);
    res.json({ success: true, message: "Submission processed and email sent successfully" });
  } catch (error) {
    console.error("Submission processing error:", error);
    res.status(500).json({ error: "Failed to process project inquiry" });
  }
});

router.get("/test", (req, res) => res.json({ status: "ok" }));

export default router;
