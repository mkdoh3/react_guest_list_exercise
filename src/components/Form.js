import React, { Component } from "react";

class Form extends Component {
    state = {
        guestName: "",
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddGuest(this.state.guestName);
        this.setState({ guestName: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="name">Sign the Guest Book:</label>
                <input
                    onChange={this.handleOnChange}
                    type="text"
                    name="guestName"
                    value={this.state.guestName}
                />
            </form>
        );
    }
}

export default Form;
