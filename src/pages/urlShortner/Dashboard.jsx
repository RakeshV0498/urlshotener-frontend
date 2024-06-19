import { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getDailyCount, getMonthlyCount } from "../../apis/analytics.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [dailyData, setDailyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const dailyData = await getDailyCount(token);
        const monthlyData = await getMonthlyCount(token);
        setDailyData(dailyData);
        setMonthlyData(monthlyData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const dailyChartData = {
    labels: dailyData.map((data) => data.date),
    datasets: [
      {
        label: "URLs Created Per Day",
        data: dailyData.map((data) => data.count),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const dailyChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Daily URL Creation Count",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
      },
    },
    maintainAspectRatio: false,
  };

  const monthlyChartData = {
    labels: monthlyData.map((data) => data.date),
    datasets: [
      {
        label: "URLs Created Per Month",
        data: monthlyData.map((data) => data.count),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
        ],
      },
    ],
  };

  const monthlyChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly URL Creation Count",
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
  };

  if (loading) {
    return (
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Spinner animation="border" role="status" className="mb-3">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading dashboard data, please wait...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
        <div className="d-flex justify-content-between mb-4">
          <Button variant="primary" onClick={() => navigate("/url-shortener")}>
            URL Shortener
          </Button>
          <Button variant="primary" onClick={() => navigate("/urlTable")}>
            Daily Data Table
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <Row>
        <Col className="d-flex justify-content-between mb-4">
          <Button variant="primary" onClick={() => navigate("/url-shortener")}>
            URL Shortener
          </Button>
          <Button variant="primary" onClick={() => navigate("/urlTable")}>
            View URL Table
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="d-flex flex-column align-items-center">
          <h4 className="text-center mb-3">Daily URL Creation Count</h4>
          <div style={{ width: "100%", height: "300px" }}>
            <Line data={dailyChartData} options={dailyChartOptions} />
          </div>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center">
          <h4 className="text-center mb-3">Monthly URL Creation Count</h4>
          <div style={{ width: "100%", height: "300px" }}>
            <Pie data={monthlyChartData} options={monthlyChartOptions} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
