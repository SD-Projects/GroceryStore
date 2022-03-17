import React from 'react'
import GroceryBody from './GroceryBody'
import { Container } from 'react-bootstrap'
import "../../css/Grocery/CSS_grocerybody.css"
import { useEffect, useState } from 'react'
import MainNavBar from '../Navbar/MainNavBar'

const Grocery = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getItems()

    
  }, [])

  const getItems = () =>{
    fetch("/products/getgrocerylist")
    .then(res => res.json())
    .then(json => setItems(json))
  }
  

  return (
    <div>
      <MainNavBar></MainNavBar>
      <Container >

        {items.length === 0 ? <h3>Please hold</h3> : <GroceryBody items={items}></GroceryBody>}
        
      </Container>

    </div>
  )
}

export default Grocery