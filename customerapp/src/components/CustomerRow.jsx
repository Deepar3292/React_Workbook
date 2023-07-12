import { Component } from "react";
// import styles from './CustomerRow.module.css'; // css-loader

export default class CustomerRow extends Component {
    render() {
        let {id, firstName, lastName} = this.props.customer;
        return <div>
            {firstName}, {lastName} &nbsp;
            <button type="button" onClick={() => this.deleteRow(id)}>Delete</button>
        </div>
    }

    deleteRow(id) {
        console.log("delete Row", id)
        this.props.delEvent(id);
    }
}