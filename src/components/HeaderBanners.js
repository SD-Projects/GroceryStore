import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import "../css/CSS_headerbanner.css"

const HeaderBanners = () => {
    return (
        <div>

            <Container>
                <Row>

                    {/* <Col className="banner-text" sm={4}>
                        <div >
                            <h3>Fresh Produce</h3>
                            <p>All the time</p>
                        </div>
                    </Col> 

                     <Col>
                        <Carousel>
                            <Carousel.Item interval={1000} >
                                <img className="images"
                                    src="https://i2.lensdump.com/i/rLTLYM.jpg"
                                    alt="Groceries"
                                ></img>
                            </Carousel.Item>

                            <Carousel.Item interval={1000}>
                                <img className=""
                                    src="https://food.ubc.ca/wp-content/uploads/2020/02/Save-Money-On-Groceries_UBC-Food-Services.jpg"
                                    alt="Groceries"
                                ></img>
                            </Carousel.Item>

                            <Carousel.Item interval={1000}>
                                <img className=""
                                    src="https://g.foolcdn.com/editorial/images/160552/grocery-bag-full-of-fresh-produce.jpg"
                                    alt="Groceries"
                                ></img>
                            </Carousel.Item>
                        </Carousel>

                    </Col> */}

                </Row>
            </Container>

        </div>
    )
}

export default HeaderBanners