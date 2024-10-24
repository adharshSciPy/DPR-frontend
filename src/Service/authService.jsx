import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/admin/login`, {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", response.data.userType);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return localStorage.getItem("user");
};

const getCurrentToken = () => {
  return localStorage.getItem("token");
};

const authService = {
  login,
  logout,
  getCurrentToken,
  getCurrentUser,
};

export default authService;
