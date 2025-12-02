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

app.get("/", (req, res) => {
  res.json({ status: "Backend working", time: new Date() });
});

const port = 5001;
app.listen(port, () => console.log(`Server listening on ${port}`));
