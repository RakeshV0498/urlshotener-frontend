import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { userVerify } from "../apis/register";

const Verify = () => {
  const navigate = useNavigate();

  const { verificationToken } = useParams();
  const [verificationMessage, setVerificationMessage] = useState("");

  useEffect(() => {
    console.log("Verification Token:", verificationToken); // Check if the token is extracted correctly
    const verifyEmail = async () => {
      try {
        const response = await userVerify(verificationToken);
        console.log("Verification API Response:", response); // Check the response from the API
        setVerificationMessage(response.msg);
      } catch (error) {
        console.error("Error verifying email:", error); // Log any errors that occur during the API call
        setVerificationMessage("An error occurred while verifying your email");
      }
    };

    if (verificationToken) {
      verifyEmail();
    }
  }, [verificationToken]);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="text-center">
        <Col>
          <FaCheckCircle size={100} color="green" className="mb-4" />
          <h2>User Verified</h2>
          <p>Your account has been successfully verified.</p>
          <p>{verificationMessage}</p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Verify;
