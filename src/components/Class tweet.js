import { React, Component } from "react";

class Classtweet extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          incre
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          decre
        </button>
        <button
          onClick={() => this.setState({ count: (this.state.count = 0) })}
        >
          reset
        </button>
      </div>
    );
  }
}
export default Classtweet;
