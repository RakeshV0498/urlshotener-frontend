import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import {
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaLink,
  FaTachometerAlt,
  FaTable,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/heroImg.jpg";

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem("Authenticated"));

  return (
    <Container
      className="my-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "40px",
        borderRadius: "10px",
      }}
    >
      <Row className="align-items-center">
        <Col md={6}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Welcome to Our URL Shortener
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            Simplify your links, track analytics, and manage your URL shortening
            needs with ease.
          </p>
          <div style={{ marginBottom: "20px" }}>
            <FaCheckCircle
              size={24}
              color="#007bff"
              style={{ marginRight: "10px" }}
            />
            <span style={{ fontSize: "1.1rem" }}>Easy to Use</span>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <FaStar size={24} color="#007bff" style={{ marginRight: "10px" }} />
            <span style={{ fontSize: "1.1rem" }}>Reliable and Fast</span>
          </div>
          {isAuthenticated ? (
            <ButtonGroup vertical className="mt-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/url-shortener")}
              >
                <FaLink className="mr-2" /> URL Shortener{" "}
                <FaArrowRight className="ml-2" />
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/dashboard")}
              >
                <FaTachometerAlt className="mr-2" /> Dashboard{" "}
                <FaArrowRight className="ml-2" />
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/urlTable")}
              >
                <FaTable className="mr-2" /> Data Table{" "}
                <FaArrowRight className="ml-2" />
              </Button>
            </ButtonGroup>
          ) : (
            <Button
              variant="primary"
              size="lg"
              className="mt-3"
              onClick={() => navigate("/login")}
            >
              Click here to Get Started! <FaArrowRight className="ml-2" />
            </Button>
          )}
        </Col>
        <Col md={6}>
          <Image
            src={heroImg}
            alt="URL Shortener"
            fluid
            style={{
              borderRadius: "9px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
