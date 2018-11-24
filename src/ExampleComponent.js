import React from "react";

export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Constructor of ExampleComponent is executed");
    setTimeout(() => this.setState({ new: "state" }), 5000);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("static getDerivedStateFromProps is executed ");
    return state;
  }

  componentDidMount() {
    console.log("componentDidMount is executed");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate is executed");
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate is executed");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate is executed");
  }

  render() {
    console.log("render is called ");
    return <div>My Component</div>;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is executed ");
  }
}
