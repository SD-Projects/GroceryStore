import React, { useState } from 'react'
import FilterPanel from './Body/FilterPanel'
import CatalogPanel from './Body/CatalogPanel'
import "../../css/Grocery/CSS_grocerybody.css"

const GroceryBody = ({items, info}) => {

    const [filter, setFilter] = useState("none")

    const doFilter = (data) => {
        setFilter(data)
    }

    return (
        <div className="grocery-body-container">

            <FilterPanel doFilter={doFilter}></FilterPanel>
            <CatalogPanel info={info} items={items}></CatalogPanel>

        </div>
    )
}

export default GroceryBody