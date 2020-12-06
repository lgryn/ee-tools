const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const oresModel = require("./models/oresModel");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Ore {
    id: Int
    name: String
    volume: Float
    security: String
    sell: Float
    buy: Float
  }
 
  type Query {
    ores: [Ore]
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  ores: () => {
    return oresModel.getWithPrice();
  },
};

const app = express();
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/api");
