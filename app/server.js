const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// UI
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API - health
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "demo-fintech", timestamp: Date.now() });
});

// API - login demo
app.post("/api/login", (req, res) => {
  const { user, pass } = req.body;

  if (user === "demo" && pass === "1234") {
    return res.json({ token: "fake-jwt-token", role: "qa", user });
  }

  return res.status(401).json({ message: "invalid credentials" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
