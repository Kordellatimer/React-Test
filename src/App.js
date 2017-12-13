import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Section from './Section.js'
import Aside from './Aside.js'
import Footer from './Footer.js'

class App extends Component {

  state = {users: []}

  componentDidMount() {
    fetch('/react')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
      <Header></Header>
        <h1>Messages</h1>
        <ul>
        {this.state.users.map(user =>
          <li>
            <span>{user.name}</span>
            <span>{user.msg}</span>
            <span>{user.thumbUp}</span>
            <span><i class="fa fa-thumbs-up" aria-hidden="true"></i></span>
            <span><i class="fa fa-thumbs-down" aria-hidden="true"></i></span>
            <span><i class="fa fa-trash" aria-hidden="true"></i></span>
          </li>
        )}
        </ul>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
