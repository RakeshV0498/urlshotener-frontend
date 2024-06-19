import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row className="justify-content-between">
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" className="text-dark mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-dark mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-dark mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-dark mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <h5>Contact Us</h5>
            <p>1234 Street Name, City, State, 56789</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Miniurl. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
