import Main from "./components/Main"
import React, { Component } from 'react'

class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            users: [],
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => this.setState({users: users}) )
    }
    read = () =>  {
        console.log(this.state.users)
    }
    
    render() {
        const { users } = this.state
        const listRender = users.map((user) => {
            return <li key={user.id}> {user.name} {user.email} </li>
        })
       return (
        <div>
            <h1>Welcome Home</h1>
               <Main />
               {listRender}
        </div>
    )

    }
   
}

export default App
