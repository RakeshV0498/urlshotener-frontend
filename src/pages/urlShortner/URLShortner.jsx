import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { FaLink, FaArrowRight, FaHome } from "react-icons/fa";
import { backendURL } from "../../apis/constants";
import { urlShorten } from "../../apis/urlAPI";
import { useNavigate } from "react-router-dom";

const URLShortenerPage = () => {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await urlShorten({ longURL });
      setShortURL(response.shortURL);
      setMessage("");
    } catch (error) {
      setMessage("Error creating short URL");
      console.error(error);
    }
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="mb-4">
        <Col className="text-center">
          <Button
            variant="primary"
            onClick={() => navigate("/dashboard")}
            className="me-2"
          >
            <FaHome className="me-1" /> Dashboard
          </Button>
          <Button variant="secondary" onClick={() => navigate("/urlTable")}>
            <FaArrowRight className="me-1" /> View URL Table
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center mb-4">URL Shortener</h2>
          <p className="text-center mb-4">
            Enter a long URL to generate a shorter, more manageable link.
          </p>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaLink />
              </InputGroup.Text>
              <Form.Control
                type="url"
                placeholder="Enter long URL"
                value={longURL}
                onChange={(e) => setLongURL(e.target.value)}
                required
              />
            </InputGroup>
            <Button variant="primary" type="submit" className="w-100">
              Shorten URL
            </Button>
          </Form>
          {shortURL && (
            <Alert variant="success" className="mt-3 text-center">
              <h5>Short URL Created Successfully!</h5>
              <p>
                <a
                  href={`${backendURL}urls/${shortURL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${backendURL}urls/${shortURL}`}
                </a>
              </p>
            </Alert>
          )}
          {message && (
            <Alert variant="danger" className="mt-3 text-center">
              {message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default URLShortenerPage;
