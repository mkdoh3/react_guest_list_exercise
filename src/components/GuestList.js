import React, { Component } from "react";
import Guest from "./Guest";
import Form from "./Form";

class GuestList extends Component {
    state = {
        guests: ["jonathan", "other jonathan", "asif"],
    };

    handleAddGuest = (guestName) => {
        this.setState({
            guests: [...this.state.guests, guestName],
        });
    };

    renderGuests = () => {
        return this.state.guests.map((guestName, index) => (
            <Guest key={index} name={guestName} />
        ));
    };
    render() {
        return (
            <>
                <h3>Guest List</h3>
                <Form handleAddGuest={this.handleAddGuest} />
                {this.renderGuests()}
            </>
        );
    }
}

export default GuestList;
