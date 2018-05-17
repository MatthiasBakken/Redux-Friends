import React, { Component } from 'react';
import './App.css';
import { fetchFriends, createFriend } from './actions';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    friend: ''
  };

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    console.log(this.props)
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <form>
        <input placeholder="Friend" type="text" name="friend" value={this.state.friend} onChange={e => this.setState(
          {
            [e.target.name]: e.target.value
          }
        )}
        />
        <button
          onClick={() => {
            this.props.createFriend({ friend: this.state.friend })
            this.setState({ friend: '' })
          }}
        >Add Friend
            </button>
      </form>
      <ul>
        {this.props.friends.map(friend => {
          return <li key={friend.name}>{friend.name}</li>;
        })}
      </ul>
    </div>;
  }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending
  }
}
export default connect(mapStateToProps, { fetchFriends, createFriend })(App);