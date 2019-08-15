import React from "react";
import "./App.css";
import Login from "./Login"

// function App() {
//   return <Login />
// }
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      msg: 'this is the branch version'
    };
  }

  incrementCount = () => {
    this.setState( {count: this.state.count + 1} );
  }

  decrementCount = () => {
    this.setState( {count: this.state.count - 1 } );
  }

  render() {
    return (
      <div className='counter'>
        <p className="count">Count: {this.state.count}</p>
        <button className="plus" onClick={this.incrementCount}>Increase Count</button>
        <button className="minus" onClick={this.decrementCount}>Decrease Count</button>
      </div>
    );
  }
}

export default App;














// classes https://scrimba.com/p/p4Mrt9/cQnMDHD

// function App() {
//   const [answer, setAnswer] = useState('Yes!');
//   return (
//     <div>
//       <h1>Do we understand State in React? {this.state.answer}</h1>
//       {/* <ChildComponent answer={this.state.answer}/> */}
//     </div>
//   );
// }
