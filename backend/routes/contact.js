import express from "express";
import fs from "fs";
import path from "path";
import {
  createCompanyEmailTemplate,
  createConfirmationEmailTemplate,
} from "../utils/emailTemplates.js";
import { validateContactForm } from "../utils/validation.js";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responses.js";

const router = express.Router();

// Submissions storage path
const submissionsFile = path.resolve(
  process.cwd(),
  "backend",
  "data",
  "submissions.json",
);

// Ensure data directory exists
const dataDir = path.dirname(submissionsFile);
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(submissionsFile))
  fs.writeFileSync(submissionsFile, JSON.stringify([]));

/**
 * @route   POST /api/contact/send-email
 * @desc    Send contact form email
 * @access  Public
 */
router.post("/send-email", async (req, res) => {
  try {
    const formData = req.body;

    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      return sendErrorResponse(res, validation.error, 400);
    }

    const { name, email } = formData;

    // Persist submission to a local JSON file (no external email provider)
    const submissions = JSON.parse(
      fs.readFileSync(submissionsFile, "utf8") || "[]",
    );
    const record = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      name,
      email,
      service: formData.service,
      company: formData.company || null,
      budget: formData.budget || null,
      timeline: formData.timeline || null,
      message: formData.message,
      ip: req.ip,
      receivedAt: new Date().toISOString(),
    };

    submissions.push(record);
    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));

    // Log successful submission
    console.log("✅ Contact form stored:", {
      id: record.id,
      name,
      email,
      service: record.service,
    });

    sendSuccessResponse(
      res,
      "Message received. We'll review and follow up via email.",
      {
        id: record.id,
        name,
        email,
        submittedAt: record.receivedAt,
      },
    );
  } catch (error) {
    console.error("❌ Contact form error:", error);
    sendErrorResponse(
      res,
      "Failed to send message. Please try again or contact us directly.",
      500,
      error.message,
    );
  }
});

/**
 * @route   GET /api/contact/test
 * @desc    Test contact form endpoint
 * @access  Public
 */
router.get("/test", (req, res) => {
  sendSuccessResponse(res, "Contact endpoint is working");
});

export default router;
