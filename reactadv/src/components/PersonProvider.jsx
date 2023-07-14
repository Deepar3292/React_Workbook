import { Component } from "react";
import { createContext } from "react";

let PersonContext = createContext(); // central placeholder for state to avoid props drill

export class PersonProvider extends Component {

    componentDidMount() {
        this.setState({
            name: 'Roger',
            email: '',
            updateEmail: this.updateEmail.bind(this)
        })
    }

    updateEmail(email) {
        this.setState({
            email
        })
    }

    render() {
        return <PersonContext.Provider value={{...this.state}}>
            {this.props.children}
        </PersonContext.Provider>
    }
}