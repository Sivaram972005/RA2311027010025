const express = require("express");
const Log = require("../../logging_middleware/logger");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      await Log("backend", "error", "handler", "Message is missing");
      return res.status(400).json({ error: "Message required" });
    }

    await Log("backend", "info", "controller", "Notification sent");

    res.json({ success: true });
  } catch (err) {
    await Log("backend", "fatal", "controller", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;