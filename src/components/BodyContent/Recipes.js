import React from 'react'
import "../../css/Body/CSS_recipes.css"

const Recipes = () => {
    return (
        <div className='container'>
            <div className='recipe-title'>
                <h3>Recipes</h3>
            </div>
            <div className='recipe-container'>

                <div className='recipe'>

                    <div className='recipe-body'>
                        <img src={require('../../media/images/recipes/chickenbowl.jpg')}></img>

                        <div className='recipe-information'>
                            <p className='recipe-title'>Chicken Bowl</p>
                            <p>Prep time: 25 min.</p>
                        </div>
                    </div>

                </div>
                <div className='recipe' style={{width: 250}}>

                    <div className='recipe-body'>
                        <img src={require('../../media/images/recipes/pancakes.jpg')} style={{width: 250}}></img>

                        <div className='recipe-information'>
                            <p className='recipe-title'>Fluffy pancakes</p>
                            <p>Prep time: 15 min.</p>
                        </div>
                    </div>

                </div>
                <div className='recipe'>

                    <div className='recipe-body'>
                        <img src={require('../../media/images/recipes/dumplings.jpg')}></img>

                        <div className='recipe-information'>
                            <p className='recipe-title'>Dumplings</p>
                            <p>Prep time: 35 min.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Recipes