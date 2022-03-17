import React from 'react'
import ItemTiles from './ItemTiles'
import "../../../css/Grocery/CSS_catalogpanel.css"

const CatalogPanel = ({ items }) => {

  return (
    <div >
      <ItemTiles items={items}></ItemTiles>
    </div>
  )
}

export default CatalogPanel