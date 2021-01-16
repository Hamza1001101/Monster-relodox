import React, { Component } from "react";
import Main from "./components/Main";
import Template from "./components/Template";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userinput: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ users: users }));
  }

  userHandler = (e) => {
    this.setState({
      userinput: e.target.value,
    });
  };

  render() {
    const { users, userinput } = this.state;

    const filteredList = users
      .filter((user) => {
        return user.name.toLowerCase().includes(userinput.toLowerCase());
      })
      .map(({ id, username, name, email }) => (
        <Template key={id} name={name} username={username} email={email} />
      ));

    return (
      <div style={{ width: `55rem` }}>
        <h1>Welcome Home</h1>
        <input
          type="text"
          placeholder="Search your fav monster...."
          name="userinput"
          value={userinput}
          onChange={this.userHandler}
          className="Input-card"
        />

        <h4> {this.state.userinput} </h4>
        <div className="Card-wrapper">{filteredList}</div>
        <Main />
      </div>
    );
  }
}

export default App;
