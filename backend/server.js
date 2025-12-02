import cors from "cors";
import express from "express";

const app = express();

// Allow requests from frontend (or use '*' for dev)
app.use(
  cors({
    origin: "*",
  })
);

// Middleware for parsing JSON bodies
app.use(express.json());

const courses = [
  "Window Server administrator/IT Support Specialist",
  "Web Developer",
  "Cloud Engineer/Cloud Solution Architect",
  "Web & API Development Specialist",
  "Python for Computer Vision: Theory and Project",
  "Web Application Security Essentials",
  "VLSI Design Engineering",
  "Unity Android Gaming",
  "Time Series Analysis",
  "Tools for Predictive Analytics",
];

app.get("/", (req, res) => {
  res.json({ status: "Backend working", time: new Date() });
});

// @route   GET api/courses
// @desc    Get all courses
// @access  Public
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

// @route   POST api/certificate
// @desc    Generate a certificate
// @access  Public
app.post("/api/certificate", (req, res) => {
  // For now, we will just return a success message.
  res.json({ success: true, message: "Certificate generated successfully" });
});

const port = 5001;
app.listen(port, () => console.log(`Server listening on ${port}`));
