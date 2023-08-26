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
                    
                    <p></p>
                    <div className='testing'>
                        <h4>Current Sales</h4>
                    </div>
                    <h6> <a href="#">View all</a></h6>
                </div>

                <div className='sales-container' style={{ textAlign: "center" }}>

                    {onSaleProducts.map((item) => (
                        <Col>
                            <Figure className='sale-figure'>
                                <Figure.Image
                                    style={{ width: 100, height: 100 }}
                                    alt="Image"
                                    src={item.imagePath}
                                />
                                <Figure.Caption className="text-center">
                                    <h5>{item.productName}</h5>
                                    <p>${item.price}</p>
                                    <p style={{ color: "red" }}>Sale: {(item.price / 2).toFixed(2)}</p>
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    ))}
                </div>

            </Container>
        </div>
    )
}

export default BodySales