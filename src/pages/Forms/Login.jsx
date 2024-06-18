/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userLogin } from "../../apis/login";

function Login() {
  const isAuthenticated = Boolean(localStorage.getItem("Authenticated"));

  const navigate = useNavigate();

  const initialData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialData);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.clear();
    try {
      const response = await userLogin(loginData);
      if (response.code === 1) {
        localStorage.setItem("Authenticated", true);
        localStorage.setItem("token", response.user);
      }
    } catch (error) {
      return setMessage("Error logging in. Please check your credentials.");
    }

    setLoginData(initialData);
  };

  if (isAuthenticated) {
    return navigate("/");
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <FaLock />
              </span>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Sign In
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p>
            Forgot Password? <Link to="/forgot-password">Reset</Link>
          </p>
        </div>

        <div className="text-center mt-3">
          <p>
            Don&apos;t have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Login;
