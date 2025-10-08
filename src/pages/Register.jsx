import api from "../axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { Typography } from "antd";
const schema = z.object({
  username: z.string().min(2, { message: "Ten phai co it nhat 2 ky tu" }),
  email: z.string().email({ message: "Email khong dung dinh dang" }),
  password: z.string().min(6, { message: "Mat khau phai co it nhat 6 ky tu" }),
});
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = schema.safeParse({ username, email, password });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError("");
    try {
      await api.post("/register", { username, email, password });
      nav("/login");
    } catch (err) {
      setError("Đăng ký thất bại!");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Register</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary w-100">Register</button>
        </div>
        <Typography.Link>
          <Link to="/login">Đã có tài khoản? Đăng nhập ngay</Link>
        </Typography.Link>
      </form>
    </div>
  );
};

export default Register;
