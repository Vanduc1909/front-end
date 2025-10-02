import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
