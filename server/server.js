const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());

app.get("/home", (req, res) => {
  res.json({ message: "nextjs+node boilerplate by :", people: ["Aryan"] });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
