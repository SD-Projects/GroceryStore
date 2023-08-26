import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AddToCardBtn from "../../../Buttons/AddToCartBtn"

const Item = ({ productName, price, imagePath, id, productType, }) => {

  return (
    <div className='text-center card-container'>

      <Card id={productType.toLowerCase()}>
        <Card.Img src={imagePath} width={175} height={175} style={{ maxHeight: 120, maxWidth: 120, margin: "auto"}}/>
        <Card.Body>

          <Card.Title > {productName} </Card.Title>
          <Card.Footer >${price} </Card.Footer>
          <div >
            <AddToCardBtn id={id} price={price} imagePath={imagePath} productName={productName}></AddToCardBtn>
          </div>

        </Card.Body>
      </Card>

    </div>
  )
}

export default Item