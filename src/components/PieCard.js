import React from 'react'
import Card from 'react-bootstrap/Card';
import PieModal from './PieModal'
import Pies from './Pies';
import Button from 'react-bootstrap/Button';

function PieCard( {pie, setPies, customers}) {
    const { flavor, price, image, description } = pie

    function handleNewPie(newPie) {
        setPies(...Pies, newPie)
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{flavor}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <PieModal customers={customers} pie={pie} onNewPie={handleNewPie}/>
      </Card.Body>
    </Card>
  )
}

export default PieCard