const express = require("express");

const app = express();

app.listen(4001, () => {
  console.log("Your GraphQL server is listening on port 4001 ...");
});
