// src/components/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../axios/index.js";

const Home = () => {
  const [data, setData] = useState("Đang tải...");

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching protected data:", error);
      }
    };
    fetchProtectedData();
  }, []);

  return (
    <div className="container">
      <h2>Trang chủ (Private)</h2>
      <p>Xin chào {data.username}</p>
      <Link to="/logout" className="link">
        Đăng xuất
      </Link>
    </div>
  );
};

export default Home;
