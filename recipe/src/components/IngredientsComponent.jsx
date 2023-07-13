import { Component } from "react";

export default class Ingredients extends Component {
    render() {
        return <div>
            <ul>
                <li>{this.props.ingredientInfo.name}</li>
            </ul>
        </div>
    }
}