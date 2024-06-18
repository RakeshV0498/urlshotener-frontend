import { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { backendURL } from "../../apis/constants";
import { urlShorten } from "../../apis/urlAPI";

const URLShortenerPage = () => {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [message, setMessage] = useState("");

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
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <h2 className="text-center mb-4">URL Shortener</h2>
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
            <div className="mt-3">
              <h5>{`Short URL: ${longURL} - Converted to `}</h5>
              <a
                href={`${backendURL}urls/${shortURL}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`https://${shortURL}.com`}
              </a>
            </div>
          )}
          {message && <div className="alert alert-danger mt-3">{message}</div>}
        </Col>
      </Row>
    </Container>
  );
};

export default URLShortenerPage;
