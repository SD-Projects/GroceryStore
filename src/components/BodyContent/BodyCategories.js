import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import "../../css/Body/CSS_bodycategory.css"

const BodyCategories = () => {
    return (
        <div>

            <Container >

                <h4>Browse by category</h4>
                <Row >
                    <Col>

                        <Card style={{ width: '18rem', height: "10rem", border: 0, backgroundColor: "#FC4F4F" }}>
                            <a href="/grocery" className="category-link">
                                <Card.Body>
                                    <Card.Title>Fresh Fruits</Card.Title>
                                    <Card.Text style={{margin:10}}>
                                        Tangerines galore
                                    </Card.Text>
                                    <div className="text-center">
                                        <Card.Img src={require("../../media/images/categories/Fruits.png")} style={{ width: 125 }} height={110}></Card.Img>
                                    </div>
                                </Card.Body>
                            </a>
                        </Card>

                    </Col>

                    <Col>
                        <Card style={{ width: '18rem', height: "10rem", border: 0, backgroundColor: "#77dd77" }} >
                            <a href="/grocery" className="category-link">
                                <Card.Body>
                                    <Card.Title>Vegetables</Card.Title>
                                    <Card.Text style={{margin:10}}>
                                        Locally grown
                                    </Card.Text>
                                    <div className="text-center">
                                        <Card.Img src={require("../../media/images/categories/Vegetables.png")} style={{ width: 170 }} height={100}></Card.Img>
                                    </div>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>

                    <Col >
                        <Card style={{ width: '18rem', height: "10rem", border: 0, backgroundColor: "#FFB2A6" }} >
                            <a href="/grocery" className="category-link">
                                <Card.Body >
                                    <Card.Title>Meats</Card.Title>
                                    <Card.Text style={{margin:10}}>
                                        Highest quality cuts
                                    </Card.Text>
                                    <Card.Img src={require("../../media/images/categories/Meat.png")} style={{ width: 259 }} height={125}></Card.Img>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem', height: "10rem", border: 0, backgroundColor: "#DEC04C" }} >
                            <a href="/grocery" className="category-link">
                                <Card.Body>
                                    <Card.Title>Baked Goods</Card.Title>
                                    <Card.Text style={{margin:10}}>
                                        Made today
                                    </Card.Text>
                                    <div className="text-center">
                                        <Card.Img src={require("../../media/images/categories/Bread.png")} style={{ width: 180 }} height={100}></Card.Img>
                                    </div>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default BodyCategories