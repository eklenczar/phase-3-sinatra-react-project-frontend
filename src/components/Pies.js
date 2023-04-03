import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import PieCard from './PieCard';

function Pies( {pies, setPies, customers} ) {
  // console.log(pies)


  const renderPies = pies.map(pie => {
    return (
      <Col key={pie.id} xs="auto">
        <PieCard
          setPies={setPies}
          pie={pie}
          customers={customers}
        />
      </Col>
    )
  })
  
return (
  <Container fluid className="p-3"> 
  <Row className="g-3">{renderPies}</Row>
</Container>
  )
}

export default Pies