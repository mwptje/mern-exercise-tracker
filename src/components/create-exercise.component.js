import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  // constructor setting the initial state
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
    // bind methods to this so that refering to this within
    // a method is available
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // for testing add a dummy user , this will change later
  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "test user",
    });
  }
  // onChangeUsername
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  // onChangeDescription
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  // onChangeDuration
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }
  // onChangeDate
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }
  // onSubmit
  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    // return to / -> list of exercises
    window.location = "/";
  }

  // render the component
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="formgroup">
            <label>Username:</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes)</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
