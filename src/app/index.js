import * as React from "react";
import ReactDOM from "react-dom";
import { graphql, QueryRenderer } from "react-relay";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation, variables) {
  return fetch("http://localhost:4000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
    <QueryRenderer
      environment={environment}
      query={graphql`
        query appQuery {
          ores {
            name
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          console.log(error);
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <div>User ID: {props.ores[0].name}</div>;
      }}
    />,
    rootElement
  );
}
