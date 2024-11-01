const express = require("express");
const app = express();
const port = 3000;

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World Again and Again? Please!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
