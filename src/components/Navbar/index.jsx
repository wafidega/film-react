import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: props.name
    };
  }

  handleLogout = () => {
    console.log("Logout");
    this.props.history.push("/Login");
  };
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <>
        <h1>{this.props.name}</h1>
        <Link to="/basic-react">Basic React</Link> | <Link to="/basic-home">Home</Link>
        <Link to="/basic-detail">Detail</Link> | <button onClick={this.handleLogout}>Logout</button>
      </>
    );
  }
}

export default withRouter(Navbar);
