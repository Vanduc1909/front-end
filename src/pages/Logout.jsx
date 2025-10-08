// src/components/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  return <div className="container">Đang đăng xuất...</div>;
};

export default Logout;
