
import React, { Component } from 'react'
import Main from "./components/Main"
import Template from './components/Template'

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
        const listRender = users.map(({id, name, username, email}) => {
            return <Template key={id} name={name} username={username} email={email} />
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
