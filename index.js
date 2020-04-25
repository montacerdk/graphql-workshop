const express = require("express");
const expressGraphQL = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(4001, () => {
  console.log("Your GraphQL server is listening on port 4001 ...");
});
