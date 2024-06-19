import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendURL } from "../../apis/constants.js";

const URLTable = () => {
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchURLs = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${backendURL}urls`, {
          headers: { Authorization: token },
        });
        setUrls(response.data);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };
    fetchURLs();
  }, []);

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
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default URLTable;
