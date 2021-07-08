import React from "react";

class Counter extends React.Component {
  // Inicializarlo en el constructor
  constructor(props) {
    super(props);
    // al estado se accede con this.state
    console.log("constructor");
    this.state = {
      counter: 0,
    };
  }

  // substractOne() {
  //   this.setState({
  //     counter: this.state.counter - 1,
  //   });
  // }

  // addOne = () => {
  //   this.setState(
  //     {
  //       counter: this.state.counter + 1,
  //     },
  //     () => console.log(this.state.counter)
  //   );
  // };

  addToCounter(n) {
    this.setState({
      counter: this.state.counter + n,
    });
  }

  render() {
    // para cambiar el estado hay que utilizar this.setState()
    console.log("render");
    const {title} = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={() => this.addToCounter(-5)}>-5</button>
        <button onClick={() => this.addToCounter(-1)}>-</button>
        {this.state.counter}
        <button onClick={() => this.addToCounter(1)}>+</button>
        <button onClick={() => this.addToCounter(5)}>+5</button>
      </div>
    );
  }
}

export default Counter;
