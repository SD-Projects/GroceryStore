import React from 'react'
import { Figure } from 'react-bootstrap'
import AddToCartBtn from './AddToCartBtn'

const Item = () => {
  return (
    <div className='text-center'>
        <Figure>
            <Figure.Image
                width={180}
                height={180}
                // alt="171x180"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                roundedCircle = "true"
                />

            <Figure.Caption>
                <div className='text-center'>
                    <h3>Test</h3>
                    <p>Price</p>
                </div>
            </Figure.Caption>

        </Figure>

        <AddToCartBtn></AddToCartBtn>

    </div>
  )
}

export default Item