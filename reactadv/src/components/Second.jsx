import { Component } from "react";
import { PersonContext } from "./PersonProvider"

export default class Second extends Component {
    render() {
        return <PersonContext.Consumer>
            {
                value => {
                    return <div>
                        Name: {value.name} <br />
                        Email: {value.email} <br />
                        <button onClick={() => value.updateEmail("roger@gmail.com")}>Change Email</button>
                    </div>
                }
            }
        </PersonContext.Consumer>
    }
}