class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrementCount = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
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