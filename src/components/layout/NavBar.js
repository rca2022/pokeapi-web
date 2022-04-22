import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-md navbar-dark flex-column flex-md-row bd-navbar"> */}
        <nav className = "navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className = "navbar-brand" href="#">
              <div className="nav-text">
                &emsp; PokeAPI Sample
              </div>
            </a>
        </nav>
      </div>
    )
  }
}
