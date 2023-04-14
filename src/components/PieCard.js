import React from 'react'
import Card from 'react-bootstrap/Card';

function PieCard( {pie}) {
    const { image, flavor, description, price } = pie

    

  return (
    // <div>Pie Card</div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />    
      <Card.Body>
        <Card.Title>{flavor}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        
        
      </Card.Body>
    </Card>
  )
}

export default PieCard