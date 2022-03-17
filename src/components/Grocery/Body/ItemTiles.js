import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import "../../../css/Grocery/CSS_itemtiles.css"
import Item from './Item/Item'

const ItemTiles = ({items}) => {

    return (
        <div className="catalogpanel-container">

            {items.map((item) => 
                <Item productName = {item.productName}
                    price = {item.price}
                    imageFile = {item.imageFile}

                />
            )}

        </div>
    )
}

export default ItemTiles