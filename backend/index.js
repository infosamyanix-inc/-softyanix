import express from "express";
import cors from "cors";
// nodemailer removed per request - submissions stored locally
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// POST /send-email
app.post("/send-email", async (req, res) => {
  const { name, email, company, service, budget, timeline, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  try {
    // Save submission to backend/data/submissions.json
    const fs = await import("fs");
    const path = await import("path");
    const submissionsFile = path.resolve(
      process.cwd(),
      "backend",
      "data",
      "submissions.json",
    );
    try {
      const existing = fs.existsSync(submissionsFile)
        ? JSON.parse(fs.readFileSync(submissionsFile, "utf8") || "[]")
        : [];
      existing.push({
        name,
        email,
        company,
        service,
        budget,
        timeline,
        message,
        receivedAt: new Date().toISOString(),
      });
      fs.writeFileSync(submissionsFile, JSON.stringify(existing, null, 2));
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to save submission" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
