import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/heroImg.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Welcome to Our URL Shortener</h1>
          <p>
            Simplify your links, track analytics, and manage your URL shortening
            needs with ease.
          </p>
          <p>
            <FaCheckCircle /> Easy to Use
          </p>
          <p>
            <FaStar /> Reliable and Fast
          </p>
          <Button
            variant="primary"
            size="lg"
            className="mt-3"
            onClick={() => {
              navigate("/shortener");
            }}
          >
            Get Started <FaArrowRight className="ml-2" />
          </Button>
        </Col>
        <Col md={6}>
          <Image
            src={heroImg}
            alt="URL Shortener"
            fluid
            style={{ borderRadius: "9px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
