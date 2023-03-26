import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
