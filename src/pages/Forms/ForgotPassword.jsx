import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaEnvelope } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { forgotPassword } from "../../apis/forgotPassword.js";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await forgotPassword(email);
      setMessage(response.msg);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.msg);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Forgot Password</h2>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default ForgotPassword;
