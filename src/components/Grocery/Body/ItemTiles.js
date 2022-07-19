import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import "../../../css/Grocery/CSS_itemtiles.css"
import Item from './Item/Item'

const ItemTiles = ({ items, info }) => {

    return (
        <div className="catalogpanel-container">

            {items.map((item) =>

                <Item id={item._id}
                    productName={item.productName}
                    price={item.price}
                    imagePath={item.imagePath}
                    productType={item.productType}

                />
            )}

            {/* <Item></Item> */}

        </div>
    )
}

export default ItemTiles