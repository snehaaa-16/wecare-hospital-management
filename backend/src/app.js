const express = require("express");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "WeCare backend is running"
  });
});

module.exports = app;
