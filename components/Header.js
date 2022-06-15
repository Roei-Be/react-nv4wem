import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    // const clickables = [{ name: "Home" }, { name: "Signup" }, { name: "Login" }, { name: "User_Page" }];
    return (
      <div id="navbar_wrapper">
        <ul>
          <li><Link to="/" className="navbar_link">Home</Link></li>
          <li><Link to="/Signup" className="navbar_link">Signup</Link></li>
          <li><Link to="/Login" className="navbar_link">Login</Link></li>
          <li><Link to="/User_Page" className="navbar_link">User_Page</Link></li>
        </ul>
      </div>
    )
  }
}

/*
import NavBar_Links from './NavBar_Links';
class Header extends Component {
  state = {
    activeIndex: null
  }
  handleClick = (index) => this.setState({ activeIndex: index });
  render() {
    const clickables = [{ name: "Home" }, { name: "Signup" }, { name: "Login" }, { name: "User_Page" }];
    return (
      <div id="navbar_wrapper">
        <ul>
          { clickables.map((clickable, i) => {
              return <NavBar_Links 
                key={ clickable.name }
                name={ clickable.name }
                index={ i }
                isActive={ this.state.activeIndex === i }
                onClick={ this.handleClick }
              />
            })
          }
        </ul>
      </div>
    )
  }
}
*/
export default Header;