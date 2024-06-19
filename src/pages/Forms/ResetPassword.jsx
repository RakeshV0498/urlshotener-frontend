import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { FaLock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { resetPassword } from "../../apis/resetPassword.js";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

function PasswordReset() {
  const { token } = useParams();

  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (passwords.password !== passwords.confirmPassword) {
      setValidationError("Passwords do not match");
    } else {
      try {
        const response = await resetPassword(token, passwords.password);
        setSuccessMessage(response.message);
        setPasswords({
          password: "",
          confirmPassword: "",
        });
        setValidationError("");
      } catch (error) {
        console.error("Error resetting password:", error);
        setErrorMessage(error.response?.data?.message || "An error occurred");
      }
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 5000); // Navigate to login after 5 seconds

      return () => clearTimeout(timer); // Clear the timer on component unmount
    }
  }, [successMessage, navigate]);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaLock />
            </span>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={passwords.password}
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaLock />
            </span>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {validationError && (
            <Alert variant="danger" className="mt-2">
              <FaExclamationCircle className="mr-1" />
              {validationError}
            </Alert>
          )}
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Reset
        </Button>
        {successMessage && (
          <Alert variant="success" className="mt-2">
            <FaCheckCircle className="mr-1" />
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert variant="danger" className="mt-2">
            <FaExclamationCircle className="mr-1" />
            {errorMessage}
          </Alert>
        )}
      </Form>
    </div>
  );
}

PasswordReset.propTypes = {
  token: PropTypes.string,
};

export default PasswordReset;
