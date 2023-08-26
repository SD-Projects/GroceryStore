import React, { useEffect } from 'react'
import { useState } from 'react'
import "../../css/SideBarCart/CSS_SideBarCart.css"
import CartItem from './CartItem';
import Button from 'react-bootstrap/Button'
import {connect} from "react-redux"

const SideBarCart = ( props ) => {

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("shoppingCart")))
    console.log(cartItems)

    useEffect(() => {

    }, [])


    return (
        <div className="sidebar-container slide-in-cart ">

            <div className='text-center'>
                <h4>My Cart</h4>
            </div>

            <div className='text-center checkout-btn'>
                <Button>Go To Checkout</Button>
            </div>

            {cartItems != null ? cartItems.map((item, index) =>
                <CartItem id={item.itemId}
                    name={item.name}
                    index={index}
                    price={item.price}
                    quantity={item.quantity}
                    imagePath={item.imagePath}
                    productName={item.productName}>

                </CartItem>

            ) : null}

        </div>
    )
}

const mapStateToProps = state =>{
    return{
        userShoppingCart : ""
    }
}

const getCart = () =>{
    return JSON.parse(localStorage.shoppingCart)
}

const mapDispatchToProps = dispatch => {
    return{
        getCart: () => dispatch(console.log("ASD"))
    }
}

export default SideBarCart