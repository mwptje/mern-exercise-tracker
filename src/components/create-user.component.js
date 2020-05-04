import React, { Component } from "react";

export default class CreateUser extends Component {
  // constructor setting the initial state
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    // bind methods to this so that refering to this within
    // a method is available
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // onChangeUsername
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  // onSubmit
  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);
    // set username to blank after entering
    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
