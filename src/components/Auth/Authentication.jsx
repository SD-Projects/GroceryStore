import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import decode from 'jwt-decode';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "../../css/Auth/CSS_signup.css"

const Authentication = () => {

    const initialFormData = ({ firstname: "", lastname: "", email: "", password: "", shoppingCart: [] })

    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [formData, setFormData] = useState(initialFormData)

    const handleFormChange = () => {
        setIsLoggingIn(!isLoggingIn)
    }

    const handleUserFormSubmit = async (e) => {
        e.preventDefault()

        if (isLoggingIn === true) {
            await fetch("/users/login", {

                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(formData)

            })
                .then(res => res.json())
                .then((json) => {
                    localStorage.setItem("token", JSON.stringify(json.token));
                    localStorage.setItem("shoppingCart", JSON.stringify(json.shoppingCart))
                    localStorage.setItem("user", JSON.stringify(json.user))
            } )
        }

        else if (isLoggingIn === false) {
            fetch("/users/register", {

                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())

        }
    }

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <Container>

            <Form onSubmit={handleUserFormSubmit}>
                <div className="form-auth">
                    {isLoggingIn === false ?

                        <>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formFirstName">
                                    <Form.Control onChange={handleInputChange} type="name" placeholder="First Name" name="firstname" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formLastName">
                                    <Form.Control onChange={handleInputChange} type="text" placeholder="Last Name" name="lastname" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Control onChange={handleInputChange} type="name" placeholder="Email" name="email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Control onChange={handleInputChange} type="password" placeholder="Password" name="password" />
                            </Form.Group>

                            <div className="btn-submit">
                                <Button variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            </div>


                            <div className="btn-change-form">
                                <a onClick={handleFormChange}>Already have an account? Log in here</a>
                            </div>

                        </>

                        :

                        <>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Control onChange={handleInputChange} name="email" type="name" placeholder="Email" />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Control onChange={handleInputChange} name="password" type="password" placeholder="Password" />
                            </Form.Group>

                            <div className="btn-submit">
                                <Button variant="primary" type="submit" >
                                    Login
                                </Button>
                            </div>

                            <div className="btn-change-form">
                                <a onClick={handleFormChange}>Don't have an account? Sign up here</a>
                            </div>

                        </>
                    }
                </div>
            </Form>
        </Container>
    )
}

export default Authentication