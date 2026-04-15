import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Senior Move: Add global error interceptors here
client.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401s or global logging here
    return Promise.reject(error);
  },
);

export default client;
