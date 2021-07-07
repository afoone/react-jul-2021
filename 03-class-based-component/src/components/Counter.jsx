import React from "react";

class Counter extends React.Component {
  // Inicializarlo en el constructor
  constructor(props) {
    super(props);
    // al estado se accede con this.state
    this.state = {
      counter: 0,
    };
  }

  render() {
    // para cambiar el estado hay que utilizar this.setState()

    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter - 1,
            });
          }}
        >
          -
        </button>
        {this.state.counter}
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            }, () => console.log(this.state.counter) );
            
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
