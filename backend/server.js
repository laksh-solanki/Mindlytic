import cors from "cors";
import express from "express";

const app = express();

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

app.use(cors()); // ✅ allow all origins (BEST for now)

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "Backend working", time: new Date() });
});

app.get("/test", (req, res) => {
  res.json({ test: "route works" });
});

app.get("/project/certificate", (req, res) => {
  res.json(courses);
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
