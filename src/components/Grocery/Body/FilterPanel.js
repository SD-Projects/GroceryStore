import React from 'react'
import ItemTiles from './ItemTiles'
import "../../../css/Grocery/CSS_filterpanel.css"

const FilterPanel = () => {
  return (
    <div className="filter-container">

        <p>Categories</p>

        <ol>
            <div >
                
                <div className="filter-checkbox-container">
                    <input type="checkbox" className="checkbox"></input>
                    <div className="checkbox-label">
                        <span>Dairy</span>
                    </div>
                </div>
                
                <div className="filter-checkbox-container">
                    <input type="checkbox" className="checkbox"></input>
                    <div className="checkbox-label">
                        <span>Fruit</span>
                    </div>
                </div>
                
                <div className="filter-checkbox-container">
                    <input type="checkbox" className="checkbox"></input>
                    <div className="checkbox-label">
                        <span>Vegetable</span>
                    </div>
                </div>
                
                <div className="filter-checkbox-container">
                    <input type="checkbox" className="checkbox"></input>
                    <div className="checkbox-label">
                        <span>Meat</span>
                    </div>
                </div>
                
                <div className="filter-checkbox-container">
                    <input type="checkbox" className="checkbox"></input>
                    <div className="checkbox-label">
                        <span>Poultry</span>
                    </div>
                </div>
                
                <div className="filter-checkbox-container">
                    <input type="checkbox" className="checkbox"></input>
                    <div className="checkbox-label">
                        <span>Sale</span>
                    </div>
                </div>
                
               

            </div>
        </ol>

    </div>
  )
}

export default FilterPanel