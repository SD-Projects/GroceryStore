import React from 'react'
import "../../css/Body/CSS_bodyheader.css"
import { Container, Row, Col, Button, Figure } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'


const BodyHeader = () => {
    return (
        <div>
            <Container>
                <Row className="header-body-container">

                    <Col className="header-phrase">
                        <div>
                            <h2>Fresh Groceries</h2>
                            <h3>Fast & Free Delivery!</h3>
                            <div className="shop-now-btn-container">
                                <Button className="shop-now-btn">Shop Now</Button>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <Carousel controls={false} pause={false} indicators={false} interval={3000}>
                            <Carousel.Item>
                                <div className='responsive-blob' style={{ position: "absolute", height: 230, width: 490, zIndex: -1 }}>
                                    <svg viewBox="-15 30 220 300" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#F1C21B" d="M48.1,-37C61.1,-22.2,69.3,-2.2,64.4,12.8C59.5,27.9,41.4,38.1,26.2,39.8C11,41.4,-1.2,34.6,-17.7,29.4C-34.2,24.3,-55,20.8,-64.1,7.1C-73.3,-6.6,-70.8,-30.5,-58.2,-45.3C-45.5,-60.1,-22.8,-65.7,-2.6,-63.6C17.6,-61.6,35.2,-51.8,48.1,-37Z" transform="translate(100 100)" />
                                    </svg>
                                </div>
                                <img src={require("../../media/images/header/headerBread.png")} style={{ width: 405, height: 250 }}></img>

                            </Carousel.Item>

                            <Carousel.Item>
                                <div className='responsive-blob' style={{ position: "absolute", height: 400, width: 650, zIndex: -1 }}>
                                    <svg viewBox="0 50 290 270" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#A7F0BA" d="M60.5,-45.3C69.8,-36.5,62.9,-11.9,54,6.4C45.2,24.7,34.2,36.6,19.5,45.7C4.7,54.9,-14,61.3,-29.9,56C-45.8,50.6,-59,33.6,-66.3,12.1C-73.6,-9.3,-75,-35.1,-63,-44.5C-51,-53.8,-25.5,-46.7,0,-46.8C25.6,-46.8,51.2,-54,60.5,-45.3Z" transform="translate(100 100)" />
                                    </svg>
                                </div>
                                <img src={require("../../media/images/header/Dairy.png")} style={{ width: 375, height: 250 }}></img>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className='responsive-blob' style={{ position: "absolute", height: 400, width: 650, zIndex: -1 }}>
                                    <svg viewBox="20 40 230 600" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#8A3FFC" d="M43.2,-37.6C51.5,-23.9,50.9,-6.2,48.6,13.9C46.2,33.9,42.1,56.4,31.8,58.3C21.6,60.2,5.2,41.7,-14.1,31.5C-33.4,21.3,-55.7,19.6,-59.5,11.2C-63.2,2.9,-48.5,-12.1,-35.5,-26.8C-22.6,-41.5,-11.3,-56,3.1,-58.5C17.4,-60.9,34.8,-51.3,43.2,-37.6Z" transform="translate(100 100)" />
                                    </svg>
                                </div>
                                <img src={require("../../media/images/header/Vegetables.png")} style={{ width: 405, height: 250 }}></img>
                            </Carousel.Item>

                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BodyHeader