import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PieCard from "./PieCard";
import NewPieModal from "./NewPieModal";

function PieContainer({ pies, setPies }) {

  function handleNewPie(newPie) {
    setPies([...pies, newPie]);
  }

  const renderPies = pies.map((pie) => {
    return (
      <Col key={pie.id} xs="auto">
        <PieCard pie={pie} />
      </Col>
    );
  });

  return (
    <Container fluid className="p-3">
      <NewPieModal onAddPie={handleNewPie} />
      <Row className="g-3">{renderPies}</Row>
    </Container>
  );
}

export default PieContainer;
