import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import { counters } from "./data/data";

class App extends Component {
  state = counters;

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
            totalItems={this.getTotalItems()}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
