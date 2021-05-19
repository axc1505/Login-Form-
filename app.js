import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login=(
      <form onSubmit={this.authorize} action="#">
      <input type="password" placeholder="Password" />
      <input type="submit"/> </form>
    );

    const contactInfo=(
      <ul></ul>
    );


    return (
      <div id="authorization">
      <h1>
      {this.state.authorized ? 'Contact' : 'Enter the password' } </h1>
      {this.state.authorized ? contactInfo : login }
        <ul>
          <li>
            client@alexandruvirbanescu.ro
          </li>
          <li>
            0737 289 043
          </li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);
