const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
    pretty: true,
  })
);

app.listen(4001, () => {
  console.log("Your GraphQL server is listening on port 4001 ...");
});
