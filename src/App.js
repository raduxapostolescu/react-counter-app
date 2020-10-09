import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, name: "Coca-Cola", value: 2 },
      { id: 2, name: "Ursus", value: 1 },
      { id: 3, name: "Tuica", value: 3 },
      { id: 4, name: "Ciuc", value: 1 },
      { id: 5, name: "RedBull", value: 2 },
    ],
  };

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

  getTotalItems = () => {
    const valueArray = [];
    for (const stateArray of this.state.counters) {
      valueArray.push(stateArray.value);
    }
    const totalItems = valueArray.reduce((a, b) => a + b, 0);
    return totalItems;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          totalItems={this.getTotalItems()}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
