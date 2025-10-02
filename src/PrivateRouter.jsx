import { Navigate, Outlet } from "react-router-dom";

// Giả sử bạn có một hàm kiểm tra đăng nhập
const isAuthenticated = () => {
  // Ví dụ: kiểm tra token trong localStorage
  return !!localStorage.getItem("user");
};

const PrivateRouter = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
