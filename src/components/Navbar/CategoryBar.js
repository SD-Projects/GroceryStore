import React from 'react'
import "../../css/NavBars/CSS_categorybar.css"
import { Container, Nav, Navbar, Col, Button, Row, NavDropdown, Dropdown, Form, FormControl, NavbarBrand } from "react-bootstrap"


const CategoryBar = () => {
  return (
    <div>
      <Navbar className="" variant="">

      <Form className="navbar-searchbar d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Search</Button>
            </Form>

        
      </Navbar>
    </div>
  )
}

export default CategoryBar