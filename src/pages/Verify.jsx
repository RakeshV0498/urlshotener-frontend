import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="text-center">
        <Col>
          <FaCheckCircle size={100} color="green" className="mb-4" />
          <h2>User Verified</h2>
          <p>Your account has been successfully verified.</p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Verify;
