const express = require("express");
const fs = require("fs");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const rootResolver = require("./lib/graphql/resolvers");
const schema = fs.readFileSync(
  path.resolve(__dirname, "./lib/graphql/schema.graphql"),
  "utf8"
);

const app = express();
app.use(cors());
app.use(
  "/api",
  graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: rootResolver,
    graphiql: true,
  })
);
app.listen(process.env.API_PORT);

console.log(
  `Running a GraphQL API server at http://localhost:${process.env.API_PORT}/api`
);
