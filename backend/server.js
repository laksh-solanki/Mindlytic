import cors from "cors";
import express from "express";
const app = express();

// Allow requests from frontend (or use '*' for dev)
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ status: "Backend working", time: new Date() });
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const port = 5001;
app.listen(port, () => console.log(`Server listening on ${port}`));
