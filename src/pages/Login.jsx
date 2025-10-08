import api from "../axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { z } from "zod";

const schema = z.object({
  username: z.string().min(2, { message: "Ten phai co it nhat 2 ky tu" }),
  password: z.string().min(6, { message: "Mat khau phai co it nhat 6 ky tu" }),
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = schema.safeParse({ username, password });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError("");
    try {
      const response = await api.post("/login", { username, password });
      // console.log(response);

      localStorage.setItem("token", response.data.data.token);

      nav("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
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
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
