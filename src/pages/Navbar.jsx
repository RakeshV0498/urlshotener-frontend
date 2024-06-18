import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import homeIcon from "../assets/HomeIcon.svg";

function MyNavbar() {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem("Authenticated"));
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={homeIcon}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="Logo"
          />
          MiniURL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav className="ml-auto gap-3">
            {isAuthenticated ? (
              <Button
                variant="outline-primary"
                className="mr-2"
                onClick={() => {
                  const closeRes = confirm("Are you sure want to log out ?");
                  if (closeRes) {
                    navigate("/");
                    localStorage.clear();
                  }
                }}
              >
                <FaSignOutAlt className="me-2" />
                Logout
              </Button>
            ) : (
              <Button
                variant="outline-primary"
                className="mr-2"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <FaSignInAlt className="me-2" />
                Login
              </Button>
            )}

            <Button
              variant="primary"
              onClick={() => {
                navigate("/register");
              }}
            >
              <FaUserPlus className="me-2" />
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
