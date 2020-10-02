import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: "Coca-Cola", value: 4 },
      { id: "Ursus", value: 1 },
      { id: "Tuica", value: 5 },
      { id: "Ciuc", value: 1 },
      { id: "RedBull", value: 10 },
    ],
  };

  render() {
    return (
      <div className="container d-flex flex-column">
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4 className="mx-5" style={{ display: "inline" }}>
              {counter.id}
            </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
