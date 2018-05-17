import React, { Component } from 'react';
import './App.css';
import { fetchFriends, createFriend } from './actions';
import { connect } from 'react-redux';
import AddFriend from './AddFriend';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    console.log(this.props)
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Friends</h1>
      </header>
      <div>
        <AddFriend />
      </div>
      <div className="friend-container">
        {this.props.friends.map(friend => {
          return (
            <div key={friend.name} className="friend-card">
              <ul>
                <li><span style={{ color: 'coral' }}>Name:</span> {friend.name}</li>
                <li><span style={{ color: 'coral' }}>Age:</span> {friend.age}</li>  
                <li><span style={{ color: 'coral' }}>Email:</span> {friend.email}</li>
              </ul>
            </div>
          )
        })}
      </div>
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