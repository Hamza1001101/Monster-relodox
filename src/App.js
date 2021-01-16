import React, { Component } from "react";
import Card from "./components/Card";
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
        <Card key={id} name={name} username={username} email={email} />
      ));

    return (
      <div>
        <h1>Welcome Home</h1>
        <input
          type="text"
          placeholder="Search your fav monster...."
          name="userinput"
          value={userinput}
          onChange={this.userHandler}
          className="Input-card"
        />

        <div className="Card-wrapper">{filteredList}</div>
      </div>
    );
  }
}

export default App;
