import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Donor from "./pages/Donor";
import HealthScreening from "./pages/HealthScreening";
import ReceiverRegistration from "./pages/ReceiverRegistration";
import AvailableDonors from "./pages/AvailableDonors";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/donor" element={<Donor />} />
      <Route path="/health-screening" element={<HealthScreening />} />
      <Route path="/receiver" element={<ReceiverRegistration/>} />
      <Route path="/available-donors" element={<AvailableDonors />} />
    </Routes>
  );
}

export default App;