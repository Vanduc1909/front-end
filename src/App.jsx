import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRouter from "./PrivateRouter";
import Home from "./pages/Home";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
export default App;
