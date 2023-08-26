import React from 'react'
import ItemTiles from './ItemTiles'
import "../../../css/Grocery/CSS_catalogpanel.css"

const CatalogPanel = ({ items, info }) => {

  return (
    <div>
      <ItemTiles info={info} items={items}></ItemTiles>
    </div>
  )
}

export default CatalogPanel