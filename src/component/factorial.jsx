import React, { Component } from "react";

class Factorial extends Component {
  constructor(props) {
    super(props);
    this.state = { number: "", factorial: "" };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const n = this.state.number;
    function factorialCounter(n) {
      return n != 0 ? n * factorialCounter(n - 1) : 1;
    }
    this.setState({
      factorial: factorialCounter(n),
    });
  };
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      number: event.target.value,
    });
  };
  render() {
    const { factorial } = this.state;
    return (
      <div>
        <h1>Factorial Calculator</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter a number..."
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          />
          <br />
          <button type="submit">Calculate Factorial</button>
        </form>
        <h2>Factorial: {this.state.factorial}</h2>
      </div>
    );
  }
}

export default Factorial;
