import cors from "cors";
import express from "express";

const app = express();

const courses = [
  'Window Server administrator/IT Support Specialist',
  'Web Developer',
  'Cloud Engineer/Cloud Solution Architect',
  'Web & API Development Specialist',
  'Python for Computer Vision: Theory and Project',
  'Web Application Security Essentials',
  'VLSI Design Engineering',
  'Unity Android Gaming',
  'Time Series Analysis',
  'Tools for Predictive Analytics',
]

// Allow requests from frontend (or use '*' for dev)
app.use(
  cors({
    origin: ["https://mindlytic.onrender.com/", "http://localhost:5173"],
  })
);

// Middleware for parsing JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "Backend working", time: new Date() });
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

const port = 5001;
app.listen(port, () => console.log(`Server listening on ${port}`));
