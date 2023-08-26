import React from 'react'
import GroceryBody from './GroceryBody'
import { Container } from 'react-bootstrap'
import "../../css/Grocery/CSS_grocerybody.css"
import { useEffect, useState } from 'react'
import MainNavBar from '../Navbar/MainNavBar'
import decode from 'jwt-decode'

const Grocery = () => {

  const [items, setItems] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [info, setInfo] = useState()

  useEffect(() => {
    if(localStorage.getItem("user") !== "" || localStorage.getItem("user") !== undefined){
      // decodeToken()

    }
    getItems()
  }, [])

  const getItems = () =>{
    fetch("/products/getgrocerylist")
    .then(res => res.json())
    .then(json => setItems(json))
  }

  const item = ({ id: items.id, price: items.price, image: items.imagePath, name: items.name })
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
      <MainNavBar info={info}></MainNavBar>
      <Container >

        {items.length === 0 ? <h3>Please hold</h3> : <GroceryBody info={info} items={items}></GroceryBody>}
        
      </Container>

    </div>
  )
}

export default Grocery