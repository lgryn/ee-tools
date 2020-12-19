module.exports = {
  src: "./src/app",
  schema: "./src/lib/graphql/schema.graphql",
  exclude: [
    "**/node_modules/**",
    "**/dist/**",
    "**/__mocks__/**",
    "**/__generated__/**",
  ],
};
