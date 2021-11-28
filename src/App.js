import "./styles.css";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arif",
      loggedIn: false
    };
  }

  onClickButton() {
    if (this.state.loggedIn) {
      this.setState({
        name: "Guest User",
        loggedIn: false
      });
    } else {
      this.setState({
        name: "Arif",
        loggedIn: true
      });
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.onClickButton()}>Click Me</button>
        <br />
        <br />
        Welcome {this.state.name}
      </div>
    );
  }
}
export default App;
