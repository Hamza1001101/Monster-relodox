import React, { Component } from "react";
import Card from "./components/Card";
import Searchbar from "./components/Searchbar";
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
      <div className="App">
        <Searchbar userinput={userinput} searchHandle={this.userHandler} />

        <div className="Card-wrapper">{filteredList}</div>
      </div>
    );
  }
}

export default App;
