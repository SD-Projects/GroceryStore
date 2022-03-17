import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Figure } from "react-bootstrap"
import "../../css/Body/CSS_bodysales.css"

const BodySales = () => {

    const [onSaleProducts, setOnSaleProducts] = useState([])

    useEffect(() => {
        getProducts()


    }, [])

    const getProducts = async () => {
        await fetch("/products/sales")
            .then(response => (response.json()))
            .then(json => setOnSaleProducts(json))

    }

    return (
        <div>

            <Container>
                <div className="body-sales-title">
                    <h4>Current Sales</h4>
                    <h6> <a href="#">View all</a></h6>
                </div>

                <Row style={{ textAlign: "center" }}>

                    {onSaleProducts.map((item) => (
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    // src={require("../../media/images/sales/Apple.png")}
                                />
                                <Figure.Caption className="text-center">
                                    <h6>{item.productName}</h6>
                                    <p>${item.price}</p>
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    )
}

export default BodySales