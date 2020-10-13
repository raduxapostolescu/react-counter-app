import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;

    return (
      <div className="d-flex flex-column my-4">
        <div className="row">
          <button className={this.getButtonClasses()} onClick={onReset}>
            Reset Amount
          </button>
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.name}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <h4 className="mx-5" style={{ display: "inline" }}>
              {counter.name}
            </h4>
          </Counter>
        ))}
      </div>
    );
  }
  getButtonClasses = () => {
    let classes = "btn btn-danger btn-sm m-2 w-10";
    classes +=
      this.props.counters.length === 0 || this.props.totalItems === 0
        ? " invisible"
        : "";
    return classes;
  };
}

export default Counters;
