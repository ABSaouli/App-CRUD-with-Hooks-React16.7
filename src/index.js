import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
/*
ReactDOM.render(<App />, document.getElementById("root"), () => {
  console.log("je suis bien connecter au DOM");
});
*/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.tick();
      console.log("le didmonth executer");
    }, 1000);
  }

  componentWillMount() {
    console.log("le willmonth executer");
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <Link to="/app">HOME</Link>
        <Link to="/clock ">Clock</Link>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

let Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/clock" component={Clock} />
      <Route path="/app" component={App} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById("root"));
