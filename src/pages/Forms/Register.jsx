import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { userSignup } from "../../Apis/register";
import { useState } from "react";

function Register() {
  const initialData = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  const navigate = useNavigate();

  const [userData, setUserData] = useState(initialData);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userSignup(userData);
      if (response && response.msg) {
        setMessage(response.msg);
        setIsError(false);
        navigate("/login");
      } else {
        throw new Error("Unknown error occurred");
      }
    } catch (error) {
      setMessage("Error registering user");
      setIsError(true);
      console.error(error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Register</h2>
        {message && (
          <div
            className={`alert ${isError ? "alert-danger" : "alert-success"}`}
            role="alert"
          >
            {message}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup>
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <InputGroup>
              <InputGroup.Text>
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
              />
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputGroup>
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Register;
