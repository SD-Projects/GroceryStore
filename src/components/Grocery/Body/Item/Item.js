import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = ({ productName, price, itemFile }) => {
  return (
    <div>

      <Card >
        <Card.Img src={`data:image/jpeg;base64,${itemFile}`}/>
        <Card.Body>

          <Card.Title> {productName} </Card.Title>
          <Card.Footer> {price} </Card.Footer>
          <Button>Add to cart</Button>

        </Card.Body>
      </Card>

    </div>
  )
}

export default Item