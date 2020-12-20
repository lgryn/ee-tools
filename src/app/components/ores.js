import React from "react";
import QRenderer from "./qRenderer";

export default function Ores() {
  return (
    <QRenderer
      query={graphql`
        query oresQuery {
          ores {
            name
          }
        }
      `}
      renderQuery={({ error, props }) => {
        if (error) {
          console.log(error);
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        const oresList = props.ores.map((ore) => <li>{ore.name}</li>);
        return <ul>{oresList}</ul>;
      }}
    />
  );
}
