import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, name: "Coca-Cola", value: 4 },
      { id: 2, name: "Ursus", value: 1 },
      { id: 3, name: "Tuica", value: 5 },
      { id: 4, name: "Ciuc", value: 1 },
      { id: 5, name: "RedBull", value: 10 },
    ],
  };

  // handleStartOver = () => {
  //   console.log(this.state);

  //   const counters = this.initalState;
  //   this.setState({ counters });

  //   console.log(this.state);
  // };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value <= 0
      ? (counters[index].value = 0)
      : counters[index].value--;
    this.setState({ counters });
  };

  render() {
    // this.initalState = this.State;
    return (
      <div className="container d-flex flex-column">
        <div className="row">
          <button
            className="btn btn-warning btn-sm m-2 w-10"
            onClick={this.handleStartOver}
          >
            Start Over
          </button>
          <button
            className="btn btn-danger btn-sm m-2 w-10"
            onClick={this.handleReset}
          >
            Reset Amount
          </button>
        </div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.name}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          >
            <h4 className="mx-5" style={{ display: "inline" }}>
              {counter.name}
            </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
