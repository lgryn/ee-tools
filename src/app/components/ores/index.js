import React from "react";
import QRenderer from "../qRenderer";

export default function Index() {
  return (
    <QRenderer
      query={graphql`
        query oresQuery {
          ores {
            name
            volume
            rarity
            profitByM3
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
        const oresList = props.ores.map((ore) => (
          <tr key={ore.name}>
            <td>{ore.name}</td>
            <td>{ore.volume}</td>
            <td>{ore.rarity}</td>
            <td>{ore.profitByM3}</td>
          </tr>
        ));
        return (
          <React.Fragment>
            <h1 className="title">Profit by m³</h1>
            <div className="table-container">
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Volume</th>
                    <th>Rarity</th>
                    <th>Profit</th>
                  </tr>
                </thead>
                <tbody>{oresList}</tbody>
              </table>
            </div>
          </React.Fragment>
        );
      }}
    />
  );
}
