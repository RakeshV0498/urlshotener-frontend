// src/api/api.js

import axios from "axios";
import { backendURL } from "../apis/constants.js";

const getDailyCount = async (token) => {
  const response = await axios.get(`${backendURL}analytics/daily-count`, {
    headers: { Authorization: token },
  });
  return response.data;
};

const getMonthlyCount = async (token) => {
  const response = await axios.get(`${backendURL}analytics/monthly-count`, {
    headers: { Authorization: token },
  });
  return response.data;
};

const getURLs = async (token) => {
  const response = await axios.get(`${backendURL}urls`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export { getDailyCount, getMonthlyCount, getURLs };
