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
        .then(users => this.setState({users}))
    }
    
    render() {
       return (
        <div>
            <h1>Welcome Home</h1>
            <Main />
        </div>
    )

    }
   
}

export default App
