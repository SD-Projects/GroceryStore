import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import "../../css/SideBarCart/CSS_SideBarItem.css"
import ListGroup from 'react-bootstrap/ListGroup'

const CartItem = ({ price, quantity, index, imagePath, productName}) => {

    const [updateCartItem, setUpdatedCartItem] = useState()

    const incrementQuantity = (e) => {
        setUpdatedCartItem(JSON.parse(localStorage.user).result.shoppingCart[e.target.id].quantity+=1)

        fetch("/users/incrementCartItem", {

            method: "POST",
            body: "d",
            headers: {
                'Content-Type': 'application/json'
            },

        })
    }

    const decrementQuantity = () => {

    }

    return (
        <div>

            <ListGroup variant="flush">
                <div>
                    <ListGroup.Item>

                        <div className='list-container'>

                            <div className='contents-container'>
                                <div className='product-name'>
                                    {productName}
                                </div>

                                <div>
                                    $ {price}
                                </div>

                                <p>Quantity : {quantity}</p>
                                <Button id="yes" index={index} onClick={decrementQuantity} className="btnItem">-</Button>
                                <Button id={index} index={index} onClick={incrementQuantity} className="btnItem">+</Button>

                            </div>

                            <div className='image-container'>
                                <img src={imagePath}></img>
                            </div>
                        </div>

                    </ListGroup.Item>

                </div>
            </ListGroup>
        </div>
    )
}

export default CartItem