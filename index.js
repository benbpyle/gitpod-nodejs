const express = require("express");
const app = express();
const port = 3000;

// Define a simple route
app.get("/", (req, res) => {
  console.log("About to return");
  let o = {
    "foo": "bar"
  };
  res.json(o);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
