// For reference The below video was a great tutorial on the Nav Bar in React.
// https://www.youtube.com/watch?v=fL8cFqhTHwA


import React, { Component } from 'react'

import { MenuItems } from "./MenuItems"
import'./Navbar.css'

class Navbar extends Component {

  render() {
    return(
      <nav className="NavbarItems" >

        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon"></div>

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
          
        </ul>

      </nav>
    )
  }
}

export default Navbar