import React from 'react';
import './App.css';

// eslint-disable-next-line import/no-webpack-loader-syntax
import myWorker from 'worker-loader!./example.worker';

class App extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  onClick = () => {
    const worker = new myWorker();
    worker.postMessage(this.state.counter);
    worker.addEventListener('message', (event) =>
      this.setState({ counter: event.data }),
    );
  };

  render() {
    return (
      <div className="App">
        <p>
          Click the button to increment a counter. The increment function will be run in a Web Worker. Check the
          developer console to see what's happening.
        </p>
        <p>
          <button onClick={this.onClick}>Increment the counter</button>
        </p>
        <p>Count: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
