import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFriend } from './actions';


class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleFriendInput = e => {
        // e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        });
    };

    handleClick = e => {
        this.props.createFriend(this.state);
        this.setState({
            name: '',
            age: '',
            email: ''
        });
    };

    render() {
        return (
            <div>
                <div className="form">
                    <input onChange={this.handleFriendInput} value={this.state.name} name='name' placeholder="Name" />
                    <input onChange={this.handleFriendInput} value={this.state.age} name='age' placeholder="Age" />
                    <input onChange={this.handleFriendInput} value={this.state.email} name='email' placeholder="Email" />
                    <button onClick={this.handleClick}
                    >Add Friend
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, { createFriend })(AddFriend);