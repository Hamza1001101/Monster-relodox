import React, { Component } from "react";
import Main from "./components/Main";
import Template from "./components/Template";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userinput: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ users: users }));
  }
  read = () => {
    console.log(this.state.users);
  };

  userHandler = e => {
    this.setState({
      userinput: e.target.value
    })
  }
  
  render() {
    const { users } = this.state;
    const listRender = users.map(({ id, name, username, email }) => {
      return (
        <Template key={id} name={name}
          username={username}
          email={email}
        />
      );
    });
    return (
      <div>
        <h1>Welcome Home</h1>
        <Main />

        {listRender}
        <form>
          <input type='text' placeholder='Add Task' name='userinput' onChange={this.userHandler} />
        </form>
      </div>
    );
  }
}

export default App;
