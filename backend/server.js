const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working on Render!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
