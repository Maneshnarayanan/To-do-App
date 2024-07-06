import React, { Component } from "react";
import "./Todoapp.css";
export default class Todoapp extends Component {
    state = {
        input: "",
        items: [],
    };

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    };

    storeItems = (event) => {
        event.preventDefault();
        const { input } = this.state;
        this.setState({
            items: [...this.state.items, input],
            input: "",
        });
    };

    deleteItem = (key) => {
        this.setState({
            items: this.state.items.filter((data, index) => index !== key),
        });
    };

    editItem = (key) => {
        let val = prompt("", this.state.items[key]);

        this.state.items.splice(key, 1, val);
        this.setState({ items: this.state.items });
    };

    render() {
        const { input, items } = this.state;
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo app</h1>
                    <input type="text" value={input} placeholder="Enter items.." onChange={this.handleChange} />
                </form>
                <ul>
                    {items.map((data, index) => (
                        <li key={index}>
                            {data} <i className="fas fa-edit" onClick={() => this.editItem(index)}></i>{" "}
                            <i className="fa-solid fa-trash" onClick={() => this.deleteItem(index)}></i>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
