import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };

    // Bind the function by this(Counter)
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // Function like class methods
  handleDecrement() {
    this.setState((obj) => {
      return { count: obj.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((obj) => {
      return { count: obj.count + 1 };
    });
  }

  render() {
    const dated = new Date("17 june 2025");
    dated.setDate(dated.getDate() + this.state.count);
    return (
      <>
        <button onClick={this.handleDecrement}>-</button>
        <span>{dated.toDateString()}</span>
        <button onClick={this.handleIncrement}>+</button>
      </>
    );
  }
}

export default Counter;