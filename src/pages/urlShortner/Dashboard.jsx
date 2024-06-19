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
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const dailyResponse = await axios.get(
          "http://localhost:8100/analytics/daily-count",
          {
            headers: { Authorization: token },
          }
        );
        const monthlyResponse = await axios.get(
          "http://localhost:8100/analytics/monthly-count",
          {
            headers: { Authorization: token },
          }
        );
        setDailyData(dailyResponse.data);
        setMonthlyData(monthlyResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <Row>
        <Col className="d-flex justify-content-between mb-4">
          <Button variant="primary" onClick={() => navigate("/url-shortener")}>
            URL Shortener
          </Button>
          <Button variant="primary" onClick={() => navigate("/urlTable")}>
            Daily Data Table
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
