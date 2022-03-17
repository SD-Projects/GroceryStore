import "../../css/CSS_mainnav-bar.css"
import { useState } from "react";
import React from 'react'
import { Container, Nav, Navbar, Col, Button, Row, NavDropdown, Dropdown, Form, FormControl, NavbarBrand } from "react-bootstrap"
import { AiOutlineShoppingCart } from "react-icons/ai";

var x = 0
var user = "Dog"

const MainNavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>

      <nav className="navbar-header">
        <h3>Local Grocer</h3>

        <ol>
          <li> <a href="#" className="navbar-links">Home</a></li>
          <li>
            <NavDropdown title={<span className="navbar-dropdown-title">Our Products  </span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Meat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vegetables</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Current Specials</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li> <a href="#" className="navbar-links">Contact</a></li>
        </ol>

        <div className="navbar-login-cart">

          {isLoggedIn == false ?
            <Button className="nav-login-btn" style={{color: "white", borderRadius: 15, paddingLeft: 20, paddingRight: 20, paddingTop: 5, backgroundColor: "#77dd77", border: "none" }}>
            <a  href="/login">Log in</a>
            </Button> : "Welcome, " + { user }}

          <Button className="navbar-cart-btn" style={{ paddingTop: 0, backgroundColor: "transparent", color: "black", border: "none" }}><AiOutlineShoppingCart size={25}></AiOutlineShoppingCart> {x} </Button>
        </div>

      </nav>

    </div>
  )
}

export default MainNavBar