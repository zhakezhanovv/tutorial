import express = require("express");
import UserRouter = require("./routes/user");

const PORT = 8080;

const app = express();

app.use(express.json());

// API Health check endpoint
app.get("/api/health", (req, res) => {
  res.send({ message: "API works" });
});

app.use("/api/users", UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
