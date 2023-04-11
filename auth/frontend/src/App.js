import { Navigate, Route, Routes } from "react-router-dom";
import "./admin/css/Back-Css-Inc";
import Login from "./admin/pages/Login";
import Register from "./admin/pages/Register";
import Contents from "./admin/components/Contents";
import EmailVerify from "./admin/EmailVerify/EmailVerify";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import NotFoundPage from "./admin/components/404-Page";
import ForgotPassword from "./admin/pages/ForgotPassword";
import ResetPassword from "./admin/pages/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        {["/", "/login"].map((path) => (
          <Route path={path} element={<Login />} />
        ))}
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/users/:id/reset/:token" element={<ResetPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin-dashboard" element={<Contents />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
