import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Controllers extends Component {
  render() {
    return (
      <div id="navbar_wrapper">
        <ul>
          <li><Link to="/" className="navbar_link">Back</Link></li>
          <li><Link to="/main_content/Search_Results" className="navbar_link">Add problem</Link></li>
          <li><Link to="/main_content/Search_Results" className="navbar_link">Add solution</Link></li>
          <li><Link to="/main_content/Search_Results" className="navbar_link">Add translation</Link></li>
        </ul>
      </div>
    )
  }
}

export default Controllers;