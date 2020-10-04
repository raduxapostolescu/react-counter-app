import React, { Component } from "react";

class Counter extends Component {
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleDecrement = () => {
  //   this.state.value === 0
  //     ? this.setState({ value: 0 })
  //     : this.setState({ value: this.state.value - 1 });
  // };

  render() {
    return (
      <div className="row">
        <button
          // onClick={this.handleDecrement}
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {this.props.children}
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
