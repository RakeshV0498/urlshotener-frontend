import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Follow Us</h5>
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
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-dark">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
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
            <p className="mb-0">&copy; 2024 My Website. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
