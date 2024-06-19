import { useEffect, useState } from "react";
import { Container, Table, Button, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getURLs } from "../../apis/analytics.js";
import { backendURL } from "../../apis/constants.js";

const URLTable = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchURLs = async () => {
      const token = localStorage.getItem("token");
      try {
        const urls = await getURLs(token);
        setUrls(urls);
      } catch (error) {
        console.error("Error fetching URLs:", error);
        setError("Failed to fetch URLs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchURLs();
  }, []);

  if (loading) {
    return (
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Spinner animation="border" role="status" className="mb-3">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading URLs, please wait...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
        <div className="d-flex justify-content-between mb-4">
          <Button variant="primary" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
          <Button variant="primary" onClick={() => navigate("/url-shortener")}>
            URL Shortener
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Created URLs</h2>
      <div className="d-flex justify-content-between mb-4">
        <Button variant="primary" onClick={() => navigate("/dashboard")}>
          Dashboard
        </Button>
        <Button variant="primary" onClick={() => navigate("/url-shortener")}>
          URL Shortener
        </Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Short URL</th>
            <th>Long URL</th>
            <th>Date Created</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.id}>
              <td>{url.id}</td>
              <td>
                <a
                  href={`${backendURL}urls/${url.shortURL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url.shortURL}
                </a>
              </td>
              <td>{url.longURL}</td>
              <td>{new Date(url.createdAt).toLocaleString()}</td>
              <td>{url.createdBy}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default URLTable;
