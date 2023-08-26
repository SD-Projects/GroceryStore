import "../../css/CSS_mainnav-bar.css"
import { useState, useEffect } from "react";
import React from 'react'
import { Button, NavDropdown, } from "react-bootstrap"
import { AiOutlineShoppingCart } from "react-icons/ai";
import jwt_decode from "jwt-decode";
import LogOutBtn from "../Buttons/LogOutBtn";
import LogInBtn from "../Buttons/LogInBtn";
import SideBarCart from "../SideBarCart/SideBarCart";

const MainNavBar = ({ info }) => {

  let user
  if (localStorage.user != undefined) {
    user = JSON.parse(localStorage.user).name
  }

  const [toggleSidebar, setToggleSidebar] = useState(false)

  const openSideCart = () => {
    setToggleSidebar(!toggleSidebar)
  }

  return (
    <div>

      <nav className="navbar-header responsive-navbar">
        <h3>Local Grocer</h3>

        <ol className="header-buttons-responsive">
          <NavDropdown title="Menu">
          <NavDropdown.Item href="/" className="navbar-links">Home</NavDropdown.Item>
            <NavDropdown title={<span className="navbar-dropdown-title">Our Products  </span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/grocery">Meat</NavDropdown.Item>
              <NavDropdown.Item href="/grocery">Fish</NavDropdown.Item>
              <NavDropdown.Item href="/grocery">Vegetables</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/grocery">Current Specials</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Item href="/" className="navbar-links">Contact</NavDropdown.Item>
          </NavDropdown>
          </ol>

          <ol className="header-buttons">
          <li> <a href="/" className="navbar-links">Home</a></li>
          <li>
            <NavDropdown title={<span className="navbar-dropdown-title">Our Products  </span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/grocery">Meat</NavDropdown.Item>
              <NavDropdown.Item href="/grocery">Fish</NavDropdown.Item>
              <NavDropdown.Item href="/grocery">Vegetables</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/grocery">Current Specials</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li> <a href="#" className="navbar-links">Contact</a></li>
        </ol>

        <div className="navbar-login-cart">

          {user !== undefined ?
            <div>
              <p>{user}</p>
              <LogOutBtn >Logout</LogOutBtn>

              <Button onClick={openSideCart} className="navbar-cart-btn" style={{ paddingTop: 0, backgroundColor: "transparent", color: "black", border: "none" }}>
                <AiOutlineShoppingCart size={25}></AiOutlineShoppingCart>
              </Button>
            </div>
            :
            <div>
              <a href="/login">
                <LogInBtn className="nav-login-btn"> Log in </LogInBtn>
              </a>
            </div>
          }

          {toggleSidebar ? <SideBarCart info={info} openSideCart={openSideCart}></SideBarCart> : null}

        </div>
      </nav>
    </div>
  )
}

export default MainNavBar