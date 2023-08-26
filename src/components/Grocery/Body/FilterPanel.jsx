import React from 'react'
import ItemTiles from './ItemTiles'
import "../../../css/Grocery/CSS_filterpanel.css"

const FilterPanel = ({ doFilter }) => {

    const handleChecked = (e) =>{
        let isChecked = e.target.value
        console.log(isChecked)
    }

    return (

        <div className="filter-container">

            <p>Categories</p>

            <ol>
                <div >

                    <div className="filter-checkbox-container">
                        <input id="dairy" value={"dairy"} type="checkbox" onChange={handleChecked} className="checkbox"></input>
                        <div className="checkbox-label">
                            <span>Dairy</span>
                        </div>
                    </div>

                    <div className="filter-checkbox-container">
                        <input id="fruit" value={"fruit"} type="checkbox" onChange={handleChecked} className="checkbox"></input>
                        <div className="checkbox-label">
                            <span>Fruit</span>
                        </div>
                    </div>

                    <div className="filter-checkbox-container">
                        <input id="vegetable" value={"vegetable"} type="checkbox" className="checkbox"></input>
                        <div className="checkbox-label">
                            <span>Vegetable</span>
                        </div>
                    </div>

                    <div className="filter-checkbox-container">
                        <input id="meat" value={"meat"} type="checkbox" className="checkbox"></input>
                        <div className="checkbox-label">
                            <span>Meat</span>
                        </div>
                    </div>

                    <div className="filter-checkbox-container">
                        <input id="poultry" value={"poultry"} type="checkbox" className="checkbox"></input>
                        <div className="checkbox-label">
                            <span>Poultry</span>
                        </div>
                    </div>

                    <div className="filter-checkbox-container">
                        <input id="sale" value={"sale"} type="checkbox" className="checkbox"></input>
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