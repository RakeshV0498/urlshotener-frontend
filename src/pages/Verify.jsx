import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { userVerify } from "../apis/register";

const Verify = () => {
  const navigate = useNavigate();

  const { verificationToken } = useParams();
  const [verificationMessage, setVerificationMessage] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  useEffect(() => {
    console.log("Verification Token:", verificationToken);
    const verifyEmail = async () => {
      try {
        const response = await userVerify(verificationToken);
        console.log("Verification API Response:", response);
        setVerificationMessage(response.msg);
        setVerificationSuccess(true);
      } catch (error) {
        console.error("Error verifying email:", error);
        setVerificationMessage("An error occurred while verifying your email");
        setVerificationSuccess(false);
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
          {verificationSuccess ? (
            <>
              <FaCheckCircle size={100} color="green" className="mb-4" />
              <h2>User Verified</h2>
              <p>Your account has been successfully verified.</p>
            </>
          ) : (
            <>
              <FaTimesCircle size={100} color="red" className="mb-4" />
              <h2>Verification Failed</h2>
              <p>{verificationMessage}</p>
            </>
          )}
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
