import React from 'react'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import decode from "jwt-decode"

const AddToCartBtn = ({ price, id, imagePath, productName }) => {

  const item = ({ id: id, price: price, imagePath: imagePath, productName: productName })

  let user_id

  const AddToCart = (e) => {

    if (localStorage.user != undefined) {
      user_id = decode(JSON.parse(localStorage.token)).id
    }

    fetch("/users/addItemToCart", {

      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "user_id": user_id,
        'Content-Type': 'application/json'
      },

    })  
      .then(res => res.json())
      .then(json => localStorage.setItem("shoppingCart", JSON.stringify(json.shoppingCart)))

  }

  return (
    <div>
      <Button onClick={AddToCart} size='sm' variant="success" type="submit" >Add to cart</Button>
    </div>
  )
}

export default AddToCartBtn