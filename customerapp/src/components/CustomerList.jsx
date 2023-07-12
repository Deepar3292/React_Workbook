import { Component } from "react";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

export default class CustomerList extends Component {
    state = {
        name: "Deepa",
        complete: [],
        customers: [{
            id: 1,
            firstName: "Bob",
            lastName: "Green"
        },
        {
            id: 2,
            firstName: "Jack",
            lastName: "Sparrow"
        },
        {
            id: 3,
            firstName: "Tony",
            lastName: "Michael"
        }
    ]
    }

    componentDidMount() {
        this.state.complete = this.state.customers; //new state variable
    }
    render() {
        return <div>
            <Filter filterEvent={(txt) => this.filterCustomers(txt)} />
            {
                this.state.customers.map(customer => <CustomerRow customer={customer} key={customer.id} 
                delEvent={(id) => this.deleteCustomer(id)} />)
            }
        </div>
    }

    deleteCustomer(id) {
        console.log("delete customer", id);
        let custs = this.state.customers.filter(cust => cust.id != id);
        this.setState({
            customers: custs
        })
    }

    filterCustomers(txt) {
        let custs = this.state.complete.filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >= 0)

        this.setState({
            customers: custs
        })
    }
}