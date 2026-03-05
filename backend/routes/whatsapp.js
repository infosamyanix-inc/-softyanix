import express from "express";

const router = express.Router();

/**
 * @route   GET /api/whatsapp/redirect
 * @desc    Redirect to WhatsApp chat with pre-filled message
 * @access  Public
 */
router.get("/redirect", (req, res) => {
  try {
    const phone = process.env.WHATSAPP_PHONE || "923402573560";
    const defaultMessage = "Hello Softyanix, I want to discuss a project.";

    // Allow custom message from query parameters
    const message = req.query.message || defaultMessage;

    // Log analytics
    console.log("✅ WhatsApp redirect:", {
      timestamp: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get("user-agent"),
      customMessage: !!req.query.message,
    });

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    res.redirect(whatsappUrl);
  } catch (error) {
    console.error("❌ WhatsApp redirect error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to redirect to WhatsApp",
    });
  }
});

/**
 * @route   GET /api/whatsapp/info
 * @desc    Get WhatsApp contact information
 * @access  Public
 */
router.get("/info", (req, res) => {
  res.json({
    status: "success",
    data: {
      available: true,
      businessHours: "Mon-Fri: 9:00 AM - 6:00 PM (PKT)",
      responseTime: "Usually within 1 hour",
    },
  });
});

export default router;
