import React from 'react'
import FilterPanel from './Body/FilterPanel'
import CatalogPanel from './Body/CatalogPanel'
import "../../css/Grocery/CSS_grocerybody.css"

const GroceryBody = ({items}) => {


    return (
        <div className="grocery-body-container">

            <FilterPanel></FilterPanel>
            <CatalogPanel items={items}></CatalogPanel>

        </div>
    )
}

export default GroceryBody